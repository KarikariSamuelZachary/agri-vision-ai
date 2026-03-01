# Agri-Vision AI

An end-to-end deep learning pipeline that identifies plant diseases from leaf images, enabling early intervention and reducing crop loss. Built on a fine-tuned **EfficientNetB0** backbone trained on the PlantVillage dataset, achieving **98.88% validation accuracy** across 15 disease classes.

## Results

| Phase | Description | Val Accuracy | Val Loss |
|-------|-------------|:------------:|:--------:|
| Phase 1 | Frozen backbone — head training only (20 epochs) | 97.84% | 0.0702 |
| Phase 2 | Fine-tuned top 30 backbone layers (50 epochs) | **98.88%** | **0.0323** |

## Features

- **High-Accuracy Disease Detection**: 98.88% validation accuracy across 15 plant disease classes
- **Transfer Learning**: EfficientNetB0 pretrained on ImageNet, fine-tuned with a two-phase strategy
- **Robust Data Pipeline**: Automated quality filtering, duplicate detection, and class-weighted training
- **Smart Augmentation**: Standard augmentation for majority classes; aggressive augmentation for minority classes
- **Multi-Crop Support**: Detects diseases in peppers, potatoes, and tomatoes
- **Production-Ready Inference**: `predict.py` returns top prediction and top-k confidence scores from raw image bytes
- **FastAPI Backend**: Ready to be served as a REST API

## Technology Stack

| Layer | Technology |
|-------|------------|
| Deep Learning | TensorFlow 2.18 / Keras — EfficientNetB0 |
| Data Processing | NumPy, Pandas, Pillow, scikit-learn |
| Visualisation | Matplotlib, Seaborn |
| API Backend | FastAPI, Uvicorn |
| Dataset | PlantVillage (20,637 raw images, 15 classes) |

## Dataset & Preprocessing

### Raw Dataset
- **20,637 images** across **15 disease classes** (3 crops: pepper, potato, tomato)
- Original images: 256×256 JPEG, RGB

### Cleaning & Quality Filtering (Notebooks 02–03)
| Filter | Threshold | Excluded |
|--------|-----------|:--------:|
| Exact duplicates | — | 14 |
| Cross-class duplicates | — | 4 |
| Low quality (blur / brightness / score) | blur ≥ 100, brightness ≥ 50, score ≥ 0.4 | 299 |
| **Total excluded** | | **312** |
| **Clean dataset** | | **20,325** |

### Train / Val / Test Splits
| Split | Images | Ratio |
|-------|:------:|:-----:|
| Train | 14,227 | 70% |
| Val | 3,049 | 15% |
| Test | 3,049 | 15% |

- Random seed: 42
- Target image size: **224×224** (EfficientNetB0 input)
- Class weights computed to handle imbalance (imbalance ratio: ~21×)

## Model Architecture

```
Input (224×224×3)
  └─ EfficientNetB0 (ImageNet weights, built-in preprocessing)
       └─ GlobalAveragePooling2D
            └─ BatchNormalization
                 └─ Dropout(0.4)
                      └─ Dense(256, relu)
                           └─ BatchNormalization
                                └─ Dropout(0.3)
                                     └─ Dense(15, softmax)
```

### Training Strategy

**Phase 1 — Head Training (Frozen Backbone)**
- Backbone frozen; only the classification head trained
- Optimizer: Adam (lr = 1e-3)
- Epochs: 20 | Callbacks: EarlyStopping (patience 8), ReduceLROnPlateau, ModelCheckpoint
- Result: val accuracy jumped from 91.73% → **97.84%** with val loss **0.0702**

**Phase 2 — Fine-tuning (Top 30 Layers Unfrozen)**
- Top 30 EfficientNetB0 layers unfrozen (~1.83M trainable parameters)
- Optimizer: Adam (lr = 1e-5) — very low to protect pretrained weights
- Epochs: 50 | Callbacks: EarlyStopping (patience 10), ReduceLROnPlateau, ModelCheckpoint
- Result: val accuracy climbed from 93.70% → **98.88%** with val loss **0.0323**
- Val loss was still improving at epoch 50 — further gains are possible

**Data Augmentation**
- *Standard* (majority classes): random horizontal/vertical flip, brightness ±0.2, contrast ×[0.8, 1.2]
- *Aggressive* (minority classes): above + saturation ×[0.7, 1.3], hue ±0.05

## Getting Started

### Prerequisites

- Python 3.8+
- pip

### Installation

```bash
git clone https://github.com/KarikariSamuelZachary/agri-vision-ai.git
cd agri-vision-ai
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### Running Inference

```python
from ml.src.predict import predict

with open("leaf.jpg", "rb") as f:
    result = predict(f.read(), top_k=3)

print(result["predicted_class"])   # e.g. "Tomato_Late_blight"
print(result["confidence"])        # e.g. 0.9871
print(result["top_k_predictions"]) # list of {class, confidence}
```

## Project Structure

```
agri-vision-ai/
├── README.md
├── LICENSE
├── requirements.txt
└── ml/
    ├── data/
    │   ├── metadata.json                    # Dataset-level statistics
    │   ├── raw/PlantVillage/                # Raw PlantVillage images (15 class folders)
    │   ├── splits/                          # train.csv / val.csv / test.csv
    │   └── processed/
    │       ├── preprocessing_config.json    # Full pipeline config (seeds, thresholds, splits)
    │       ├── class_to_index.json
    │       ├── index_to_class.json
    │       ├── class_weights.json
    │       ├── quality_analysis.csv         # Per-image quality scores
    │       ├── exact_duplicates.csv
    │       ├── near_duplicates.csv
    │       ├── cross_class_duplicates.csv
    │       └── duplicate_detection_summary.csv
    ├── models/
    │   ├── phase1_best.keras                # Best checkpoint after Phase 1
    │   └── best_model.keras                 # Best checkpoint after Phase 2 (production model)
    ├── notebooks/
    │   ├── 01_data_exploration.ipynb        # Class distribution, image properties
    │   ├── 02_data_quality.ipynb            # Blur, brightness, quality scoring
    │   ├── 03_duplicate_detection.ipynb     # Exact & near-duplicate removal
    │   ├── 04_split_feasibility.ipynb       # Stratified split analysis
    │   ├── 05_preprocessing.ipynb           # Final cleaning & split generation
    │   ├── 06_baseline_cnn.ipynb            # Baseline custom CNN experiments
    │   └── 07_model_training.ipynb          # EfficientNetB0 two-phase training
    └── src/
        └── predict.py                       # Inference module (FastAPI-ready)
```

## Supported Classes

### Peppers
- Bacterial spot
- Healthy

### Potatoes
- Early blight
- Late blight
- Healthy

### Tomatoes
- Bacterial spot
- Early blight
- Late blight
- Leaf mold
- Septoria leaf spot
- Spider mites (two-spotted spider mite)
- Target spot
- Tomato mosaic virus
- Tomato Yellow Leaf Curl Virus
- Healthy

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Author

**Karikari Samuel**

- GitHub: [@KarikariSamuelZachary](https://github.com/KarikariSamuelZachary)

## Acknowledgments

- PlantVillage dataset for providing the training images
- EfficientNet authors for the backbone architecture
- Built to support farmers and agricultural consultants in identifying plant diseases early
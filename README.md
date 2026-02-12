# Agri-Vision AI 

An end-to-end deep learning application that identifies plant diseases from leaf images, enabling early intervention and reducing crop loss. Built with convolutional neural networks (CNN) and deployed as a user-friendly web application for gardeners, farmers and agricultural consultants.

## Features

- **Disease Detection**: Accurately identifies various plant diseases from leaf images
- **Deep Learning Powered**: Uses CNN (Convolutional Neural Networks) for image classification
- **Multi-Crop Support**: Detects diseases in peppers, potatoes, and tomatoes
- **User-Friendly Interface**: Simple web application for easy image upload and diagnosis
- **Early Intervention**: Helps farmers and gardeners take timely action to prevent crop loss
- **Fast Results**: Quick analysis and diagnosis of plant health issues

## Technology Stack

- **Machine Learning**: Deep Learning with CNN (TensorFlow/Keras)
- **Computer Vision**: Image processing and classification
- **Dataset**: PlantVillage dataset for training
- **Web Framework**: For deploying the application interface

## Getting Started

### Prerequisites

- Python 3.8 or higher
- TensorFlow 2.x
- NumPy, Pandas, Matplotlib
- Jupyter Notebook (for development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KarikariSamuelZachary/agri-vision-ai.git
cd agri-vision-ai
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the application:
```bash
# Run instructions to be added
```

## Usage

1. Upload an image of a plant leaf
2. The AI model analyzes the image
3. Receive instant diagnosis and disease identification
4. Get recommendations for treatment (if applicable)

## Project Structure

```
agri-vision-ai/
├── README.md              # Project documentation
├── LICENSE               # MIT License
├── .gitignore            # Git ignore configuration
└── ml/
    ├── data/
    │   ├── raw/          # Raw dataset (PlantVillage)
    │   │   └── PlantVillage/
    │   │       ├── Pepper__bell___Bacterial_spot/
    │   │       ├── Pepper__bell___healthy/
    │   │       ├── Potato___Early_blight/
    │   │       ├── Potato___healthy/
    │   │       ├── Potato___Late_blight/
    │   │       ├── Tomato_Bacterial_spot/
    │   │       ├── Tomato_Early_blight/
    │   │       ├── Tomato_healthy/
    │   │       ├── Tomato_Late_blight/
    │   │       └── ... (other disease classes)
    │   └── processed/    # Preprocessed data
    ├── models/
    │   └── saved_model/  # Trained models
    ├── notebooks/        # Jupyter notebooks for experimentation
    └── scripts/          # Python scripts for training and inference
```

## Supported Diseases

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
- Target spot
- Tomato mosaic virus
- Tomato Yellow Leaf Curl Virus
- Healthy

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Karikari Samuel**

- GitHub: [@KarikariSamuelZachary](https://github.com/KarikariSamuelZachary)

## Acknowledgments

- Built to support farmers and agricultural consultants in identifying plant diseases
- Aimed at reducing crop loss through early disease detection
- Dataset provided by PlantVillage

---

**Note**: This project is in development. More features and documentation will be added as the project progresses.
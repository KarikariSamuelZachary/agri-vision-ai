import json
import numpy as np
from pathlib import Path
import tensorflow as tf
from tensorflow import keras

# Paths
MODELS_DIR = Path(__file__).parent.parent / "models"
MODEL_PATH = MODELS_DIR / "best_model.keras"
INDEX_TO_CLASS_PATH = MODELS_DIR / "index_to_class.json"
CONFIG_PATH = MODELS_DIR / "preprocessing_config.json"

# Load artifacts once at import time
print("Loading model and artifacts...")

model = keras.models.load_model(str(MODEL_PATH))

with open(INDEX_TO_CLASS_PATH) as f:
    index_to_class = {int(k): v for k, v in json.load(f).items()}

with open(CONFIG_PATH) as f:
    config = json.load(f)

IMAGE_SIZE = tuple(config["image_size"])
N_CLASSES = len(index_to_class)

print(f"Model loaded — {N_CLASSES} classes, image size {IMAGE_SIZE}")


def preprocess_image(image_bytes: bytes) -> tf.Tensor:
    """
    Accepts raw image bytes and returns a preprocessed tensor
    ready for inference.
    """
    image = tf.image.decode_image(image_bytes, channels=3, expand_animations=False)
    image = tf.image.resize(image, IMAGE_SIZE)
    image = tf.cast(image, tf.float32)
    image = tf.expand_dims(image, axis=0)  # add batch dimension
    return image


def predict(image_bytes: bytes, top_k: int = 3) -> dict:
    """
    Run inference on raw image bytes.

    Args:
        image_bytes: Raw bytes of the uploaded image
        top_k: Number of top predictions to return

    Returns:
        dict with keys:
            - predicted_class: top predicted class name
            - confidence: confidence score for top prediction
            - top_k_predictions: list of {class, confidence} dicts
    """
    image = preprocess_image(image_bytes)
    predictions = model.predict(image, verbose=0)[0]

    # Top prediction
    top_index = int(np.argmax(predictions))
    top_class = index_to_class[top_index]
    top_confidence = float(predictions[top_index])

    # Top K predictions
    top_k_indices = np.argsort(predictions)[::-1][:top_k]
    top_k_predictions = [
        {
            "predicted_class": index_to_class[int(i)],
            "confidence": float(predictions[i])
        }
        for i in top_k_indices
    ]

    return {
        "predicted_class": top_class,
        "confidence": round(top_confidence, 4),
        "top_k_predictions": top_k_predictions
    }


if __name__ == "__main__":
    # Quick test with a dummy image
    print("Running quick sanity check...")
    dummy = tf.random.uniform((224, 224, 3), minval=0, maxval=255, dtype=tf.float32)
    dummy_bytes = tf.image.encode_jpeg(tf.cast(dummy, tf.uint8)).numpy()
    result = predict(dummy_bytes)
    print(f"Predicted class: {result['predicted_class']}")
    print(f"Confidence: {result['confidence']}")
    print(f"Top 3: {result['top_k_predictions']}")
    print("Sanity check passed.")
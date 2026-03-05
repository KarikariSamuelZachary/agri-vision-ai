from fastapi import HTTPException
from ml.src.predict import predict

def run_prediction(image_bytes):
    try:
        result = predict(image_bytes)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Model prediction failed: {str(e)}")
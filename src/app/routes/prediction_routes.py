from fastapi import APIRouter, UploadFile, File, HTTPException
from src.app.services.model_service import run_prediction
from src.app.schemas.prediction_schema import PredictionResponse

router = APIRouter()

MAX_FILE_SIZE = 5 * 1024 * 1024  # 5MB

@router.post("/", response_model=PredictionResponse)
async def predict_disease(file: UploadFile = File(...)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")
    
    image_bytes = await file.read()

    if len(image_bytes) > MAX_FILE_SIZE:
        raise HTTPException(status_code=400, detail="File size exceeds 5MB limit")
    
    result = run_prediction(image_bytes)
    return result
from fastapi import FastAPI

from src.app.core.config import settings
from src.app.routes.prediction_routes import router

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
)

app.include_router(router, prefix="/predict_disease")

@app.get("/")
def root():
    return {"message": "agri-vision-ai system api is running"}
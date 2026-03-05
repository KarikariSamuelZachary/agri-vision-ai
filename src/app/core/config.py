from pydantic_settings import BaseSettings
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[3]
class Settings(BaseSettings):
    APP_NAME:str = "agri-vision-ai"
    APP_VERSION:str = "1.0.0"
    MODEL_DIR:str = str(BASE_DIR / "ml" / "models")

settings = Settings()

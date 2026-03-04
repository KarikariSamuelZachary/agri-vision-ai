from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    APP_NAME:str = "agri-vision-ai"
    APP_VERSION:str = "1.0.0"
    MODEL_DIR:str = "../../../ml/models"

settings = Settings()

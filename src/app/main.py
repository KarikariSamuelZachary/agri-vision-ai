from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.app.core.config import settings
from src.app.routes.prediction_routes import router
from ml.src.predict import initialize


@asynccontextmanager
async def lifespan(app: FastAPI):
    initialize()
    yield


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/predict")

@app.get("/")
def root():
    return {"message": "agri-vision-ai system api is running"}

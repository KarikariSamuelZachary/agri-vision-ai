from pydantic import BaseModel

class Top_K_predictions(BaseModel):
    predicted_class:str
    confidence:float

class PredictionResponse(BaseModel):
    predicted_class:str
    confidence:float
    top_k_predictions:list[Top_K_predictions]


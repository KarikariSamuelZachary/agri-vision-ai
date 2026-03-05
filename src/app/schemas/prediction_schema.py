from pydantic import BaseModel

class TopKPredictions(BaseModel):
    predicted_class:str
    confidence:float

class PredictionResponse(BaseModel):
    predicted_class:str
    confidence:float
    top_k_predictions:list[TopKPredictions]


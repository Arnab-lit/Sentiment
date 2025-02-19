from fastapi import FastAPI
import pandas as pd
from model import sentiment_model

app = FastAPI()

@app.post("/predict/")
async def predict_sentiment(text: str):
    sentiment = sentiment_model.predict(text)
    return {"sentiment": sentiment}

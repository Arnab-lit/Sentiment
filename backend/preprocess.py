import pandas as pd
import torch
from transformers import BertTokenizer

# Load dataset
df = pd.read_csv("dataset.csv")  

# Text preprocessing
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")

def preprocess_text(text):
    return tokenizer(text, truncation=True, padding=True, return_tensors="pt")

df["processed_text"] = df["text"].apply(preprocess_text)
df.to_csv("processed_dataset.csv", index=False)

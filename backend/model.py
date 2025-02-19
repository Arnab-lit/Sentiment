import torch
from transformers import BertForSequenceClassification

class SentimentModel:
    def __init__(self):
        self.model = BertForSequenceClassification.from_pretrained("nlptown/bert-base-multilingual-uncased-sentiment")
        self.model.eval()
    
    def predict(self, input_text):
        inputs = tokenizer(input_text, return_tensors="pt", truncation=True, padding=True)
        with torch.no_grad():
            output = self.model(**inputs)
        return torch.argmax(output.logits).item()

sentiment_model = SentimentModel()

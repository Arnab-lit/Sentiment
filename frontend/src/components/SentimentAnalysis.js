import React, { useState } from "react";
import { predictSentiment } from "../api";
import "./SentimentAnalysis.css";

const SentimentAnalysis = () => {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState(null);

  const handleSubmit = async () => {
    const result = await predictSentiment(text);
    setSentiment(result.sentiment);
  };

  // Color Mapping for Sentiment
  const getSentimentColor = () => {
    if (sentiment === "positive") return "green";
    if (sentiment === "negative") return "red";
    return "blue"; // Neutral
  };

  return (
    <div className="sentiment-container">
      <h2 className="title">Multimodal Sentiment Analysis</h2>
      <textarea
        className="text-input"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="analyze-btn" onClick={handleSubmit}>
        Analyze
      </button>
      {sentiment !== null && (
        <h3 className="sentiment-result" style={{ color: getSentimentColor() }}>
          Sentiment: {sentiment}
        </h3>
      )}
    </div>
  );
};

export default SentimentAnalysis;

import React from "react";
import SentimentAnalysis from "./components/SentimentAnalysis";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f3f4f6" }}>
      <SentimentAnalysis />
    </div>
  );
}

export default App;

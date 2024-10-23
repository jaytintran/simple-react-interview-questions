import "./index.css";
import { reactFAQ, interviewFAQ } from "./questions";
import { useState } from "react";

function Card({ question, answer }) {
  const [isQuestionVisible, setIsQuestionVisible] = useState(true);

  const toggleVisibility = () => {
    setIsQuestionVisible((prev) => !prev); // Use functional update
  };

  return (
    <section className="card" onClick={toggleVisibility} role="button">
      <p className="card-question">
        {isQuestionVisible === true ? question : answer}
      </p>
    </section>
  );
}

export default function App() {
  const [faqType, setFaqType] = useState("Normal");

  const handleFaqChange = (e) => {
    setFaqType(e.target.value);
  };

  // Conditionally render the FAQ based on the selected type
  const faqData = faqType === "Normal" ? reactFAQ : interviewFAQ;

  return (
    <div className="App">
      <select
        onChange={handleFaqChange}
        value={faqType}
        style={{ padding: "10px 20px", borderRadius: "10px" }}
      >
        <option value="Normal">Normal</option>
        <option value="Interview">Interview</option>
      </select>
      <div className="container">
        {faqData.map((card) => (
          <Card key={card.id} question={card.question} answer={card.answer} />
        ))}
      </div>
    </div>
  );
}

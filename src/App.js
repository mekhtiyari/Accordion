import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [question, setQuestion] = useState(data);
  console.log(data);
  return (
    <main>
      <div className="container">
        <h3>Question and answer about login</h3>
        <section className="info">
          {question.map((soal) => {
            return <SingleQuestion key={soal.id} {...soal} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;

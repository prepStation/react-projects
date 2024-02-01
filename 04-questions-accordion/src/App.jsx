import { useState } from "react";
import data from "./data";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };
  return (
    <main>
      <Questions
        toggleQuestion={toggleQuestion}
        questions={questions}
        activeId={activeId}
      />
    </main>
  );
};
export default App;

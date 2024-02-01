import { useState } from "react";
import ColourList from "./ColourList";
import Form from "./Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colours, setColours] = useState(new Values("#f15025").all(10));
  const addColour = (colour) => {
    console.log(colour);
    try {
      const newColours = new Values(colour).all(10);
      setColours(newColours);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <main>
      <Form addColour={addColour} />
      <ColourList colours={colours} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;

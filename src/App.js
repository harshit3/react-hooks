import React, { useState, useEffect } from "react";
import Row from "./Row";

import "./style.css";

function App() {
  const firstname = useInputForm("Harshit");
  const lastname = useInputForm("Agrawal");
  const { width, height } = useWindowSize();

  return (
    <div className="App">
      <Row label="First Name">
        <input type="text" {...firstname} />
      </Row>
      <Row label="Last Name">
        <input type="text" {...lastname} />
      </Row>
      <Row label="Window Width">{width}</Row>
      <Row label="Window Height">{height}</Row>
      {firstname.value} {lastname.value}
    </div>
  );
}

function useWindowSize() {
  let [width, setWidth] = useState(window.innerWidth);
  let [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return { width, height };
}

function useInputForm(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  };
}

export default App;
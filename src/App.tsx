import { useState } from "react";
import "./App.css";

type ButtonState = "DEFAULT" | "SELECTED" | "WRONG";

function CountryCapitalGame({ data }: { data: Record<string, string> }) {
  const countries = Object.keys(data);
  const capitals = Object.values(data);
  const options = [...countries, ...capitals];
  const [colorMap, setColorMap] = useState<Record<string, ButtonState>>({});

  options.sort(() => Math.random() - 0.5);

  return (
    <>
      {options.map((option) => (
        <button
          className={colorMap[option] === "SELECTED" ? "selected" : ""}
          onClick={() => {
            // set bg to blue 4009Bff
            setColorMap({
              ...colorMap,
              [option]: "SELECTED",
            });
          }}
        >
          {option}
        </button>
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <CountryCapitalGame data={{ Germany: "Berlin", Azerbaijan: "Baku" }} />
    </>
  );
}

export default App;

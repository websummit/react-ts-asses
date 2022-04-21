import React from "react";
import Tile from "./components/Tile/Tile";
import Data from "./components/Tile/Data.json";

export default function App() {
  return (
    <div className="App">
      {Object.keys(Data).map((item: string) => {
        return <Tile key={Data[item]} {...Data[item]} />;
      })}
    </div>
  );
}

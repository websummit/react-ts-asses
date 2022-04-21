import Tile from "./components/Tile/Tile";
import Data from "./components/Tile/Data.json";

export default function App() {
  return (
    <div className="App">
      <h1>Test Application</h1>
      {[...Object.keys(Data)].map((item: string) => {
        return (
          <>
            <Tile key={Data[item].name} location={Data[item].location} />
          </>
        );
      })}
    </div>
  );
}

import "./App.css";
import { PropertiesDisplay } from "./components/properties-display";

function App() {
  return (
    <>
      <h1 className="text-3xl md:text-6xl font-bold mb-8 opacity-60">
        Welcome to Marvelous Mansions
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold mb-6">
        A one stop shop to your dream property!
      </h2>
      <h3 className="text-xl md:text-3xl font-bold mb-4 opacity-60">Current property listings:</h3>
      <PropertiesDisplay />
    </>
  );
}

export default App;

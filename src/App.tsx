import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import type { ITechnology } from "./utils/types";
import Technologies from "./components/ui/technologies/Technologies";

function App() {
  const [data, setData] = useState<ITechnology[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <Technologies data={data}></Technologies>
      </div>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import type { ITechnology } from "./utils/types";
import Technologies from "./components/ui/technologies/Technologies";
import Hero from "./components/ui/hero/Hero";

function App() {
  const [data, setData] = useState<ITechnology[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <Hero></Hero>
        <Technologies data={data}></Technologies>
      </div>
    </>
  );
}

export default App;

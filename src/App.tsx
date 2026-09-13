import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import type { ITechnology } from "./utils/types";
import Technologies from "./components/ui/technologies/Technologies";
import Footer from "./components/shared/Footer";
import Hero from "./components/ui/hero/Hero";

function App() {
  const [data, setData] = useState<ITechnology[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => setData(res))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-3" role="status">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#D91B7E]" />
          <p className="text-sm text-gray-500">Loading technologies...</p>
        </div>
      </main>
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-4">
        <Navbar></Navbar>
        <Hero></Hero>
        <Technologies data={data}></Technologies>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

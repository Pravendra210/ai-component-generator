import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      
      <Route path="/" element={<HeroSection/>}/>
    </Routes>
    
    </>
  );
}

export default App;

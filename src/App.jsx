
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import MainSection from "./components/mainsection";
import AppBar from "./components/appbar";
import About from "./components/About";
import Techs from "./components/Techs";
function App() {
  return (
    <BrowserRouter >
      <div className="relative bg-firstBgColor h-full    bg-cover bg-no-repeat w-full">
        <div className=" bg-cover bg-no-repeat bg-center">
          <AppBar />
          <MainSection />

          <About />
          <Techs />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

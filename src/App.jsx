
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import MainSection from "./components/mainsection";
import AppBar from "./components/appbar";
import About from "./components/About";
function App() {
  return (
    <BrowserRouter >
      <div className="relative bg-firstBgColor h-full    bg-cover bg-no-repeat w-full">
        <div className=" bg-cover bg-no-repeat bg-center">
          <AppBar />
          <MainSection />

          <About />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

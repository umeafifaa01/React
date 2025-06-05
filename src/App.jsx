import FooterComp from "./components/FooterComp";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HomePage />
        <FooterComp />
      </div>
    </>
  );
}

export default App;

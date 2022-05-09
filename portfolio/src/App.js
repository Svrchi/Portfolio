import "./App.css";
import Intro from "./Components/intro/Intro";
import About from "./Components/about/about";
import ProductList from "./Components/productList/productList";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <ProductList/>
    </div>
  );
}

export default App;

import "./App.css";
import Intro from "./Components/intro/Intro";
import About from "./Components/about/about";
import ProductList from "./Components/productList/productList";
import Contact from "./Components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Banner from "./pages/Banner/Banner";
import Articles from "./pages/Articles/Articles";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Service />
        <Banner />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;

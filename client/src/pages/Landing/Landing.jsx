import "../../App.css";
import About from "../../components/about/about";
import Header from "../../components/header/header";
import Nav from "../../components/nav/nav";
import Contact from "../../components/contact/contact";
import Portfolio from "../../components/portfolio/portfolio";
import Videos from "../../components/videos/videos";

function Landing() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Videos />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Landing;

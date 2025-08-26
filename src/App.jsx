
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NewsletterTopbar from "./components/Newslettertopnavbar";
import TopNavbar from "./components/Topnavbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImageCarousel from './components/ImageCarousel';

// Pages
import SuperNavbar from "./components/Newslettertopnavbar";
import Aboutus from "./assets/pages/Aboutus";
import TrackUs from "./assets/pages/trackus";
import Faq from "./assets/pages/faq";
import Caone from "./assets/pages/caone";
import Readbook from "./assets/pages/readbooks";
import Catwo from "./assets/pages/catwo";
import Cathree from "./assets/pages/cathree";
import Authors from "./assets/pages/Authors";
import Authorss from "./assets/pages/Authorss";
import Home from "./assets/pages/Categories";
import Full from "./assets/pages/fullimage";
import Scroll from "./assets/pages/scroll";
import Author from "./assets/pages/Author";
import About from "./assets/pages/Friction";
import Friction2 from "./assets/pages/fripage2"; 
import Friction3 from "./assets/pages/fripage3";
import Combo from "./assets/pages/combo";
import Non from "./assets/pages/nonfriction";
import Error from "./assets/pages/Error";
import SignIn from "./assets/pages/signin";
import Reg from "./assets/pages/Reg";
import Cart from "./assets/pages/cart";
import Second from "./assets/pages/secondfullimage";
import Box from "./assets/pages/boxes";
import Quiz from "./assets/pages/Quiz";
import Books from "./assets/pages/Quizes";
import Geography from "./assets/Geo";

function Layout() {
  const location = useLocation();

  return (
    <>
      <NewsletterTopbar />
      <TopNavbar />
      <Navbar />

      {/* ✅ Home page special sections */}
      {location.pathname === "/" && (
        <>
          <ImageCarousel />
          <Home />
          <Scroll />
          <Full />
          <Second />
          <Box />
          <Authors />
          <Authorss />
        </>
      )}

      {/* ✅ Page routes */}
      <Routes>
        <Route path="/" element={<Author />} />  {/* maybe change this later to <HomePage /> */}
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/trackus" element={<TrackUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/caone" element={<Caone />} />
        <Route path="/catwo" element={<Catwo />} />
        <Route path="/cathree" element={<Cathree />} />
        <Route path="/newsletters" element={<SuperNavbar />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quizes" element={<Books />} />
        <Route path="/geo" element={<Geography />} />
        <Route path="/friction" element={<About />} />
        <Route path="/fripage2" element={<Friction2 />} />
        <Route path="/fripage3" element={<Friction3 />} />
        <Route path="/combo" element={<Combo />} />
        <Route path="/nonfriction" element={<Non />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {/* ✅ Readbook for certain pages */}
      {["/caone", "/catwo", "/cathree"].includes(location.pathname) && <Readbook />}

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

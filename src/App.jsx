import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Newsletter } from "./components/Newsletter";
import TopNavbar from "./components/TopNavbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";
import Sub from "./components/subscription";

// Pages
import Aboutus from "./assets/pages/Aboutus";
import TrackUs from "./assets/pages/Trackus";
import Faq from "./assets/pages/Faq";

import Readbook from "./assets/pages/Readbooks";
import Catwo from "./assets/pages/Catwo";
import Cathree from "./assets/pages/Cathree";
import Authors from "./assets/pages/Authors";
import Authorss from "./assets/pages/Authorss";
import Home from "./assets/pages/Categories";
import Full from "./assets/pages/Fullimage";
import Scroll from "./assets/pages/Scroll";
import Author from "./assets/pages/Author";
import Friction from "./assets/pages/Friction";
import Friction2 from "./assets/pages/Fripage2";
import Friction3 from "./assets/pages/Fripage3";
import Combo from "./assets/pages/Combo";
import Non from "./assets/pages/Nonfriction";
import Error from "./assets/pages/Error";
import SignIn from "./assets/pages/Signin";
import Reg from "./assets/pages/Reg";
import Cart from "./assets/pages/Cart";
import Second from "./assets/pages/Secondfullimage";
import Box from "./assets/pages/Boxes";
import Quiz from "./assets/pages/Quiz";
import Books from "./assets/pages/Quizes";
import Geography from "./assets/Geo";
import SimpleLayout from "./assets/pages/Caone";

function Layout() {
  const location = useLocation();

  return (
    <>
    <Newsletter/>

      <TopNavbar />
      <Navbar />

      {/* ✅ Home page */}
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

      {/* ✅ Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/trackus" element={<TrackUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/caone" element={<SimpleLayout />} />
        <Route path="/catwo" element={<Catwo />} />
        <Route path="/cathree" element={<Cathree />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quizes" element={<Books />} />
        <Route path="/geo" element={<Geography />} />
        <Route path="/friction" element={<Friction />} />
        <Route path="/fripage2" element={<Friction2 />} />
        <Route path="/fripage3" element={<Friction3 />} />
        <Route path="/combo" element={<Combo />} />
        <Route path="/nonfriction" element={<Non />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/cart" element={<Cart />} />
        
        <Route path="/subscription" element={<Sub/>} />
        <Route path="*" element={<Error />} />
      </Routes>

      {/* ✅ Readbook only for category pages */}
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

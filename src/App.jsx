import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import NewsletterTopbar from "./components/NewsletterTopNavbar";
import TopNavbar from "./components/TopNavbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";

// Pages
import Newsletter from "./assets/pages/Newsletters";
import AboutUs from "./assets/pages/AboutUs";
import TrackUs from "./assets/pages/TrackUs";
import Faq from "./assets/pages/Faq";
import Caone from "./assets/pages/Caone";
import ReadBooks from "./assets/pages/ReadBooks";
import Catwo from "./assets/pages/Catwo";
import Cathree from "./assets/pages/Cathree";
import Authors from "./assets/pages/Authors";
import Authorss from "./assets/pages/Authorss";
import Categories from "./assets/pages/Categories"; // Home page
import FullImage from "./assets/pages/FullImage";
import Scroll from "./assets/pages/Scroll";
import Author from "./assets/pages/Author";
import Friction from "./assets/pages/Friction";
import FriPage2 from "./assets/pages/FriPage2";
import FriPage3 from "./assets/pages/FriPage3";
import Combo from "./assets/pages/Combo";
import NonFriction from "./assets/pages/NonFriction";
import ErrorPage from "./assets/pages/Error";
import SignIn from "./assets/pages/SignIn";
import Register from "./assets/pages/Reg";
import Cart from "./assets/pages/Cart";
import SecondFullImage from "./assets/pages/SecondFullImage";
import Boxes from "./assets/pages/Boxes";
import Quiz from "./assets/pages/Quiz";

 // fixed spelling
 // inside pages folder

function App() {
  return (
    <Router>
      <NewsletterTopbar />
      <TopNavbar />
      <Navbar />
      <ImageCarousel />

      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/track-us" element={<TrackUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/caone" element={<Caone />} />
        <Route path="/readbook" element={<ReadBooks />} />
        <Route path="/catwo" element={<Catwo />} />
        <Route path="/cathree" element={<Cathree />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/authorss" element={<Authorss />} />
        <Route path="/full" element={<FullImage />} />
        <Route path="/scroll" element={<Scroll />} />
        <Route path="/author" element={<Author />} />
        <Route path="/Friction" element={<Friction />} />
        <Route path="/friction2" element={<FriPage2 />} />
        <Route path="/friction3" element={<FriPage3 />} />
        <Route path="/Combo" element={<Combo />} />
        <Route path="/non" element={<NonFriction />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/second" element={<SecondFullImage />} />
        <Route path="/box" element={<Boxes />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/books" element={<Quizzes />} />
        <Route path="/geography" element={<Geography />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

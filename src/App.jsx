import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Newsletter } from "./components/Newsletter";
import TopNavbar from "./components/Topnavbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";
import Sub from "./components/subscription";

// Pages
import Aboutus from "./assets/pages/Aboutus";
import TrackUs from "./assets/pages/Track";  // ✅ fixed casing
import Faq from "./assets/pages/Fre";

import Readbook from "./assets/pages/Read";
import Catwo from "./assets/pages/Ca";

import Authors from "./assets/pages/Authors";
import Authorss from "./assets/pages/Authorss";
import Home from "./assets/pages/Categories";
import Full from "./assets/pages/Fullimage.jsx";

import Scroll from "./assets/pages/Scroll";
import Author from "./assets/pages/Author";
import Friction from "./assets/pages/Friction";
import Friction2 from "./assets/pages/Fripage2";
import Friction3 from "./assets/pages/Fripage3";
import Combo from "./assets/pages/Combo";
import Non from "./assets/pages/Nonfriction";


import Academic from "./assets/pages/acdemic";
// ✅ fixed name
import Error from "./assets/pages/Error";
import SignIn from "./assets/pages/Signin";
import Reg from "./assets/pages/Reg";
import Cart from "./assets/pages/Cart";
import ClientImagesCenter from "./assets/pages/clientscroll";
import Dashboard from "./assets/pages/Dashboard";
import FourBoxes from "./assets/pages/boxes";
import Second from "./assets/pages/Secondfullimage";
import Quiz from "./assets/pages/Quiz";
import Books from "./assets/pages/Quizes";
import Geography from "./assets/Geo";
import SimpleLayout from "./assets/pages/Caone";
import TwoImagesSection from "./assets/pages/Images";
import Imagesection from "./assets/pages/Imagesss";
import Imagesections from "./assets/pages/oneimage";
import Orders from "./assets/pages/Orders";
import Wishlist from "./assets/pages/Wishlist";
import Profile from "./assets/pages/Profile";
import Spiritual from "./assets/pages/Spirtual";
import Blog from "./assets/pages/Blog";
import Bookmarks from "./assets/pages/Bookmarks";
import BlogDetail from "./assets/pages/Blogdetails";
import Settings from "./assets/pages/Settings";

function Layout() {
  const location = useLocation();

  return (
    <>
      <Newsletter />
      <TopNavbar />
      <Navbar />

      {/* ✅ Home page */}
      {location.pathname === "/" && (
        <>
          <ImageCarousel />
          <Home />
          <Scroll />
          <Full />
          <FourBoxes />
          <Second />
          <Authors />
            <ClientImagesCenter/>
          <Authors />
          <TwoImagesSection />
          <Author />
          <Imagesection />
          <Imagesections />
        </>
      )}

      {/* ✅ Routes */}
      <Routes>
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/trackus" element={<TrackUs />} />   {/* ✅ lowercase route */}
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
        <Route path="/Nonfriction" element={<Non />} /> 
            <Route path="/Acdemic" element={<Academic/>} /> 
              {/* ✅ fixed route */}
               <Route path="/Spirtual" element={<Spiritual/>} /> 
                       <Route path="/Blog" element={<Blog/>} /> 
              {/* ✅ fixed route */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/subscription" element={<Sub />} />
               <Route path="/Dashboard" element={<Dashboard />} />
                     <Route path="/Orders" element={<Orders/>} />
                      <Route path="/Wishlist" element={<Wishlist/>} />
                           <Route path="/Profile" element={<Profile/>} />
                              <Route path="/Bookmarks" element={<Bookmarks/>} />
                                  <Route path="/Blogdetails" element={<BlogDetail/>} />
                                  <Route path="/Settings" element={<Settings/>} />
                         
                         
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

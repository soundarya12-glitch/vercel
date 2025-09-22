import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import { Newsletter } from "./components/Newsletter";
import TopNavbar from "./components/Topnavbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";
import Sub from "./components/subscription";

// Pages
import Aboutus from "./assets/pages/Aboutus.jsx";
import TrackUs from "./assets/pages/Track.jsx";
import Faq from "./assets/pages/Fre.jsx";
import Readbook from "./assets/pages/Read.jsx";
import Catwo from "./assets/pages/Ca.jsx";

import Authors from "./assets/pages/Authors.jsx";
import Authorss from "./assets/pages/Authorss.jsx";
import Home from "./assets/pages/Categories.jsx";
import Full from "./assets/pages/Fullimage.jsx";
import Scroll from "./assets/pages/Scroll.jsx";
import Author from "./assets/pages/Author.jsx";
import Friction from "./assets/pages/Friction.jsx";
import Friction2 from "./assets/pages/Fripage2.jsx";
import Friction3 from "./assets/pages/Fripage3.jsx";
import Combo from "./assets/pages/Combo.jsx";
import Non from "./assets/pages/Nonfriction.jsx";
import Academic from "./assets/pages/Academic.jsx";
import Error from "./assets/pages/Error.jsx";
import SignIn from "./assets/pages/Signin.jsx";
import Reg from "./assets/pages/Reg.jsx";
import Cart from "./assets/pages/Cart.jsx";
import ClientImagesCenter from "./assets/pages/clientscroll.jsx";
import Dashboard from "./assets/pages/Dashboard.jsx";
import FourBoxes from "./assets/pages/boxes.jsx";
import Second from "./assets/pages/Secondfullimage.jsx";
import Quiz from "./assets/pages/Quiz.jsx";
import Books from "./assets/pages/Quizes.jsx";
import Geography from "./assets/Geo.jsx";
import SimpleLayout from "./assets/pages/Caone.jsx";
import TwoImagesSection from "./assets/pages/Images.jsx";
import Imagesection from "./assets/pages/Imagesss.jsx";
import Imagesections from "./assets/pages/oneimage.jsx";
import Orders from "./assets/pages/Orders.jsx";
import Wishlist from "./assets/pages/Wishlist.jsx";
import Profile from "./assets/pages/Profile.jsx";
import Spiritual from "./assets/pages/Spiritual.jsx";
import Blog from "./assets/pages/Blog.jsx";
import Bookmarks from "./assets/pages/Bookmarks.jsx";
import BlogDetail from "./assets/pages/Blogdetails.jsx";
import Settings from "./assets/pages/Settings.jsx";

function Layout() {
  const location = useLocation();

  return (
    <>
      <Newsletter />
      <TopNavbar />
      <Navbar />

      {/* Home page */}
      {location.pathname === "/" && (
        <>
          <ImageCarousel />
          <Home />
          <Scroll />
          <Full />
          <FourBoxes />
          <Second />
          <Authors />
          <ClientImagesCenter />
          <Authors />
          <TwoImagesSection />
          <Author />
          <Imagesection />
          <Imagesections />
        </>
      )}

      {/* Routes */}
      <Routes>
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
        <Route path="/academic" element={<Academic />} />
        <Route path="/spiritual" element={<Spiritual />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/subscription" element={<Sub />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/blogdetails" element={<BlogDetail />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>

      {/* Readbook only for category pages */}
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

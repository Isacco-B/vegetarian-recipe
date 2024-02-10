import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import RecipePage from "./pages/RecipePage";
import NotFound from "./pages/NotFound";
import Subscribe from "./pages/Subscribe";


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/recipe/:recipeId" element={<RecipePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

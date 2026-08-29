import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ApplicationsPage } from './pages/Applications';
import { SmoothScroll } from './components/SmoothScroll';
import {
  AboutPage,
  ContactPage,
  NotFoundPage,
  ProductDetailPage,
  ProductsPage,
} from './pages/CompanyPages';
function App() {
  return (
    <>
      <SmoothScroll />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export { App };

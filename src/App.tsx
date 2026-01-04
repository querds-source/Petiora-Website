import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { WishlistProvider } from './context/WishlistContext';
import { NotificationsProvider } from './context/NotificationsContext';
import { ComparisonProvider } from './context/ComparisonContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { NotificationToast } from './components/ui/NotificationToast';
import { ProductComparison } from './components/products/ProductComparison';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { AccountPage } from './pages/AccountPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { ShippingPage } from './pages/ShippingPage';
import { FAQPage } from './pages/FAQPage';
export function App() {
  return <BrowserRouter>
      <ScrollToTop />
      <NotificationsProvider>
        <UserProvider>
          <WishlistProvider>
            <CartProvider>
              <ComparisonProvider>
                <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
                  <Header />
                  <NotificationToast />
                  <ProductComparison />
                  {/* Adjusted padding: Mobile 72px, Desktop 36px (topbar) + 80px (header) = ~116px */}
                  <div className="flex-1 pt-[72px] sm:pt-[116px]">
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/productos" element={<ProductsPage />} />
                      <Route path="/productos/:id" element={<ProductDetailPage />} />
                      <Route path="/carrito" element={<CartPage />} />
                      <Route path="/checkout" element={<CheckoutPage />} />
                      <Route path="/sostenibilidad" element={<SustainabilityPage />} />
                      <Route path="/blog" element={<BlogPage />} />
                      <Route path="/blog/:id" element={<BlogDetailPage />} />
                      <Route path="/nosotros" element={<AboutPage />} />
                      <Route path="/contacto" element={<ContactPage />} />
                      <Route path="/envios" element={<ShippingPage />} />
                      <Route path="/faq" element={<FAQPage />} />

                      {/* Account Routes - Nested Routing */}
                      <Route path="/cuenta/*" element={<AccountPage />} />
                      <Route path="/favoritos" element={<FavoritesPage />} />

                      {/* Legal Routes */}
                      <Route path="/privacidad" element={<PrivacyPolicyPage />} />
                      <Route path="/terminos" element={<TermsPage />} />
                      <Route path="/cookies" element={<CookiePolicyPage />} />
                    </Routes>
                  </div>
                  <Footer />
                  <CookieBanner />
                </div>
              </ComparisonProvider>
            </CartProvider>
          </WishlistProvider>
        </UserProvider>
      </NotificationsProvider>
    </BrowserRouter>;
}
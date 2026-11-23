import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useParams, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { PublicLayout } from './components/PublicLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CatalogPage } from './pages/CatalogPage';
import { VehicleDetailPage } from './pages/VehicleDetailPage';
import { OffersPage } from './pages/OffersPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { QuotationPage } from './pages/QuotationPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import type { ListingType } from './types';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function SectionSingleSegmentRoute({ listingType }: { listingType: ListingType }) {
  const { idOrBrand } = useParams();
  if (idOrBrand && /^\d+$/.test(idOrBrand)) {
    return <VehicleDetailPage listingType={listingType} legacyId={Number(idOrBrand)} />;
  }
  return <CatalogPage listingType={listingType} initialBrandSlug={idOrBrand} />;
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
        {/* Role-Protected Admin Panel (direct URL only — not linked publicly) */}
        <Route path="/admin/*" element={<AdminPage />} />

        {/* Public Jadeer United Website */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <HomePage />
            </PublicLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PublicLayout>
              <AboutPage />
            </PublicLayout>
          }
        />
        <Route
          path="/showroom"
          element={
            <PublicLayout>
              <CatalogPage listingType="showroom" />
            </PublicLayout>
          }
        />
        <Route
          path="/showroom/:brand/:model"
          element={
            <PublicLayout>
              <VehicleDetailPage listingType="showroom" />
            </PublicLayout>
          }
        />
        <Route
          path="/showroom/:idOrBrand"
          element={
            <PublicLayout>
              <SectionSingleSegmentRoute listingType="showroom" />
            </PublicLayout>
          }
        />
        <Route
          path="/used-cars"
          element={
            <PublicLayout>
              <CatalogPage listingType="used" />
            </PublicLayout>
          }
        />
        <Route
          path="/used-cars/:brand/:model"
          element={
            <PublicLayout>
              <VehicleDetailPage listingType="used" />
            </PublicLayout>
          }
        />
        <Route
          path="/used-cars/:idOrBrand"
          element={
            <PublicLayout>
              <SectionSingleSegmentRoute listingType="used" />
            </PublicLayout>
          }
        />
        <Route
          path="/offers"
          element={
            <PublicLayout>
              <OffersPage />
            </PublicLayout>
          }
        />
        <Route
          path="/articles"
          element={
            <PublicLayout>
              <ArticlesPage />
            </PublicLayout>
          }
        />
        <Route
          path="/articles/:slug"
          element={
            <PublicLayout>
              <ArticleDetailPage />
            </PublicLayout>
          }
        />
        <Route
          path="/quotation"
          element={
            <PublicLayout>
              <QuotationPage />
            </PublicLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <PublicLayout>
              <ContactPage />
            </PublicLayout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

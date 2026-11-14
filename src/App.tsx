import { useCallback, useEffect, useState } from 'react';
import { AboutPage } from '@/src/components/AboutPage';
import { CatalogPage } from '@/src/components/CatalogPage';
import { ComparatorPage } from '@/src/components/ComparatorPage';
import { DocumentationPage } from '@/src/components/DocumentationPage';
import { Footer } from '@/src/components/Footer';
import { GalleryPage } from '@/src/components/GalleryPage';
import { HomePage } from '@/src/components/HomePage';
import { Navbar } from '@/src/components/Navbar';
import { QuizPage } from '@/src/components/QuizPage';
import { SearchModal } from '@/src/components/SearchModal';
import { SubspeciesDetailPage } from '@/src/components/SubspeciesDetailPage';
import { WorldMapPage } from '@/src/components/WorldMapPage';
import { PageRoute } from '@/src/types/tiger';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedSubspeciesId, setSelectedSubspeciesId] = useState<string>('bengale');
  const [comparatorInitialId, setComparatorInitialId] = useState<string | undefined>(undefined);
  const [mapFocusId, setMapFocusId] = useState<string | undefined>(undefined);
  const [searchOpen, setSearchOpen] = useState(false);

  const navigate = useCallback((page: PageRoute) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSelectSubspecies = useCallback((id: string) => {
    setSelectedSubspeciesId(id);
    setCurrentPage('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleCompareWith = useCallback((id: string) => {
    setComparatorInitialId(id);
    setCurrentPage('comparator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenOnMap = useCallback((id: string) => {
    setMapFocusId(id);
    setCurrentPage('map');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#09090B] text-[#FAFAF9]">
      <Navbar
        currentPage={currentPage}
        onNavigate={navigate}
        onOpenSearch={() => setSearchOpen(true)}
      />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigate}
            onSelectSubspecies={handleSelectSubspecies}
          />
        )}

        {currentPage === 'subspecies' && (
          <CatalogPage onSelectSubspecies={handleSelectSubspecies} />
        )}

        {currentPage === 'detail' && (
          <SubspeciesDetailPage
            subspeciesId={selectedSubspeciesId}
            onBack={() => navigate('subspecies')}
            onCompareWith={handleCompareWith}
            onOpenOnMap={handleOpenOnMap}
            onSelectSubspecies={handleSelectSubspecies}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage onSelectSubspecies={handleSelectSubspecies} />
        )}

        {currentPage === 'comparator' && (
          <ComparatorPage
            initialSubspeciesId={comparatorInitialId}
            onSelectSubspecies={handleSelectSubspecies}
          />
        )}

        {currentPage === 'map' && (
          <WorldMapPage
            initialFocusId={mapFocusId}
            onSelectSubspecies={handleSelectSubspecies}
          />
        )}

        {currentPage === 'documentation' && (
          <DocumentationPage onNavigate={navigate} />
        )}

        {currentPage === 'quiz' && <QuizPage onNavigate={navigate} />}

        {currentPage === 'about' && <AboutPage onNavigate={navigate} />}
      </main>

      <Footer onNavigate={navigate} />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectSubspecies={handleSelectSubspecies}
        onNavigate={navigate}
      />
    </div>
  );
}

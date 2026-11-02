import { Header } from './components/Header/Header';
import { LanguageProvider } from './contexts/LanguageContext';
import { Home } from './pages/Home';
import { Aurora } from './ui/Aurora';

export function App() {
  return (
    <LanguageProvider>
      <Aurora />
      <Header />
      <Home />
    </LanguageProvider>
  );
}

import { defineConfig } from 'vite';
import path from 'path';

// Vite Konfiguration für Pfadaliase
export default defineConfig({
  resolve: {
    alias: {
      // @/ verweist auf das src-Verzeichnis
      '@': path.resolve(__dirname, './src'),

      // @components/ verweist auf das Components-Verzeichnis
      '@components': path.resolve(__dirname, './Components/01_ComponentsJSX'),

      //@style/ verweist auf das style-Verzeichnis
      '@style': path.resolve(__dirname, './Components/02_ComponentsStyling'),

      // @pages/ verweist auf das Pages-Verzeichnis
      '@pages': path.resolve(__dirname, './Pages/01_PagesJSX'),

      //@pagestyle/ verweist auf das pagestyle-Verzeichnis
      '@pagestyle': path.resolve(__dirname, '.Pages/02_PageStyling'),

      // @assets/ verweist auf das Upload-Verzeichnis
      '@assets': path.resolve(__dirname, './Upload'),
    },
  },
});

/*
Anleitung zur Verwendung der Aliase:

1. Importe aus dem src-Verzeichnis:
   import App from '@/App.jsx' statt import App from './src/App.jsx'

2. Importe aus Components:
   import Header from '@components/Header.jsx' statt import Header from '../../Components/Header.jsx'

3. Importe aus Pages:
   import Home from '@pages/Home.jsx' statt import Home from '../Pages/01_PagesJSX/Home.jsx'

4. Importe aus Upload:
   import logo from '@assets/Logo.png' statt import logo from '../../Upload/Logo.png'

Wichtige Hinweise:
- Die Aliase funktionieren in allen Dateien des Projekts
- VSCode unterstützt die Aliase automatisch
- Bei Fehlern: Prüfen Sie die vite.config.js und die Pfadangaben
*/

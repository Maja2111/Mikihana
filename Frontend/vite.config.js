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

      '@pages': path.resolve(__dirname, './Pages/01_PagesJSX/'),

      // @bookpages/ verweist auf das Pages-Verzeichnis
      '@bookpages': path.resolve(__dirname, './Pages/01_PagesJSX/Book/'),

      //@pagestyle/ verweist auf das pagestyle-Verzeichnis
      '@pagestyle': path.resolve(__dirname, './Pages/02_PageStyling'),

      '@moviepages': path.resolve(
        __dirname,
        './Pages/01_PagesJSX/MoviesAndSeries/'
      ),

      // @assets/ verweist auf das Upload-Verzeichnis
      '@img': path.resolve(__dirname, './Upload/'),
    },
  },
});

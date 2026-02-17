// Importy obrazków z Twojej ścieżki: src/assets/header/
import priceSheet from './assets/header/pricesheet.svg';
import blankPaper from './assets/header/blankpaper.svg';

import './styles/header.css';

function App() {
  return (
    <div className="App">
      <header className="main-header">
        <div className="orange-container">
          POMARAŃCZOWY (GÓRA)
        </div>

        <div className="sides-wrapper">
          <div className="blue-container">
            {/* Kontener spinający oba obrazki */}
            <div className="images-wrapper">
              {/* Używamy zaimportowanych zmiennych w klamrach {} */}
              <img 
                src={priceSheet} 
                className="img-main" 
                alt="Price Sheet" 
              />
              <img 
                src={blankPaper} 
                className="img-overlay" 
                alt="Blank Paper" 
              />
            </div>
          </div>
          <div className="red-container">
            CZERWONY (PRAWA STRONA)
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
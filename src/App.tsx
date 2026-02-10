import './App.css'
import titleImg from './assets/Header/HoneyShroomTitle.svg'
import priceListImg from './assets/Header/PriceList.svg'
import paperPriceImg from './assets/Header/PaperPrice.svg'
import blankPaperImg from './assets/Header/BlankPaper.svg'
import twitterLogo from './assets/Header/Twitterlogo.svg'
import vgenLogo from './assets/Header/vgenlogo.svg'
import blueskyLogo from './assets/Header/blueskylogo.svg' // Nowy import

function App() {
  return (
    <div className="app-wrapper">
      <main>
        <header className="hero-container">
          {/* --- WARSTWY TŁA --- */}
          
          <img 
            src={blankPaperImg} 
            alt="Blank Paper Background" 
            className="blank-paper-svg" 
          />

          {/* Logo Twittera */}
          <img 
            src={twitterLogo} 
            alt="Twitter Logo" 
            className="twitter-logo-svg" 
          />

          {/* Logo VGen */}
          <img 
            src={vgenLogo} 
            alt="VGen Logo" 
            className="vgen-logo-svg" 
          />

          {/* NOWY ELEMENT: Logo Bluesky */}
          <img 
            src={blueskyLogo} 
            alt="Bluesky Logo" 
            className="bluesky-logo-svg" 
          />
          
          <img 
            src={paperPriceImg} 
            alt="Paper Background" 
            className="paper-price-svg" 
          />
          
          {/* --- WARSTWA TEKSTOWA --- */}
          <div className="text-content">
            <img 
              src={titleImg} 
              alt="HoneyShroom Title" 
              className="header-image title-svg" 
            />
            <img 
              src={priceListImg} 
              alt="Price List" 
              className="header-image pricelist-svg" 
            />
          </div>
        </header>
      </main>
    </div>
  )
}

export default App
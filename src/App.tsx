import './App.css'
import titleImg from './assets/Header/HoneyShroomTitle.svg'
import priceListImg from './assets/Header/PriceList.svg'
import paperPriceImg from './assets/Header/PaperPrice.svg'
import blankPaperImg from './assets/Header/BlankPaper.svg'

function App() {
  return (
    <div className="app-wrapper">
      <main>
        <header className="hero-container">
          {/* Warstwy tła (papiery) */}
          <img 
            src={paperPriceImg} 
            alt="Paper Background" 
            className="paper-price-svg" 
          />
          
          <img 
            src={blankPaperImg} 
            alt="Blank Paper Background" 
            className="blank-paper-svg" 
          />
          
          {/* Warstwa tekstowa - na wierzchu */}
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
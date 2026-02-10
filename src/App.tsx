import './App.css'
import titleImg from './assets/Header/HoneyShroomTitle.svg'
import priceListImg from './assets/Header/PriceList.svg'
import paperPriceImg from './assets/Header/PaperPrice.svg'

function App() {
  return (
    <div className="app-wrapper">
      <main>
        <header className="hero-container">
          {/* Warstwa tła (papier) - pod spodem dzięki z-index: 1 */}
          <img 
            src={paperPriceImg} 
            alt="Paper Background" 
            className="paper-price-svg" 
          />
          
          {/* Warstwa tekstowa - na wierzchu dzięki z-index: 2 */}
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
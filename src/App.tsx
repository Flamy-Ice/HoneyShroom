import './App.css'
import titleImg from './assets/Header/HoneyShroomTitle.svg'
import priceListImg from './assets/Header/PriceList.svg'
import paperPriceImg from './assets/Header/PaperPrice.svg'
import blankPaperImg from './assets/Header/BlankPaper.svg'
import twitterLogo from './assets/Header/Twitterlogo.svg'
import vgenLogo from './assets/Header/vgenlogo.svg'
import blueskyLogo from './assets/Header/blueskylogo.svg'
import furaffinityLogo from './assets/Header/furaffinitylogo.svg'
// NOWE IMPORTY:
import emailIcon from './assets/Header/EmailIcon.svg'
import emailText from './assets/Header/EmailText.svg'

function App() {
  return (
    <div className="app-wrapper">
      <main>
        <header className="hero-container">
          
          {/* GRUPA PAPIERÓW I LOGOTYPÓW */}
          <div className="papers-group">
            
            {/* Druga warstwa papieru (spód) */}
            <img 
              src={blankPaperImg} 
              alt="Blank Paper Background" 
              className="blank-paper-svg" 
            />

            {/* GRUPA LOGOTYPÓW */}
            <div className="logos-group">
              <img src={twitterLogo} alt="Twitter Logo" className="twitter-logo-svg" />
              <img src={vgenLogo} alt="VGen Logo" className="vgen-logo-svg" />
              <img src={blueskyLogo} alt="Bluesky Logo" className="bluesky-logo-svg" />
              <img src={furaffinityLogo} alt="FurAffinity Logo" className="furaffinity-logo-svg" />
            </div>

            {/* Pierwsza warstwa papieru (na górze logotypów) */}
            <img 
              src={paperPriceImg} 
              alt="Paper Background" 
              className="paper-price-svg" 
            />
          </div>

          {/* GRUPA TEKSTOWA (Tytuł i Cennik) */}
          <div className="text-group">
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

          {/* NOWA GRUPA: EMAIL */}
          <div className="email-group">
            <img 
              src={emailIcon} 
              alt="Email Icon" 
              className="email-icon-svg" 
            />
            <img 
              src={emailText} 
              alt="Email Address" 
              className="email-text-svg" 
            />
          </div>

        </header>
      </main>
    </div>
  )
}

export default App
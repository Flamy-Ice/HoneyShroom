import './App.css'

{/* TEXT GROUP: Main branding and price list headers */}
import titleImg from './assets/Header/HoneyShroomTitle.svg'
import priceListImg from './assets/Header/PriceList.svg'

{/* PAPERS AND LOGOS GROUP: Layered paper background with social media links */}
import paperPriceImg from './assets/Header/PaperPrice.svg'
import blankPaperImg from './assets/Header/BlankPaper.svg'
import twitterLogo from './assets/Header/Twitterlogo.svg'
import vgenLogo from './assets/Header/vgenlogo.svg'
import blueskyLogo from './assets/Header/blueskylogo.svg'
import furaffinityLogo from './assets/Header/furaffinitylogo.svg'

{/* EMAIL GROUP: Email information and icon */}
import emailIcon from './assets/Header/EmailIcon.svg'
import emailText from './assets/Header/EmailText.svg'

function App() {
  return (
    <div className="app-wrapper">
      <main>
        <header className="hero-container">
          
          {/* TEXT GROUP: Main branding and price list headers */}
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

          {/* PAPERS AND LOGOS GROUP: Layered paper background with social media links */}
          <div className="papers-group">
            
            {/* Paper with Prices */}
            <img 
              src={paperPriceImg} 
              alt="Paper Background" 
              className="paper-price-svg" 
            />

            {/* Bottom blank paper */}
            <img 
              src={blankPaperImg} 
              alt="Blank Paper Background" 
              className="blank-paper-svg" 
            />

            {/* LOGOS GROUP: Social media icons positioned between layers */}
            <div className="logos-group">
              <img src={twitterLogo} alt="Twitter Logo" className="twitter-logo-svg" />
              <img src={vgenLogo} alt="VGen Logo" className="vgen-logo-svg" />
              <img src={blueskyLogo} alt="Bluesky Logo" className="bluesky-logo-svg" />
              <img src={furaffinityLogo} alt="FurAffinity Logo" className="furaffinity-logo-svg" />
            </div>

          </div>

          {/* EMAIL GROUP: Email information and icon */}
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
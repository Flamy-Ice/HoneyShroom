import priceSheet from './assets/header/pricesheet.svg';
import blankPaper from './assets/header/blankpaper.svg';
import twitterIcon from './assets/header/twitter.svg';
import vgenIcon from './assets/header/vgen.svg';
import blueskyIcon from './assets/header/bluesky.svg';
import furaffinityIcon from './assets/header/furaffinity.svg';

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
            <div className="images-wrapper">
              {/* Arkusz cen - WARSTWA ŚRODKOWA */}
              <img src={priceSheet} className="img-main" alt="Price Sheet" />
              
              <div className="img-overlay">
                {/* Papier - WARSTWA DOLNA */}
                <img src={blankPaper} className="paper-base-img" alt="Blank Paper" />
                
                {/* IKONY JAKO LINKI - WARSTWA GÓRNA */}
                <a 
                  href="https://x.com/HoneyShroomArt" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-icon icon-twitter"
                >
                  <img src={twitterIcon} alt="Twitter" />
                </a>

                <a 
                  href="https://vgen.co/HoneyShroom" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-icon icon-vgen"
                >
                  <img src={vgenIcon} alt="VGen" />
                </a>

                <a 
                  href="https://bsky.app/profile/honey-shroom.bsky.social" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-icon icon-bluesky"
                >
                  <img src={blueskyIcon} alt="BlueSky" />
                </a>

                <a 
                  href="https://www.furaffinity.net/user/balladune" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-icon icon-furaffinity"
                >
                  <img src={furaffinityIcon} alt="FurAffinity" />
                </a>
              </div>
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
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
            NIEBIESKI (LEWA STRONA)
          </div>
          <div className="red-container">
            CZERWONY (PRAWA STRONA)
          </div>
        </div>
      </header>
      
      {/* Gdy tutaj dodasz <section> lub <footer>, header naturalnie się do nich dopasuje */}
    </div>
  );
}

export default App;
import React, { useContext, useState } from 'react';
import './App.css';
import { HarvestContext } from './context/HarvestContext';
import Loader from './components/Loader/Loader';
import CapitalGainsCard from './components/CapitalGainsCard/CapitalGainsCard';

function App() {
  const { capitalGains, afterHarvestGains, loading, error } = useContext(HarvestContext);
  const [disclaimerOpen, setDisclaimerOpen] = useState(true);

  if (loading || !capitalGains) {
    return <Loader />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  const preStcgNet = capitalGains.stcg.profits - capitalGains.stcg.losses;
  const preLtcgNet = capitalGains.ltcg.profits - capitalGains.ltcg.losses;
  const preRealisedGains = preStcgNet + preLtcgNet;

  const afterStcgNet = afterHarvestGains.stcg.profits - afterHarvestGains.stcg.losses;
  const afterLtcgNet = afterHarvestGains.ltcg.profits - afterHarvestGains.ltcg.losses;
  const afterRealisedGains = afterStcgNet + afterLtcgNet;

  let savingsAmount = null;
  if (preRealisedGains > afterRealisedGains) {
    savingsAmount = preRealisedGains - afterRealisedGains;
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-header-content">
          <div className="logo-container">
            <span className="logo-koin">Koin</span><span className="logo-x">X</span><span className="logo-tm">™</span>
          </div>
        </div>
      </header>
      
      <main className="app-main">
        <div className="page-header">
          <h1>Tax Harvesting</h1>
          <a href="#" className="how-it-works">How it works?</a>
        </div>

        <div className={`disclaimer-accordion ${disclaimerOpen ? 'open' : ''}`}>
          <div className="disclaimer-header" onClick={() => setDisclaimerOpen(!disclaimerOpen)}>
            <div className="disclaimer-title">
              <span className="info-icon">ⓘ</span>
              <strong>Important Notes & Disclaimers</strong>
            </div>
            <span className="chevron-icon">{disclaimerOpen ? 'ʌ' : 'v'}</span>
          </div>
          {disclaimerOpen && (
            <div className="disclaimer-content">
              <ul>
                <li>Tax-loss harvesting is currently not allowed under Indian tax regulations. Please consult your tax advisor before making any decisions.</li>
                <li>Tax harvesting does not apply to derivatives or futures. These are handled separately as business income under tax rules.</li>
                <li>Price and market value data is fetched from Coingecko, not from individual exchanges. As a result, values may slightly differ from the ones on your exchange.</li>
                <li>Some countries do not have a short-term / long-term bifurcation. For now, we are calculating everything as long-term.</li>
                <li>Only realized losses are considered for harvesting. Unrealized losses in held assets are not counted.</li>
              </ul>
            </div>
          )}
        </div>

        <div className="cards-container">
          <CapitalGainsCard 
            title="Pre Harvesting"
            stcg={capitalGains.stcg}
            ltcg={capitalGains.ltcg}
            variant="light"
          />
          <CapitalGainsCard 
            title="After Harvesting"
            stcg={afterHarvestGains.stcg}
            ltcg={afterHarvestGains.ltcg}
            variant="blue"
            savingsAmount={savingsAmount}
          />
        </div>
        
        <div className="holdings-section">
          <h2>Holdings</h2>
          <div className="holdings-placeholder">Holdings table will be implemented in Phase 3</div>
        </div>
      </main>
    </div>
  );
}

export default App;

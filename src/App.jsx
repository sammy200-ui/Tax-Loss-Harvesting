import React, { useContext } from 'react';
import './App.css';
import { HarvestContext } from './context/HarvestContext';
import Loader from './components/Loader/Loader';

function App() {
  const { loading, error } = useContext(HarvestContext);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Tax Loss Harvesting</h1>
      </header>
      <main className="app-main">
        <p>App Shell is ready!</p>
        <p>(Phase 1 complete - Mock APIs and Context are wired up)</p>
      </main>
    </div>
  );
}

export default App;

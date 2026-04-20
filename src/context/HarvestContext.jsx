import React, { createContext, useState, useEffect } from 'react';
import { getHoldings } from '../api/getHoldings';
import { getCapitalGains } from '../api/getCapitalGains';

export const HarvestContext = createContext();

export function HarvestProvider({ children }) {
  const [capitalGains, setCapitalGains] = useState(null);
  const [holdings, setHoldings] = useState([]);
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [gainsRes, holdingsRes] = await Promise.all([
          getCapitalGains(),
          getHoldings()
        ]);
        setCapitalGains(gainsRes.capitalGains);
        setHoldings(holdingsRes);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data.");
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const toggleSelected = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleAll = () => {
    if (selectedIds.size === holdings.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(holdings.map((h) => h.coin)));
    }
  };

  // Compute afterHarvestGains
  let afterHarvestGains = null;
  if (capitalGains) {
    afterHarvestGains = {
      stcg: { ...capitalGains.stcg },
      ltcg: { ...capitalGains.ltcg }
    };
    
    selectedIds.forEach((coinId) => {
      const holding = holdings.find((h) => h.coin === coinId);
      if (holding) {
        if (holding.stcg.gain > 0) afterHarvestGains.stcg.profits += holding.stcg.gain;
        else afterHarvestGains.stcg.losses += Math.abs(holding.stcg.gain);
        
        if (holding.ltcg.gain > 0) afterHarvestGains.ltcg.profits += holding.ltcg.gain;
        else afterHarvestGains.ltcg.losses += Math.abs(holding.ltcg.gain);
      }
    });
  }

  return (
    <HarvestContext.Provider value={{
      capitalGains,
      holdings,
      selectedIds,
      toggleSelected,
      toggleAll,
      afterHarvestGains,
      loading,
      error
    }}>
      {children}
    </HarvestContext.Provider>
  );
}

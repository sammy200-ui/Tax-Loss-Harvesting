import React, { useContext, useState } from 'react';
import { HarvestContext } from '../../context/HarvestContext';
import HoldingRow from '../HoldingRow/HoldingRow';
import './HoldingsTable.css';

const HoldingsTable = () => {
  const { holdings, selectedIds, toggleSelected, toggleAll } = useContext(HarvestContext);
  const [showAll, setShowAll] = useState(false);
  const [stcgSortDir, setStcgSortDir] = useState(null); // null, 'desc', 'asc'

  const handleSortStcg = () => {
    setStcgSortDir(prev => prev === 'desc' ? 'asc' : 'desc');
  };

  const getSortedHoldings = () => {
    if (!stcgSortDir) return holdings;
    return [...holdings].sort((a, b) => {
      const diff = stcgSortDir === 'asc' ? a.stcg.gain - b.stcg.gain : b.stcg.gain - a.stcg.gain;
      if (diff === 0) return a.coin.localeCompare(b.coin); // Deterministic tiebreaker!
      return diff;
    });
  };

  const sortedHoldings = getSortedHoldings();
  const displayedHoldings = showAll ? sortedHoldings : sortedHoldings.slice(0, 5);
  const allSelected = holdings.length > 0 && selectedIds.size === holdings.length;

  return (
    <div className="holdings-table-container">
      <table className="holdings-table">
        <thead>
          <tr>
            <th className="col-checkbox">
              <input 
                type="checkbox" 
                checked={allSelected} 
                onChange={toggleAll}
              />
            </th>
            <th className="col-asset">Asset</th>
            <th className="col-holdings">
              Holdings
              <div className="th-subtext">Current Market Rate</div>
            </th>
            <th className="col-value">Total Current Value</th>
            <th className="col-stcg" style={{ cursor: 'pointer', userSelect: 'none' }} onClick={handleSortStcg}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span style={{ fontSize: '10px', color: stcgSortDir ? 'var(--info-icon)' : 'var(--text-muted)' }}>
                  {stcgSortDir === 'desc' ? '▼' : '▲'}
                </span>
                Short-term
              </div>
            </th>
            <th className="col-ltcg">Long-Term</th>
            <th className="col-sell">Amount to Sell</th>
          </tr>
        </thead>
        <tbody>
          {displayedHoldings.map(holding => (
            <HoldingRow 
              key={holding.coin}
              holding={holding}
              isSelected={selectedIds.has(holding.coin)}
              onToggle={toggleSelected}
            />
          ))}
        </tbody>
      </table>
      {holdings.length > 5 && (
        <div className="holdings-footer">
          <button 
            className="view-all-btn" 
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'View less' : `View all`}
          </button>
        </div>
      )}
    </div>
  );
};

export default HoldingsTable;

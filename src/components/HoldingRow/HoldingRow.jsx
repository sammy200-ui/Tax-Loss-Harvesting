import React from 'react';
import { formatCurrency, formatCoinAmount } from '../../utils/formatCurrency';
import './HoldingRow.css';

const HoldingRow = ({ holding, isSelected, onToggle }) => {
  const totalCurrentValue = holding.totalHolding * holding.currentPrice;
  
  const renderGainLoss = (gain, balance) => {
    const isGain = gain >= 0;
    const gainText = isGain ? `+${formatCurrency(gain, true)}` : `-${formatCurrency(Math.abs(gain), true)}`;
    const spanClass = isGain ? 'text-green' : 'text-red';
    
    return (
      <div className="holdings-gain-cell">
        <span className={spanClass}>{gainText}</span>
        <span className="holding-subtext">{formatCoinAmount(balance)} {holding.coin}</span>
      </div>
    );
  };

  return (
    <tr className={`holding-row ${isSelected ? 'selected' : ''}`} onClick={() => onToggle(holding.coin)}>
      <td className="col-checkbox" onClick={(e) => e.stopPropagation()}>
        <input 
          type="checkbox" 
          checked={isSelected}
          onChange={() => onToggle(holding.coin)}
        />
      </td>
      <td className="col-asset">
        <div className="asset-info">
          <img src={holding.logo} alt={holding.coinName} className="asset-logo" />
          <div className="asset-text">
            <span className="asset-name">{holding.coinName}</span>
            <span className="holding-subtext">{holding.coin}</span>
          </div>
        </div>
      </td>
      <td className="col-holdings">
        <div className="holding-amount">{formatCoinAmount(holding.totalHolding)} {holding.coin}</div>
        <div className="holding-subtext">{formatCurrency(holding.currentPrice, true)}/{holding.coin}</div>
      </td>
      <td className="col-value">
        {formatCurrency(totalCurrentValue, true)}
      </td>
      <td className="col-stcg">
        {renderGainLoss(holding.stcg.gain, holding.stcg.balance)}
      </td>
      <td className="col-ltcg">
        {renderGainLoss(holding.ltcg.gain, holding.ltcg.balance)}
      </td>
      <td className="col-sell">
        {isSelected ? `${formatCoinAmount(holding.totalHolding)} ${holding.coin}` : '-'}
      </td>
    </tr>
  );
};

export default HoldingRow;

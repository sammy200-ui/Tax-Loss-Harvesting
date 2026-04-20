import React from 'react';
import { formatCurrency } from '../../utils/formatCurrency';
import './CapitalGainsCard.css';

const CapitalGainsCard = ({
  title,
  stcg,
  ltcg,
  variant = 'light',
  savingsAmount = null
}) => {
  const stcgProfits = stcg?.profits || 0;
  const stcgLosses = stcg?.losses || 0;
  const ltcgProfits = ltcg?.profits || 0;
  const ltcgLosses = ltcg?.losses || 0;

  const netStcg = stcgProfits - stcgLosses;
  const netLtcg = ltcgProfits - ltcgLosses;
  const total = netStcg + netLtcg;

  return (
    <div className={`capital-gains-card ${variant}`}>
      <h2 className="cg-title">{title}</h2>
      
      <div className="cg-grid">
        <div className="cg-col text-left">
          <div className="cg-label empty-label"></div>
          <div className="cg-label">Profits</div>
          <div className="cg-label">Losses</div>
          <div className="cg-label cg-net">Net Capital Gains</div>
        </div>
        
        <div className="cg-col text-right">
          <div className="cg-header">Short-term</div>
          <div className="cg-value">{formatCurrency(stcgProfits)}</div>
          <div className="cg-value">- {formatCurrency(Math.abs(stcgLosses))}</div>
          <div className="cg-value cg-net">{netStcg < 0 ? `- ${formatCurrency(Math.abs(netStcg))}` : formatCurrency(netStcg)}</div>
        </div>

        <div className="cg-col text-right">
          <div className="cg-header">Long-term</div>
          <div className="cg-value">{formatCurrency(ltcgProfits)}</div>
          <div className="cg-value">- {formatCurrency(Math.abs(ltcgLosses))}</div>
          <div className="cg-value cg-net">{netLtcg < 0 ? `- ${formatCurrency(Math.abs(netLtcg))}` : formatCurrency(netLtcg)}</div>
        </div>
      </div>

      <div className="cg-footer">
        <span className="cg-footer-label">
          {variant === 'blue' ? 'Effective Capital Gains:' : 'Realised Capital Gains:'}
        </span>
        <span className="cg-footer-value">
          {total < 0 ? `- ${formatCurrency(Math.abs(total))}` : formatCurrency(total)}
        </span>
      </div>

      {variant === 'blue' && savingsAmount !== null && savingsAmount > 0 && (
        <div className="cg-savings">
          🎉 You are going to save upto {formatCurrency(savingsAmount)}
        </div>
      )}
    </div>
  );
};

export default CapitalGainsCard;

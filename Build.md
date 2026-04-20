# KoinX – Tax Loss Harvesting Tool (React + CSS)

## Project Overview

Build a **Tax Loss Harvesting** web app in **React (JavaScript only, no TypeScript)** using **plain CSS** (no Tailwind, no CSS frameworks). The UI must closely match the Figma design linked below. The app should be fully responsive, functional, and deployable on Vercel/Netlify.

**Figma Design (MUST follow this):**
https://www.figma.com/design/3YqHlvx1X59Nb3iP97BGkG/KoinX-Frontend-Intern-Assigment?node-id=0-1&t=IjGblowKhpiKfT4r-1

Open the Figma link and study ALL screens before writing any code. Every color, spacing, font size, card layout, and table design must be taken from the Figma. Do not guess or freestyle the UI.

---

## Tech Stack

- **React** (Create React App or Vite — prefer Vite)
- **JavaScript** (no TypeScript)
- **Plain CSS** — one `.css` file per component (CSS Modules are fine too)
- **No Tailwind, no styled-components, no UI libraries like MUI or Shadcn**
- Mock APIs using plain `Promise`-based functions inside the React app (no external server needed)

---

## Folder Structure

```
koinx-tax-harvesting/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   ├── getHoldings.js        # returns the holdings mock data as a Promise
│   │   └── getCapitalGains.js    # returns the capital gains mock data as a Promise
│   ├── components/
│   │   ├── CapitalGainsCard/
│   │   │   ├── CapitalGainsCard.jsx
│   │   │   └── CapitalGainsCard.css
│   │   ├── HoldingsTable/
│   │   │   ├── HoldingsTable.jsx
│   │   │   └── HoldingsTable.css
│   │   ├── HoldingRow/
│   │   │   ├── HoldingRow.jsx
│   │   │   └── HoldingRow.css
│   │   └── Loader/
│   │       ├── Loader.jsx
│   │       └── Loader.css
│   ├── context/
│   │   └── HarvestContext.jsx    # React Context for shared state
│   ├── utils/
│   │   └── formatCurrency.js     # helper to format numbers to ₹ INR
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .gitignore
├── package.json
└── README.md
```

---

## Mock API Data

### `src/api/getCapitalGains.js`

```js
export function getCapitalGains() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        capitalGains: {
          stcg: {
            profits: 70200.88,
            losses: 1548.53,
          },
          ltcg: {
            profits: 5020,
            losses: 3050,
          },
        },
      });
    }, 600);
  });
}
```

### `src/api/getHoldings.js`

```js
export function getHoldings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          coin: "USDC",
          coinName: "USDC",
          logo: "https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
          currentPrice: 85.41,
          totalHolding: 0.0015339999999994802,
          averageBuyPrice: 1.5863185433764244,
          stcg: { balance: 0.0015339999999994802, gain: 0.12858552735441697 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: "WETH",
          coinName: "Polygon PoS Bridged WETH (Polygon POS)",
          logo: "https://coin-images.coingecko.com/coins/images/2518/large/weth.png?1696503332",
          currentPrice: 211756,
          totalHolding: 0.00023999998390319965,
          averageBuyPrice: 3599.856066001555,
          stcg: { balance: 0.00023999998390319965, gain: 49.957471193511736 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: "SOL",
          coinName: "SOL (Wormhole)",
          logo: "https://coin-images.coingecko.com/coins/images/22876/large/SOL_wh_small.png?1696522175",
          currentPrice: 14758.01,
          totalHolding: 3.469446951953614e-17,
          averageBuyPrice: 221.42847548590152,
          stcg: { balance: 3.469446951953614e-17, gain: 5.043389846205066e-13 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: "WPOL",
          coinName: "Wrapped POL",
          logo: "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
          currentPrice: 22.08,
          totalHolding: 2.3172764293128694,
          averageBuyPrice: 0.5227311370876341,
          stcg: { balance: 1.3172764293128694, gain: 49.954151016387065 },
          ltcg: { balance: 1, gain: 20 },
        },
        {
          coin: "MATIC",
          coinName: "Polygon",
          logo: "https://coin-images.coingecko.com/coins/images/4713/large/polygon.png?1698233745",
          currentPrice: 22.22,
          totalHolding: 2.75145540184285,
          averageBuyPrice: 0.6880274617804887,
          stcg: { balance: 2.75145540184285, gain: 59.244262152615974 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: "GONE",
          coinName: "Gone",
          logo: "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
          currentPrice: 0.0001462,
          totalHolding: 696324.3075326696,
          averageBuyPrice: 0.00001637624055112482,
          stcg: { balance: 696324.3075326696, gain: 90.39943939952589 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: "USDT",
          coinName: "Arbitrum Bridged USDT (Arbitrum)",
          logo: "https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661",
          currentPrice: 85.42,
          totalHolding: 0.0001580000000558357,
          averageBuyPrice: 1.4988059369185402,
          stcg: { balance: 0.0001580000000558357, gain: 0.01325954866665267 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: "USDC",
          coinName: "Bridged USDC (Polygon PoS Bridge)",
          logo: "https://coin-images.coingecko.com/coins/images/33000/large/usdc.png?1700119918",
          currentPrice: 85.41,
          totalHolding: 0.005806999999992795,
          averageBuyPrice: 1.5405071277176852,
          stcg: { balance: 0.005806999999992795, gain: 0.48703014510873915 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: "SLN",
          coinName: "Smart Layer Network",
          logo: "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
          currentPrice: 6.66,
          totalHolding: 0.01,
          averageBuyPrice: 4.999247835735738,
          stcg: { balance: 0.01, gain: 0.016607521642642627 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: "OX",
          coinName: "OX Coin",
          logo: "https://coin-images.coingecko.com/coins/images/35365/large/logo.png?1708395976",
          currentPrice: 0.13319,
          totalHolding: 5,
          averageBuyPrice: 0.018408606024462898,
          stcg: { balance: 5, gain: 0.5739069698776855 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: "ETH",
          coinName: "Ethereum",
          logo: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
          currentPrice: 216182,
          totalHolding: 0.0004211938732637162,
          averageBuyPrice: 3909.792264648455,
          stcg: { balance: 0.0004211938732637162, gain: 89.40775336229291 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: "WELT",
          coinName: "Fabwelt",
          logo: "https://coin-images.coingecko.com/coins/images/20505/large/welt.PNG?1696519911",
          currentPrice: 0.060863,
          totalHolding: 1.063542780948968,
          averageBuyPrice: 0.01520546569793174,
          stcg: { balance: 1.063542780948968, gain: 0.048558741002894576 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: "FTM",
          coinName: "Fantom",
          logo: "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
          currentPrice: 52.99,
          totalHolding: 0.04265758808550148,
          averageBuyPrice: 1.7040326829291739,
          stcg: { balance: 0.04265758808550148, gain: 2.1877356683780986 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: "EZ",
          coinName: "EasyFi V2",
          logo: "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
          currentPrice: 0.885074,
          totalHolding: 0.0005424384664524931,
          averageBuyPrice: 6.539367177529248,
          stcg: { balance: 0.0005424384664524931, gain: -0.0030671061200917595 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: "$CULO",
          coinName: "CULO",
          logo: "https://coin-images.coingecko.com/coins/images/34662/large/CULO-logo-inverted_200.png?1705641744",
          currentPrice: 0.00001623,
          totalHolding: 150000,
          averageBuyPrice: 0,
          stcg: { balance: 150000, gain: 2.4345 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: "SPHERE",
          coinName: "Sphere Finance",
          logo: "https://coin-images.coingecko.com/coins/images/24424/large/2iR2JsL.png?1696523606",
          currentPrice: 0.00729945,
          totalHolding: 2.2737367544323206e-13,
          averageBuyPrice: 0.011065778585432803,
          stcg: { balance: 2.2737367544323206e-13, gain: -8.563639733967655e-16 },
          ltcg: { balance: 0, gain: 0 },
        },
      ]);
    }, 800);
  });
}
```

---

## App State — Use React Context

Create `src/context/HarvestContext.jsx` with a `HarvestProvider` that manages:

```js
{
  capitalGains: null,       // from Capital Gains API
  holdings: [],             // from Holdings API
  selectedIds: new Set(),   // tracks which rows are checked (use index or coin as key)
  loading: true,
  error: null,
}
```

Expose these via context:
- `capitalGains` (raw from API)
- `holdings`
- `selectedIds`
- `toggleSelected(id)` — adds/removes from selectedIds
- `toggleAll()` — selects all or deselects all
- `afterHarvestGains` — computed value (explained below)
- `loading`, `error`



---

## Core Business Logic

### Pre-Harvesting (left card — dark background)

Directly use the data from Capital Gains API:

```
stcg.net = stcg.profits - stcg.losses
ltcg.net = ltcg.profits - ltcg.losses
realisedCapitalGains = stcg.net + ltcg.net
```

### After Harvesting (right card — blue background)

Start with the same values from Capital Gains API, then for each **selected holding**:

- Look at `holding.stcg.gain`:
  - If `gain > 0` → add it to `stcg.profits`
  - If `gain < 0` → add its absolute value to `stcg.losses`
- Look at `holding.ltcg.gain`:
  - If `gain > 0` → add it to `ltcg.profits`
  - If `gain < 0` → add its absolute value to `ltcg.losses`

Recalculate net and realised gains with the updated values.

### Savings Message

Show **"You're going to save ₹X"** message on the After Harvesting card **only when**:

```
preHarvestRealisedGains > afterHarvestRealisedGains
```

The savings amount = `preHarvestRealisedGains - afterHarvestRealisedGains`

---

## Component Breakdown

### `App.jsx`

- Fetches both APIs on mount using `useEffect`
- Renders the page layout
- Shows a `<Loader />` while fetching
- Shows an error message if something fails
- Layout: heading at top, then two cards side by side (`CapitalGainsCard` × 2), then `HoldingsTable` below

### `CapitalGainsCard.jsx`

Props:
```js
{
  title: "Pre Harvesting" | "After Harvesting",
  stcg: { profits, losses },
  ltcg: { profits, losses },
  variant: "dark" | "blue",  // controls background color
  savingsAmount: number | null  // only passed for "After Harvesting"
}
```

Displays:
- Card title
- Short-term Capital Gains section:
  - Profits
  - Losses
  - Net Capital Gains (profits - losses)
- Long-term Capital Gains section (same)
- Realised Capital Gains (sum of both nets) — highlighted
- If `savingsAmount` is not null and > 0, show: `"You're going to save ₹{savingsAmount}"`

### `HoldingsTable.jsx`

- Renders a table with all holdings
- Has a "Select All" checkbox in the header
- Shows first 5 rows by default, with a "View All" / "View Less" toggle button
- Columns: Asset | Holdings & Avg Buy Price | Current Price | Short-Term Gain | Long-Term Gain | Amount to Sell
- On row selection → calls `toggleSelected(id)` from context

### `HoldingRow.jsx`

Props: `{ holding, isSelected, onToggle }`

Displays one row:
- Checkbox (left)
- Asset: coin logo (img), coin symbol (bold), full coin name below
- Holdings: `totalHolding` on top, `averageBuyPrice` below in smaller text
- Current Price: formatted
- Short-Term Gain: `stcg.gain` colored green if positive, red if negative. Show `stcg.balance` below in smaller text
- Long-Term Gain: same but for `ltcg`
- Amount to Sell: shows `totalHolding` when row is selected, else empty/dash

### `Loader.jsx`

Simple spinning loader shown while APIs are loading.

---

## Utility: `src/utils/formatCurrency.js`

```js
export function formatCurrency(value) {
  if (value === null || value === undefined) return "—";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatNumber(value, decimals = 6) {
  if (value === null || value === undefined) return "—";
  return Number(value).toFixed(decimals);
}
```

---
## Phases

## phase 1 - App Shell and Mock APIs

## phase 2 - Capital Gains Cards

## phase 3 - Holdings Table

## phase 4 - Selection and After-Harvesting Logic

## phase 5 - Final Polish and Responsive Design

## Styling Rules

- **Follow Figma exactly** for colors, font sizes, border radius, spacing
- Use CSS variables in `App.css` or a `variables.css` for the color palette
- The left card has a **dark navy/black background** and light text
- The right card has a **blue gradient background** with white text
- The table has a white background with subtle row hover effects
- Green color for positive gains, red for negative
- Checkbox rows should have a light blue/highlighted background when selected
- The savings message should stand out visually (different background or bold text)
- Make it mobile responsive — stack cards vertically on small screens, make table horizontally scrollable

---

## "View All" Holdings Feature

- Initially show only the **first 4 holdings** in the table
- Show a button at the bottom of the table: **"View All X Assets"** where X = total count
- Clicking it expands to show all rows
- Button text changes to **"View Less"** when expanded
- Keep this state local inside `HoldingsTable.jsx` using `useState`

---

## README.md (also generate this file)

Include:
- Project title and description
- Screenshot placeholder
- Setup instructions:
  ```bash
  npm install
  npm run dev
  ```
- Assumptions made
- Tech used
- Deployed link (leave as placeholder: `[Add deployed link here]`)

---

## What NOT to do

- Do NOT use TypeScript
- Do NOT use Tailwind CSS
- Do NOT use any UI component library (MUI, Shadcn, etc.)
- Do NOT create a separate backend server for mocks — keep it inside the React app
- Do NOT use `any` implicit any or type annotations
- Do NOT over-engineer — keep components simple and readable
- Do NOT write overly clever one-liners — keep code readable for a junior dev

---

## Code Style Notes

- Use `useState` and `useEffect` hooks normally, nothing fancy
- Prefer clear variable names over short cryptic ones
- Keep components focused — one job per component
- Use `console.log` in a couple places during dev (it's fine to leave some in, looks human)
- Comments are okay but don't over-comment every line
- Don't abstract too early — if something is used once, don't make a helper for it
- It's fine to have a slightly longer component rather than splitting into 10 tiny ones
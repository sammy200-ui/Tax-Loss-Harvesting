export function getCapitalGains() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        capitalGains: {
          stcg: {
            profits: 1540,
            losses: 743,
          },
          ltcg: {
            profits: 1200,
            losses: 650,
          },
        },
      });
    }, 600);
  });
}

function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const presentyear = getCurrentYear();
  const budget = {
    [`income-${presentyear}`]: income,
    [`gdp-${presentyear}`]: gdp,
    [`capita-${presentyear}`]: capita,
  };

  return budget;
}

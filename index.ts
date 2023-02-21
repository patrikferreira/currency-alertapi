const currencyValue: HTMLDivElement = document.getElementById(
  "currency-value"
) as HTMLDivElement;
const selectCoin: HTMLSelectElement = document.getElementById(
  "select-coin"
) as HTMLSelectElement;

showValue();
setInterval(showValue, 1000 * 5);

selectCoin.addEventListener("change", () => {
  showValue();
});

async function showValue() {
  const response = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL,DOGE-BRL"
  );
  const data = await response.json();
  const dolar = data["USDBRL"]["ask"];
  const euro = data["EURBRL"]["ask"];
  const bitcoin = data["BTCBRL"]["ask"];
  const ethereum = data["ETHBRL"]["ask"];
  const dogecoin = data["DOGEBRL"]["ask"];

  if (selectCoin.value == "dolar") {
    currencyValue.innerText = `R$ ${parseFloat(dolar)}`;
  }

  if (selectCoin.value == "euro") {
    currencyValue.innerText = `R$ ${parseFloat(euro)}`;
  }

  if (selectCoin.value == "bitcoin") {
    currencyValue.innerText = `R$ ${parseFloat(bitcoin)}`;
  }

  if (selectCoin.value == "ethereum") {
    currencyValue.innerText = `R$ ${parseFloat(ethereum)}`;
  }

  if (selectCoin.value == "dogecoin") {
    currencyValue.innerText = `R$ ${parseFloat(dogecoin)}`;
  }
}

const showAlerts: HTMLDivElement = document.getElementById(
  "showAlerts"
) as HTMLDivElement;
const divAlert: HTMLDivElement = document.getElementById(
  "div-alert"
) as HTMLDivElement;
const createAlert: HTMLButtonElement = document.getElementById(
  "create-alert"
) as HTMLButtonElement;

showAlerts.addEventListener("click", () => {
  divAlert.classList.toggle("active");
});

createAlert.addEventListener("click", () => {
  divAlert.classList.add("active");
});

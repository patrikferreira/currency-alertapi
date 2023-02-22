const currencyValue: HTMLDivElement = document.getElementById(
  "currency-value"
) as HTMLDivElement;
const selectCoin: HTMLSelectElement = document.getElementById(
  "select-coin"
) as HTMLSelectElement;

showValue();
setInterval(showValue, 1000 * 10);

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

  aboveArray.forEach((alt) => {
    if (ethereum > alt) {
      // alert('OKKK')
    }
  });
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

const alertSelect: HTMLSelectElement = document.getElementById(
  "alert-select"
) as HTMLSelectElement;
const alertValue: HTMLInputElement = document.getElementById(
  "alert-value"
) as HTMLInputElement;
const alertList: HTMLUListElement = document.getElementById(
  "alert-list"
) as HTMLUListElement;

createAlert.addEventListener("click", () => {
  if (alertValue.value == "") {
    alertValue.style.border = "1px solid rgb(240, 185, 11)";
  } else if (alertSelect.value == "above") {
    aboveArray.push(alertValue.value);
    const alertAbove: HTMLLIElement = document.createElement(
      "li"
    ) as HTMLLIElement;
    alertAbove.innerText = `R$ ${parseFloat(alertValue.value)} +`;
    alertAbove.style.color = "rgb(14, 203, 129)";
    alertList.appendChild(alertAbove);
    divAlert.classList.add("active");
    rereshHtmlState();
    console.log(aboveArray);
  } else if (alertSelect.value == "below") {
    belowArray.push(alertValue.value);
    const alertBelow: HTMLLIElement = document.createElement(
      "li"
    ) as HTMLLIElement;
    alertBelow.innerText = `R$ ${parseFloat(alertValue.value)} -`;
    alertBelow.style.color = "rgb(246, 70, 93)";
    alertList.appendChild(alertBelow);
    divAlert.classList.add("active");
    rereshHtmlState();
    console.log(belowArray);
  }
});

type Alert = {
  name: string;
  value: number;
};

const aboveArray: Array<Alert> = [];
const belowArray: Array<Alert> = [];

function rereshHtmlState() {
  alertValue.value = "";
}

console.log(aboveArray);
console.log(belowArray);

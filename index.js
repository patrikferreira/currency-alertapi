"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const currencyValue = document.getElementById("currency-value");
const selectCoin = document.getElementById("select-coin");
showValue();
setInterval(showValue, 1000 * 10);
selectCoin.addEventListener("change", () => {
    showValue();
});
function showValue() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL,DOGE-BRL");
        const data = yield response.json();
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
    });
}
const showAlerts = document.getElementById("showAlerts");
const divAlert = document.getElementById("div-alert");
const createAlert = document.getElementById("create-alert");
showAlerts.addEventListener("click", () => {
    divAlert.classList.toggle("active");
});
const alertSelect = document.getElementById("alert-select");
const alertValue = document.getElementById("alert-value");
const alertList = document.getElementById("alert-list");
createAlert.addEventListener("click", () => {
    if (alertValue.value == "") {
        alertValue.style.border = "1px solid rgb(240, 185, 11)";
    }
    else if (alertSelect.value == "above") {
        aboveArray.push(alertValue.value);
        const alertAbove = document.createElement("li");
        alertAbove.innerText = `R$ ${parseFloat(alertValue.value)} +`;
        alertAbove.style.color = "rgb(14, 203, 129)";
        alertList.appendChild(alertAbove);
        divAlert.classList.add("active");
        rereshHtmlState();
        console.log(aboveArray);
    }
    else if (alertSelect.value == "below") {
        belowArray.push(alertValue.value);
        const alertBelow = document.createElement("li");
        alertBelow.innerText = `R$ ${parseFloat(alertValue.value)} -`;
        alertBelow.style.color = "rgb(246, 70, 93)";
        alertList.appendChild(alertBelow);
        divAlert.classList.add("active");
        rereshHtmlState();
        console.log(belowArray);
    }
});
const aboveArray = [];
const belowArray = [];
function rereshHtmlState() {
    alertValue.value = "";
}
console.log(aboveArray);
console.log(belowArray);

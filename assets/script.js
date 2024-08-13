let dolar = 5.6;

let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl");
});

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd");
});

usdInput.value = "1000,00";
convert("usd-to-brl");

// Funções

function formatCurrency(value) {
    // Ajustar o valor
    let fixedValue = fixValue(value);
    // Utilizar função de formatar
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2,
    };
    let formatter = new Intl.NumberFormat("pt-BR", options);
    // Retornar o valor formatado
    return formatter.format(fixedValue);
}

function fixValue(value) {
    let fixedValue = value.replace(",", ".");
    let floatValue = parseFloat(fixedValue);
    if (isNaN(floatValue)) {
        floatValue = 0;
    }
    return floatValue;
}

function convert(type) {
    if (type === "usd-to-brl") {
        // Ajustar o valor
        let usdValue = fixValue(usdInput.value);
        // Converter o valor
        let brlValue = usdValue * dolar;
        // Mostrar no campo de real
        brlInput.value = formatCurrency(brlValue.toString());
    } 
    if (type === "brl-to-usd") {
        // Ajustar o valor
        let brlValue = fixValue(brlInput.value);
        // Converter o valor
        let usdValue = brlValue / dolar;
        // Mostrar no campo de dólar
        usdInput.value = formatCurrency(usdValue.toString());
    }
}

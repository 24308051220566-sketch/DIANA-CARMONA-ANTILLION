function calcular(){

    let minutos = parseFloat(document.getElementById("minutos").value);
    let costo = parseFloat(document.getElementById("costo").value);

    let total = minutos * costo;

    document.getElementById("resultado").innerHTML =
    "Costo total: $" + total;

}
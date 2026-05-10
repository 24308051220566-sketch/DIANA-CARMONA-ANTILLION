function calcular(){

    let km = parseFloat(document.getElementById("km").value);
    let costo = parseFloat(document.getElementById("costo").value);

    let total = km * costo;

    document.getElementById("resultado").innerHTML =
    "Costo: $" + total;

}
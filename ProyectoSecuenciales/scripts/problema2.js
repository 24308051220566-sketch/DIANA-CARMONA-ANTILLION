function convertir(){

    let pesos = parseFloat(document.getElementById("pesos").value);
    let tipo = parseFloat(document.getElementById("tipo").value);

    let dolares = pesos / tipo;

    document.getElementById("resultado").innerHTML =
    "Dólares: $" + dolares;

}
function calcular(){

    let metros = parseFloat(document.getElementById("metros").value);
    let precio = parseFloat(document.getElementById("precio").value);

    let total = metros * precio;

    document.getElementById("resultado").innerHTML =
    "Presupuesto: $" + total;

}
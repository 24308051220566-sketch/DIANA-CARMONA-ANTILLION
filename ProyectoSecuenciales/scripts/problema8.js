function calcular(){

    let distancia = parseFloat(document.getElementById("distancia").value);
    let velocidad = parseFloat(document.getElementById("velocidad").value);

    let tiempo = distancia / velocidad;

    document.getElementById("resultado").innerHTML =
    "Tiempo: " + tiempo + " horas";

}
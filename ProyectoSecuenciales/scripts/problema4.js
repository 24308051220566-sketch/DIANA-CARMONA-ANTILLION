function cobrar(){

    let horas = Math.ceil(parseFloat(document.getElementById("horas").value));
    let costo = parseFloat(document.getElementById("costo").value);

    let total = horas * costo;

    document.getElementById("resultado").innerHTML =
    "Total: $" + total;

}
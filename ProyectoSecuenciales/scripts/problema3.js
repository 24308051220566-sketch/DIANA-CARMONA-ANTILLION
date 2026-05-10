function calcularEdad(){

    let nacimiento = parseInt(document.getElementById("nacimiento").value);

    let edad = 2026 - nacimiento;

    document.getElementById("resultado").innerHTML =
    "Edad: " + edad + " años";

}
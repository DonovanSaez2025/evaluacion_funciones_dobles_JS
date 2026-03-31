/*1. Módulo de Tesorería: Pago de Permisos (Cálculos y Retorno)
El vecino ingresa el monto de su permiso de circulación para saber cuánto pagará tras el descuento municipal.
Lógica: Si el monto es mayor a $70.000, el descuento es del 15%. Si es menor, es del 5%.
Regla: La Función Principal debe mostrar el total a pagar con un signo de peso ($).*/

// Función auxiliar del ejercicio 1
function calculoDescuento(monto) {
    let descuentoMonto = 0;
    if (monto >= 70000) {
        descuentoMonto = monto * 0.15; // Obtiene el 15% del monto
    } else if (monto < 70000) {
        descuentoMonto = monto * 0.05; // Obtiene el 5% del monto
    };
    return monto - descuentoMonto; // Retorna el valor del monto con el descuento aplicado
}
;
// Función principal del ejercicio 1
function pagoPermiso() {
    let input = document.getElementById("input1");
    const contenedor = document.getElementById("resultado-contendor1");
    const resultadoEspacio = document.getElementById("resultado1");
    let monto = parseFloat(input.value);

    if (isNaN(monto) || monto < 1) { // Verifica que el monto sea un número y no sea menor a 1
        alert("Ingrese valores válidos.");
        input.value = "";
    } else {
        let resultado = calculoDescuento(monto); /* Llama a la función auxiliar para calcular el descuento */
        contenedor.classList.remove("d-none");
        resultadoEspacio.textContent = `El total a pagar es de ${resultado}$`;
        input.value = "";
    };
};

/*2. Módulo de Salud: Fila de Vacunación (Arreglos y Prioridad)
Gestión de nombres en la fila de espera del consultorio local.
Lógica: * Botón Normal: Agrega el nombre al final de la lista (push).
Botón Urgencia: Agrega el nombre al inicio de la lista (unshift).
Regla: El resultado debe mostrarse como una lista ordenada en el HTML. <ol>*/

// Se declara la variable listaPacientes fuera de las funciones para que el valor se quede guardado
let listaPacientes = [];

// Función auxiliar
function aniadirPaciente(boton, nombre) {
    if (boton.textContent === "Paciente normal") { /* Verifica que el paciente sea uno normal */
        listaPacientes.push(nombre);
    } else if (boton.textContent === "Paciente urgente") { /* Verifica que el paciente sea uno de urgencias */
        listaPacientes.unshift(nombre);
    } else {
        alert("Error inesperado.");
    };
    return listaPacientes; // Retorna la lista de pacientes
};

// Función principal
function filaVacunacion(boton) {
    let input = document.getElementById("input2");
    const contenedor = document.getElementById("resultado-contendor2");
    const resultadoEspacio = document.getElementById("resultado2");
    const listadoPacientes = document.getElementById("listado-pacientes");
    let nombre = input.value.trim();

    if (nombre == "") { // Verifica que el nombre no esté vacío
        alert("El nombre no puede estar vacío.");
        input.value = "";
    } else {
        let resultado = aniadirPaciente(boton, nombre);
        contenedor.classList.remove("d-none");
        resultadoEspacio.textContent = `Lista de pacientes:`;
        for (let i = 0; i <= listaPacientes.length; i++) {
            listadoPacientes.innerHTML += `<li>${listaPacientes[i]}</li>`
        }
        input.value = "";
    };
};

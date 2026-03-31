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
    let nombre = input.value.trim();

    if (nombre == "") { // Verifica que el nombre no esté vacío
        alert("El nombre no puede estar vacío.");
        input.value = "";
    } else {
        let resultado = aniadirPaciente(boton, nombre); // Envía los valores de boton y nombre como paramétros para la función auxiliar
        contenedor.classList.remove("d-none");
        resultadoEspacio.innerHTML = ""; // Vacía el listado del HTML para que no se dupliquen los nombres
        for (let i = 0; i < resultado.length; i++) { // Bucle para recorrer toda la lista de pacientes
            resultadoEspacio.innerHTML += `<li>${resultado[i]}</li>` // Añade una etiqueta li con el nombre del paciente según el index
        };
        input.value = "";
    };
};

/*3. Módulo de Subsidios: Buscador de Beneficiarios (Ciclos e If)
Verificar si un RUT o nombre está en el listado de entrega de beneficios.
Lógica: Tener un arreglo con al menos 6 nombres. Usar un ciclo for para buscar si el dato ingresado existe en la lista.
Regla: La función debe devolver "Beneficiario Verificado" o "No registrado".*/

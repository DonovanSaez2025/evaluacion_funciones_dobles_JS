# Evaluación JS con funciones dobles
**Autores**: Donovan Sáez y Krishna Lopez

**Contactos**: 
- donovansaez@liceovvh.cl
- krishnalopez@liceovvh.cl

## Descripción
A continuación se mostrará una explicación para lo que hace cada función del documento JS.

### Función principal: pagoPermiso():
- Declara la variable *input* cuyo valor será obtenido del documento HTML según su ID.
- Declara la constante *contenedor* cuyo valor será obtenido del documento HTML según su ID.
- Declara la constante *resultadoEspacio* cuyo valor será obtenido del documento HTML según su ID.
- Declara la variable *monto* y se le asigna el valor del input transformado a decimal.
- Comprueba si es que la variable *monto* no es un número o si es menor a 0.2
- - Si eso se cumple, envía una alerta diciendo que ingresemos valores válidos.
- - Si no se cumple, declara la variable *resultado* y llamará a la función auxiliar **calculoDescuento()** y se le enviará la variable *monto* como el parámetro. Se le asignará el return de la función auxiliar.
- - Removerá la clase "d-none" de la constante *contenedor* para que el resultado deje de ser invisible.
- - Cambia el contenido textual del *resultadoEspacio* para mostrar cuál es el monto total a pagar (el monto total será el valor de *resultado*).
- Vacía el valor del *input*.

### Función auxiliar: calculoDescuento(monto):
- El valor del parámetro *monto* es enviado desde la función principal.
- Declara la variable *descuentoMonto* para guardar el 15% o el 5% del *monto* ingresado.
- Comprueba si es que el *monto* es mayor o igual a 70000.
- - Si se cumple, se obtendrá el 15% del *monto* multiplicando el monto * 0.15, y el resultado se guardará en la variable *descuentoMonto*.
- - SI no se cumple, solo se obtendrá el 5% del *monto* multiplicando el monto * 0.05, y el resultado se guardará en la variable *descuentoMonto*.
- Luego retorna el resultado del *monto* menos el *descuentoMonto* para la función principal.

### Función principal: filaVacunacion(boton):
- Fuera de la función, se declara la variable *listaPacientes* cuyo valor es una lista vacía "[]".
- El parámetro *boton* se obtiene del botón que llamó a la función con onclick.
- Declara la variable *input* cuyo valor será obtenido del documento HTML según su ID.
- Declara la constante *contenedor* cuyo valor será obtenido del documento HTML según su ID.
- Declara la constante *resultadoEspacio* cuyo valor será obtenido del documento HTML según su ID.
- Declara la variable *nombre* y se le asigna el valor del *input* con espacios exteriores (antes y después del texto) borrados.
- Declara la variable *tipoBoton* y se le asigna el contenido textual del *boton*.
- Comprueba si es que el *nombre* está vacío.
- - Si se cumple, enviará una advertencia de que el nombre no puede estar vacío.
- - Si no se cumple, declara la variable *resultado* y llamará a la función auxiliar **aniadirPaciente()** y se le enviará la variable *tipoBoton* y *nombre* como los parámetros. Se le asignará el return de la función auxiliar.
- - Removerá la clase "d-none" de la constante *contenedor* para que el resultado deje de ser invisible.
- - Se vacía el HTML interno de *resultadoEspacio* para que los nombres de los pacientes no se dupliquen.
- - Crea un bucle for donde se declara la variable *i* cuyo valor será 0, verificará en cada iteración que *i* sea menor a la longitud de *listaPacientes*, y sumará 1 al *i*.
- - En cada iteración se le concatenará al HTML interno de *resultadoEspacio*, una etiqueta li con cada valor en *listaPacientes* dentro.
- Vacía el valor del *input*.

### Función auxiliar: aniadirPaciente(tipoBoton, nombre):

### Función principal: buscarBeneficiario():
- Declara la variable *input* cuyo valor será obtenido del documento HTML según su ID.
- Declara la constante *contenedor* cuyo valor será obtenido del documento HTML según su ID.
- Declara la constante *resultadoEspacio* cuyo valor será obtenido del documento HTML según su ID.

### Función auxiliar: verificarBeneficio(user):

# Evaluación JS con funciones dobles
**Autores**: Donovan Sáez y Krishna Lopez

**Curso**: 4°C

**Contactos**: 
- donovansaez@liceovvh.cl
- krishnalopez@liceovvh.cl

## Descripción
A continuación se mostrará una explicación para lo que hace cada función del documento JS.

### Función principal 1: pagoPermiso():
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

### Función auxiliar 1: calculoDescuento(monto):
- El valor del parámetro *monto* es enviado desde la función principal.
- Declara la variable *descuentoMonto* para guardar el 15% o el 5% del *monto* ingresado.
- Comprueba si es que el *monto* es mayor o igual a 70000.
- - Si se cumple, se obtendrá el 15% del *monto* multiplicando el monto * 0.15, y el resultado se guardará en la variable *descuentoMonto*.
- - SI no se cumple, solo se obtendrá el 5% del *monto* multiplicando el monto * 0.05, y el resultado se guardará en la variable *descuentoMonto*.
- Luego retorna el resultado del *monto* menos el *descuentoMonto* para la función principal.

### Función principal 2: filaVacunacion(boton):
- Fuera de la función para que el valor no se reinicie en cada ejecución de la función, se declara la variable *listaPacientes* cuyo valor es una lista vacía "[]".
- El parámetro *boton* se obtiene del botón que llamó a la función con onclick.
- Declara la variable *input* cuyo valor será obtenido del documento HTML según su ID.
- Declara la constante *contenedor* cuyo valor será obtenido del documento HTML según su ID.
- Declara la constante *resultadoEspacio* cuyo valor será obtenido del documento HTML según su ID.
- Declara la variable *nombre* y se le asigna el valor del *input* con espacios exteriores (antes y después del texto) borrados usando .trim()
- Declara la variable *tipoBoton* y se le asigna el contenido textual del *boton*.
- Comprueba si es que el *nombre* está vacío.
- - Si se cumple, enviará una advertencia de que el nombre no puede estar vacío.
- - Si no se cumple, declara la variable *resultado* y llamará a la función auxiliar **aniadirPaciente()** y se le enviará la variable *tipoBoton* y *nombre* como los parámetros. Se le asignará el return de la función auxiliar.
- - Removerá la clase "d-none" de la constante *contenedor* para que el resultado deje de ser invisible.
- - Se vacía el HTML interno de *resultadoEspacio* para que los nombres de los pacientes no se dupliquen.
- - Crea un bucle for donde se declara la variable *i* cuyo valor será 0, verificará en cada iteración que *i* sea menor a la longitud de *listaPacientes*, y sumará 1 al *i*.
- - En cada iteración se le concatenará al HTML interno de *resultadoEspacio*, una etiqueta li con cada valor en *listaPacientes* dentro.
- Vacía el valor del *input*.

### Función auxiliar 2: aniadirPaciente(tipoBoton, nombre):
- El valor de los parámetros *tipoBoton* y *nombre* serán enviados desde la función principal.
- Se verifica si el valor de *tipoBoton* es estrictamente igual a "Paciente normal".
- - Si se cumple, añadirá el valor de *nombre* al final de la lista de *listaPacientes* con un .push()
- - Si no, se verifica que el valor de *tipoBoton* sea estrictamente igual a "Paciente urgente".
- - - Si se cumple, añadirá el valor de *nombre* al inicio de la lista de *listaPacientes* con un .unshift()
- - Si nada se cumple, enviará una alerta diciendo que ocurrió un error inesperado.
- Retorna la variable *listaPacientes* para la función principal.

### Función principal 3: buscarBeneficiario():
- Fuera de la función, se declara la variable *entregaBeneficios* cuyo valor es una lista con seis sublistas que contienen el rut y el nombre de cada persona registrada.
- Declara la variable *input* cuyo valor será obtenido del documento HTML según su ID.
- Declara la constante *contenedor* cuyo valor será obtenido del documento HTML según su ID.
- Declara la constante *resultadoEspacio* cuyo valor será obtenido del documento HTML según su ID.
- Declara la variable *persona* y se le asignará el valor de input con los espacios exteriores borrados usando .trim()
- Comprueba si es que el *persona* está vacío.
- - Si se cumple, enviará una advertencia de que el nombre no puede estar vacío.
- - Si no se cumple, declara la variable *resultado* y llamará a la función auxiliar **verificarBeneficio(persona)** y enviará la variable *persona* para su parámetro.
- - Cambia el contenido textual de *resultadoEspacio* por el valor de *resultado*.
- - Removerá la clase "d-none" de la constante *contenedor* para que el resultado deje de ser invisible.
- Vacía el valor del *input*.

### Función auxiliar 3: verificarBeneficio(persona):
- El valor del parámetro *persona* es enviado desde la función principal.
- Crea un bucle for donde se declara la variable *i* cuyo valor será 0, verificará en cada iteración que *i* sea menor a la longitud de *entregaBeneficios*, y sumará 1 al *i*.
- - Crea un bucle for donde se declara la variable *j* cuyo valor será 0, verificará en cada iteración que *j* sea menor a la longitud del item indicado por *i* de *entregaBeneficios* (*i* < entregaBeneficios[i].length), y sumará 1 al *j*.
- - - Verifica si es que el valor de *persona* sea igual con uno de los valores guardado en *entregaBeneficios* (*persona* === entregaBeneficios[i][j])
- - - Si se cumple, retornará un string diciendo que el nombre de la *persona* es un beneficiario vereficado.
- Si el valor de la *persona* nunca es igual, retornará un string diciendo que la *persona* no está registrada.
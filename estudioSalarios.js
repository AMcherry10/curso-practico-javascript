//Código de gastos
console.group("Gastos e ingresos")

//total gastos mensuales
function gastosMensuales(renta, servicios, comida, transporte, entretenimiento, otros) {
    const gastos = (parseInt(renta) + parseInt(servicios) + parseInt(comida) + parseInt(transporte) + parseInt(entretenimiento) + parseInt(otros));
    return gastos;
}

//ingresos mensuales totales
function ingresosMensuales(tarjeta, efectivo) {
    const ingresos = (parseInt(tarjeta) + parseInt(efectivo));
    return ingresos;
}
console.groupEnd();


//Total del ahorro
console.group("Estado de cuenta");
function estadoCuenta(gastosMensuales, ingresosMensuales) {
    const total = ingresosMensuales - gastosMensuales;
    return total;
  }
console.groupEnd();


// aqui interactuamos con el HTML
// total gastos mensuales

function onClickButtonEstado() {
    const inputGastos1 = document.getElementById("InputGastos1");
    const Value1 = inputGastos1.value;
    
    const inputGastos2 = document.getElementById("InputGastos2");
    const Value2 = inputGastos2.value;
  
    const inputGastos3 = document.getElementById("InputGastos3");
    const Value3 = inputGastos3.value;
    
    const inputGastos4 = document.getElementById("InputGastos4");
    const Value4 = inputGastos4.value;

    const inputGastos5 = document.getElementById("InputGastos5");
    const Value5 = inputGastos5.value;
    
    const inputGastos6 = document.getElementById("InputGastos6");
    const Value6 = inputGastos6.value;

    const gastos = gastosMensuales(Value1, Value2, Value3, Value4, Value5, Value6);

    const inputIngresos1 = document.getElementById("InputIngresos1");
    const ValueI1 = inputIngresos1.value;
    
    const inputIngresos2 = document.getElementById("InputIngresos2");
    const ValueI2 = inputIngresos2.value;

    const ingresos = ingresosMensuales(ValueI1, ValueI2);
  
    const resultI = document.getElementById("ResultI");
    resultI.innerText = "El total de INGRESOS mensuales es: $" + ingresos;
  
    const resultG = document.getElementById("ResultG");
    resultG.innerText = "El total de GASTOS mensuales es: $" + gastos;

    const total = ingresos - gastos;
    const resultE = document.getElementById("ResultE");
    resultE.innerText = "El ESTADO ACTUAL DE TU CUENTA ES: $" + total;
  }
  
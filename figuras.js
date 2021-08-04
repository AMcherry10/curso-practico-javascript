//Código del Cuadrado
console.group("Cuadrados")
//Lado del cuadrado

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cms");

//Perimetro del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cms");

//Area del cuadrado
function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado mide: " + areaCuadrado + " cms^2");
console.groupEnd();


//Código del Triangulo
console.group("Triángulos");
//Lados de triangulo
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo =5;
// console.log("Los lados del triángulo miden: "
// + ladoTriangulo1
// + " cms, "
// + ladoTriangulo2
// + " cms, "
// + baseTriangulo
// + "cms."
// );
// console.log("La altura del triangulo mide: " + alturaTriangulo + " cms");
//Perimetro del triangulo
function perimetroTriangulo(lado1, lado2, base) {
    return (parseInt(lado1) + parseInt(lado2) + parseInt(base));
  }
// console.log("El perimetro del triángulo mide: " + perimetroTriangulo + " cms");
//Area del triangulo
function areaTriangulo(base, altura) {
    return (base*altura)/2;
}
// console.log("El área del triángulo mide: " + areaTriangulo + " cms^2");

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }

}
console.groupEnd();


//Código del Circulos
console.group("Circulos");
//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es " + radioCirculo + " cms.");
//Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diametro del circulo es " + diametroCirculo + " cms.");
// PI
const PI = Math.PI;
console.log("PI es " + PI + ".");
// circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perimetro del circulo es " + perimetroCirculo + " cms.");
//Area
function areaCirculo(radio) {
    return PI * (radio**2);
}
// console.log("El area del circulo es " + areaCirculo + " cms.");
console.groupEnd();

// aqui interactuamos con el HTML
// Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es:" + perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El area del cuadrado es:" + area);
}

// Triangulo

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;

    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;

    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo() {
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;

    const input4 = document.getElementById("InputTriangulo4");
    const value4 = input4.value;

    const area = areaTriangulo(value3, value4);
    alert("El area del triangulo es: " + area);
}

// circulo

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirulo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert("El perimetro del circulo es: " + perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirulo");
    const value = input.value;

    const area = areaCirculo(value);
    alert("El area del circulo es: " + area);
}
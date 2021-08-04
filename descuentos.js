// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }
  
  function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });

// codigo de descuento
    
window.onload = init;
function init(){
    document.querySelectorAll(".more")[0].addEventListener("click",submenu);
    document.querySelector(".submenu > ul").style.display = "none"; 
}

function submenu(){
    var estado = document.querySelector(".submenu > ul").style.display;
    if (estado == "none"){
        document.querySelector(".submenu > ul").style.display = "block";
    }else{
        document.querySelector(".submenu > ul").style.display = "none";            
    };
    
}


// ------------------------------------------------------------------------

const coupons = [
    {
        name: "Batman-15",
        discount: 15,
    },
    {
        name: "Batman-30",
        discount: 30,
    },
    {
        name: "Batman-25",
        discount: 25,
    },
];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;
  
    return precioConDescuento;
  
  }

  function onClickButtonPriceDiscount() {
           const inputPrice = document.getElementById("InputPrice");
           const priceValue = inputPrice.value;
          
           const inputCoupon = document.getElementById("inputCoupon");
           const couponValue = inputCoupon.value;

           const isCouponValueValid = function (coupon) {
            return coupon.name === couponValue;
        };
        
        const userCoupon = coupons.find(isCouponValueValid);
        
        if (!userCoupon) {
            alert("El cupón " + couponValue + " no es válido");
        } else {
            const descuento = userCoupon.discount;
            const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        
            const resultP = document.getElementById("ResultP");
            resultP.innerText = "El total a pagar es: $" + precioConDescuento;
        }

    }   



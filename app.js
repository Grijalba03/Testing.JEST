// this is my function that sums two numbers
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (cantidad) => { 
    cantidad = cantidad/oneEuroIs.USD 
    cantidad = cantidad*oneEuroIs.JPY 
    cantidad = cantidad.toFixed(2)
    cantidad = parseFloat(cantidad)
    return cantidad
}

const fromEuroToDollar = (cantidad) => { 
    cantidad = cantidad*oneEuroIs.USD // Euro to dollar
    return cantidad
} 

const fromYenToPound = (cantidad) => { 
    cantidad = cantidad/oneEuroIs.JPY // Yen to Euro
    cantidad = cantidad*oneEuroIs.GBP // Euro to GBP
    cantidad = cantidad.toFixed(2)
    cantidad = parseFloat(cantidad)
    return cantidad
}

module.exports = { fromEuroToDollar, fromYenToPound, fromDollarToYen};
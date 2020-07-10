// <----------- Challenge -------------------->

const cuadrado = (x,y) =>{
    let area = x*y
    console.log('El area del cuadrado con lado: ' + x + ' es: ' + area)
}

const rect = (x,y) =>{
    let area = x*y
    console.log('El area del rectángulo con lados: ' + x + ' y ' + y + ' es: ' + area)
}

const tri = (x,y) =>{
    let area = x*y/2
    console.log('El area del triángulo con base: ' + x + ' y altura: ' + y + ' es: ' + area)
}


cuadrado(2,2)
rect(3,4)
tri(8,5)


var u1 = prompt('Usuario 1: Piedra Papel o Tijera?').toLowerCase()
var u2 = prompt('Usuario 2: Piedra Papel o Tijera?').toLowerCase()
var m1 = 'Gana usuario 1'
var m2 = 'gana usuario 2'

if(u1 === u2){
    console.log('Tenemos un empate')
}else if(u1 === 'piedra' && u2 === 'papel' || u1 === 'tijera' && 'piedra' || u1 === 'papel' && u2 === 'tijera'){
    console.log(m2)
}else if(u1 === 'piedra' && u2 === 'tijera' || u1 === 'papel' && u2 === 'piedra' || u1 === 'tijera' && 'papel'){
    console.log(m1)
}else{
    console.error('Error al ingresar datos')
}



//------------------------Challenge---------------------------------\\

var user = prompt('Piedra papel o tijera?').toLowerCase()
//var pc = ''
var m1 = 'Gana el Usuario'
var m2 = 'gana la PC'

var options = ['piedra','papel','tijera']
var select = Math.floor((Math.random()*3))
var pc = options[select]


if(user === pc){
    console.log('Tenemos un empate')
}else if(user === 'piedra' && pc === 'papel' || user === 'tijera' && 'piedra' || user === 'papel' && pc === 'tijera'){
    console.log(m2)
}else if(user === 'piedra' && pc === 'tijera' || user === 'papel' && pc === 'piedra' || user === 'tijera' && 'papel'){
    console.log(m1)
}else{
    console.error('Error al ingresar datos')
}
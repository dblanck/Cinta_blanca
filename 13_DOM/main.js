
let titulo = document.getElementById('titulo')
let subtitulo = document.getElementById('subtitulo')
let boton = document.getElementById('btn')
let saludo = document.getElementById('saludo')
let pregunta = document.getElementById('pregunta')
let respuesta = document.getElementById('respuesta')

console.log(subtitulo)
console.log(titulo)


const cambiar = () =>{
    titulo.innerHTML = 'Ya cambie'
    subtitulo.innerHTML = 'Ya cambie x2'
    respuesta.innerHTML = 'Hola ' + pregunta.value
}

const saludar = () =>{
    alert('Hola Mundo!')
}

boton.addEventListener('click', cambiar)
saludo.addEventListener('click', saludar)
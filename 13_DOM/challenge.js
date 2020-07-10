let nombre = document.getElementById('nombre')
let tel = document.getElementById('tel')
let dir = document.getElementById('dir')
let pina = document.getElementById('pina')

let boton = document.getElementById('btn')
let status = document.getElementById('status')

let nombreRes = document.getElementById('nombreRes')
let telRes = document.getElementById('telRes')
let dirRes = document.getElementById('dirRes')
let pinaRes = document.getElementById('pinaRes')
let imagen = document.getElementById('imagen')

let show = document.getElementById('myCard')


const ordenar = () =>{
    nombreRes.innerHTML = 'Nombre: ' + nombre.value
    telRes.innerHTML = 'Teléfono: ' + tel.value
    dirRes.innerHTML = 'Dirección: ' + dir.value
    pinaRes.innerHTML = 'Piña? ' + pina.value
    status.innerHTML = 'Revisa tu pedido'
    show.style.display = 'block'

    let pinaFlag = pina.value.toLowerCase()

    if(pinaFlag === 'con'){
        imagen.src = 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/11/como-hacer-pizza-hawaiana.jpg' 
    } else if (pinaFlag === 'sin'){
        imagen.src = 'https://cnnespanol.cnn.com/wp-content/uploads/2019/05/190528082519-pizza-hut-pan-relaunch-exlarge-169.jpg?quality=100&strip=info'
    }
}

boton.addEventListener('click', ordenar)
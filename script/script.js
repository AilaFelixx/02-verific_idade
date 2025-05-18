//VERIFICADOR DE IDADE

function clicar() {
    var msg = document.getElementById('msg')
    var anoDig = document.getElementById('ano').value
    var x = new Date()
    var anoAtual = x.getFullYear()
    var img = document.getElementById('foto')
    
    img.style.display = 'none'

    if (Number(anoDig) > anoAtual || Number(anoDig) < 1925) {
        msg.innerHTML = ('Digite um ano válido')
        return
    }

    var idade = (anoAtual - Number(anoDig))

    var sexo = document.getElementsByName('sexo')
    var gen = ''

    if (sexo[0].checked) {
        gen = 'um homem'
        if (idade < 14) {
            img.src = 'style/menino1.png'
        } else if (idade < 21) {
            img.src = 'style/adolescento1.png'
        } else if (idade < 57) {
            img.src = 'style/homem1.png'
        } else {
            img.src = 'style/idoso1.png'
        }
    } else if (sexo[1].checked) {
        gen = 'uma mulher'
    if (idade < 14) {
            img.src = 'style/menina1.png'
        } else if (idade < 21) {
            img.src = 'style/adolescenta1.png'
        } else if (idade < 57) {
            img.src = 'style/mulher1.png'
        } else {
            img.src = 'style/idosa1.png'
        }   
    }

    msg.innerHTML = (`Detectamos ${gen} de ${idade} anos.`)

    img.style.display = 'block'
}
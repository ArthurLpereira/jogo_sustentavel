const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let heroi = new Image();
heroi.src = "./assets/super-heroi.png"
heroi.onload = ()=>{
    ctx.drawImage(heroi, 0, 0, 25,25);
}

const movi = 10;
let x = 0;
let y = 0;

document.addEventListener('keydown', event=>{

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    switch(event.key){
        case 'd':
            x += movi;
            break;
        case 'a':
            x -= movi;
            break;
        case 'w':
            y -= movi;
            break;
        case 's':
            y += movi;
            break;
    }
        ctx.drawImage(heroi, x, y, 25,25);

})
// let timer = 60;
// const temporizador = document.getElementById('tempo')
// setInterval(() =>{
//     timer --
//     temporizador.innerText = `Tempo: ${timer}`

//     if(timer <= 0){
//         clearInterval(timer)
//         alert('Fim de jogo!')
//     }
// }, 1000)

let arvore = new Image();
arvore.src = "./assets/arvore.png"

let agua = new Image();
agua.src = "./assets/garrafa-de-agua.png"

function gerarObjeto(){
    const objetos = [arvore, agua];
    const random = Math.floor(Math.random() * 2);
    if(random === 1){
            arvore.onload = ()=>{
            ctx.drawImage(arvore, 10, 10, 25,25);}
        }else{
            agua.onload = ()=>{
                ctx.drawImage(agua, 20, 20, 25,25);
            }
        }
}

setInterval(gerarObjeto(arvore, agua), 2000);

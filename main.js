//Data e Hora
function atualizarRelogio() {
    const agora = new Date();
    // Formata a data e hora para Português
    let dataFormatada = agora.toLocaleString('pt-PT', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });

    dataFormatada = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);
    
    const elementoRelogio = document.getElementById('data-hora');
    if (elementoRelogio) {
        elementoRelogio.textContent = dataFormatada;
    }
}

// Atualiza a cada 1 segundo (1000 ms)
setInterval(atualizarRelogio, 1000);
atualizarRelogio(); // Executa imediatamente ao carregar

// Slider de Imagens
const imagens = [
    'assets/pastelFeijao.jpg',
    'assets/folhado.jpg',
    'assets/ovosMoles.jpg',
    'assets/rissois.jpg'
];

let indiceAtual = 0;
const tempoTroca = 3000; // 3 segundos 

function mudarImagem() {
    const imgElement = document.getElementById('slider-img');
    
    if (imgElement) {
        indiceAtual++;
        // Se chegar ao fim do array, volta ao início (loop)
        if (indiceAtual >= imagens.length) {
            indiceAtual = 0;
        }
        
        imgElement.src = imagens[indiceAtual];
    }
}

// Inicia o temporizador do slider apenas se o elemento existir (para não dar erro noutras páginas)
if (document.getElementById('slider-img')) {
    setInterval(mudarImagem, tempoTroca);
}
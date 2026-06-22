// Troca de abas
function abrirAba(id) {
  const abas = document.querySelectorAll('.aba');
  const botoes = document.querySelectorAll('.tab');

  abas.forEach(a => a.classList.remove('ativa'));
  botoes.forEach(b => b.classList.remove('active'));

  document.getElementById(id).classList.add('ativa');
  event.target.classList.add('active');
}

// ===== CONTADOR DE TEMPO =====

// Define uma data final (ex: 30 dias a partir de agora)
const destino = new Date();
destino.setDate(destino.getDate() + 30);

function atualizarTimer() {
  const agora = new Date().getTime();
  const distancia = destino - agora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    `${dias}d ${horas}h ${minutos}m ${segundos}s`;

  if (distancia < 0) {
    document.getElementById("timer").innerHTML = "Tempo finalizado!";
  }
}

setInterval(atualizarTimer, 1000);
atualizarTimer();

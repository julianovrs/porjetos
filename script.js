// Datas finais diferentes para cada objetivo
const metas = [
  new Date().getTime() + 1000 * 60 * 60 * 24 * 20, // 20 dias
  new Date().getTime() + 1000 * 60 * 60 * 24 * 35, // 35 dias
  new Date().getTime() + 1000 * 60 * 60 * 24 * 50, // 50 dias
  new Date().getTime() + 1000 * 60 * 60 * 24 * 80  // 80 dias
];

function atualizar() {
  const agora = new Date().getTime();

  metas.forEach((meta, i) => {
    const distancia = meta - agora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById(`timer${i+1}`).innerHTML =
      `⏳ ${dias}d ${horas}h restantes`;

    // progresso fake (visual bonito)
    let total = 80; // base
    let restante = Math.max(0, dias);
    let progresso = 100 - (restante / total) * 100;

    document.getElementById(`p${i+1}`).style.width = progresso + "%";
  });
}

setInterval(atualizar, 1000);
atualizar();

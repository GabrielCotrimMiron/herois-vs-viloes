function jogar()
{
  let personagem = [];
  let viloes = [];
  let forcaPersonagem = 0;
  let forcaViloes = 0;
  
  let viloesPossiveis = ["Madara", "Obito", "Orochimaru", "Pain", "Kakuzo", "Hidan", "Itachi", "Kaguya Otsutsuki", "Deidara", "Zetsu Negro"];
  

  for (let i = 0; i < 3; i++) 
    {
    let escolha;
    do 
    {
      escolha = prompt("Digite o nome do seu personagem " + (i + 1) + " (Universo Naruto):");
      
      if (viloesPossiveis.includes(escolha)) 
      {
        alert("Esse personagem é um vilão! Escolha outro.");
      } 
      else if (personagem.includes(escolha)) 
      {
        alert("Esse personagem já foi escolhido! Escolha outro.");
      }
    } 
    while (viloesPossiveis.includes(escolha) || personagem.includes(escolha));
  
    personagem.push(escolha);
    forcaPersonagem += Math.floor(Math.random() * 10) + 1;
  }
  
  alert("Time dos heróis: " + personagem.join(", "));
  

  while (viloes.length < 3) 
    {
    let vilao = viloesPossiveis[Math.floor(Math.random() * viloesPossiveis.length)];
    if (!viloes.includes(vilao)) {
      viloes.push(vilao);
      forcaViloes += Math.floor(Math.random() * 10) + 1;
    }
  }
  
  alert("Time dos vilões: " + viloes.join(", "));
  
  
  if (forcaPersonagem > forcaViloes) {
    alert("Seu time venceu! Força: " + forcaPersonagem + " A força dos Vilões foi de : " +forcaViloes);
  } else if (forcaPersonagem < forcaViloes) {
    alert("Os Vilões venceram! Força: " + forcaViloes + " A força dos Heróis foi de : " +forcaPersonagem);
  } else {
    alert("Empate! Ambos os times lutaram bravamente.");
  }
}  
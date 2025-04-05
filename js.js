function jogar() {
  let personagem = [];
  let viloes = [];
  let forcaPersonagem = 0;
  let forcaViloes = 0;

  let viloesPossiveis = ["Madara", "Obito", "Orochimaru", "Pain", "Kakuzo", "Hidan", "Itachi", "Kaguya Otsutsuki", "Deidara", "Zetsu Negro"];
  let viloesMinusc = viloesPossiveis.map(nome => nome.toLowerCase()); 

  function contemApenasLetras(texto) 
  {
    for (let i = 0; i < texto.length; i++) 
    {
      let caractere = texto[i].toLowerCase();
      if (caractere < 'a' || caractere > 'z') 
      {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < 3; i++) 
    {
    let escolha;
    do 
    {
      escolha = prompt("Digite o nome do seu personagem " + (i + 1) + " (Universo Naruto):");

      let escolhaMinuscula = escolha.toLowerCase();

      if (!contemApenasLetras(escolha)) 
      {
        alert("Digite apenas letras, sem números, símbolos ou espaços.");
      } 
      else if (viloesMinusc.includes(escolhaMinuscula)) 
      {
        alert("Esse personagem é um vilão! Escolha outro.");
      } 
      else if (personagem.map(n => n.toLowerCase()).includes(escolhaMinuscula)) 
      {
        alert("Esse personagem já foi escolhido! Escolha outro.");
      }

    } while ( !contemApenasLetras(escolha) || viloesMinusc.includes(escolha.toLowerCase()) || personagem.map(n => n.toLowerCase()).includes(escolha.toLowerCase()));

    personagem.push(escolha);
    forcaPersonagem += Math.floor(Math.random() * 10) + 1;
  }

  alert("Time dos heróis: " + personagem.join(", "));

  while (viloes.length < 3) 
   {
    let vilao = viloesPossiveis[Math.floor(Math.random() * viloesPossiveis.length)];
    if (!viloes.includes(vilao)) 
    {
      viloes.push(vilao);
      forcaViloes += Math.floor(Math.random() * 10) + 1;
    }
  }

  alert("Time dos vilões: " + viloes.join(", "));

  if (forcaPersonagem > forcaViloes) 
  {
    alert("Seu time venceu! Força: " + forcaPersonagem + ". A força dos vilões foi: " + forcaViloes);
  } 
  else if (forcaPersonagem < forcaViloes) 
  {
    alert("Os vilões venceram! Força: " + forcaViloes + ". A força dos heróis foi: " + forcaPersonagem);
  } 
  else 
  {
    alert("Empate! Ambos os times lutaram bravamente.");
  }
}

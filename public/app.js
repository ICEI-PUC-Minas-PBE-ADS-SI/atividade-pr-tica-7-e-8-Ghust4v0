const filmes = [
  { 
    "id": 1, 
    "nome": "Ainda Estou Aqui", 
    "descrição": "Ainda Estou Aqui é uma adaptação cinematográfica do livro autobiográfico de Marcelo Rubens Paiva, que narra a emocionante trajetória de sua mãe, Eunice Paiva, durante a ditadura militar no Brasil. Ambientada em 1970, a história retrata como a vida de uma mulher casada com um importante político muda drasticamente após o desaparecimento dele, capturado pelo regime militar. Forçada a abandonar a rotina de dona de casa, Eunice (Fernanda Torres/Fernanda Montenegro) se transforma em uma ativista dos direitos humanos, lutando pela verdade sobre o paradeiro do marido e enfrentando as consequências brutais da repressão. O filme explora não apenas o drama pessoal de Eunice, mas também o impacto do regime militar na vida de milhares de famílias brasileiras, destacando o papel das mulheres na resistência. Com uma narrativa profunda e sensível, Ainda Estou Aqui traz à tona questões de perda, coragem e resiliência, enquanto revisita um dos períodos mais sombrios da história do Brasil. A obra é um tributo à força de Eunice Paiva, que, contra todas as adversidades, se torna uma figura central na luta pelos direitos humanos no país.", 
    "imagem": "Imagens/aindaesotuaqui.jpg", 
    "video": "video/aindaestouaqui.mp4" 
  },
  { 
    "id": 2, 
    "nome": "Conclave", 
    "descrição": "O papa está morto e agora é preciso reunir o colégio de cardeais para decidir quem será o novo pontífice. Em Conclave, acompanhamos um dos eventos mais secretos do mundo: a escolha de um novo Papa. Lawrence (Ralph Fiennes), conhecido também como Cardeal Lomeli, é o encarregado de executar essa reunião confidencial após a morte inesperada do amado e atual pontífice. Sem entender o motivo, Lawrence foi escolhido a dedo para conduzir o conclave como última ordem do papa antes de morrer. Assim sendo, os líderes mais poderosos da Igreja Católica vindos do mundo todo se reúnem nos corredores do Vaticano para participar da seleção e deliberar suas opções, cada um com seus próprios interesses. Lawrence, então, acaba no centro de uma conspiração e descobre um segredo do falecido pontífice que pode abalar os próprios alicerces da Igreja. Em jogo, estão não só a fé, mas os próprios alicerces da instituição diante de uma série de reviravoltas que tomam conta dessa assembleia sigilosa.", 
    "imagem": "Imagens/conclave.png",
    "video": "video/CONCLAVE.mp4" 
  },
  { 
    "id": 3, 
    "nome": "Central do Brasil", 
    "descrição": "Em Central do Brasil, Dora (Fernanda Montenegro) trabalha escrevendo cartas para analfabetos na estação Central do Brasil, no centro da cidade do Rio de Janeiro. Ainda que a escrivã não envie todas as cartas que escreve - as cartas que considera inúteis ou fantasiosas demais -, ela decide ajudar um menino (Vinícius de Oliveira), após sua mãe ser atropelada, a tentar encontrar o pai que nunca conheceu, no interior do Nordeste.", 
    "imagem": "Imagens/centraldobrasil.jpg",
    "video": "video/centraldobrasil.mp4"
  },
  { 
    "id": 4, 
    "nome": "Vingadores Ultimato", 
    "descrição": "Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.", 
    "imagem": "Imagens/ultimato.jpg",
    "video": "video/ultimato.mp4"
  },
  { 
    "id": 5, 
    "nome": "Nós", 
    "descrição": "Adelaide (Lupita Nyong'o) e Gabe (Winston Duke) decidem levar a família para passar um fim de semana na praia e descansar em uma casa de veraneio. Eles viajam com os filhos e começam a aproveitar o ensolarado local, mas a chegada de um grupo misterioso muda tudo e a família se torna refém de seus próprios duplos.", 
    "imagem": "Imagens/nós.png",
    "video": "video/Nós.mp4"
  },
  { 
    "id": 6, 
    "nome": "A culpa é das estrelas", 
    "descrição": "Diagnosticada com câncer, a adolescente Hazel Grace Lancaster (Shailene Woodley) se mantém viva graças a uma droga experimental. Após passar anos lutando com a doença, ela é forçada pelos pais a participar de um grupo de apoio cristão. Lá, conhece Augustus Waters (Ansel Elgort), um rapaz que também sofre com câncer. Os dois possuem visões muito diferentes de suas doenças: Hazel preocupa-se apenas com a dor que poderá causar aos outros, já Augustus sonha em deixar a sua própria marca no mundo. Apesar das diferenças, eles se apaixonam. Juntos, atravessam os principais conflitos da adolescência e do primeiro amor, enquanto lutam para se manter otimistas e fortes um para o outro.", 
    "imagem": "Imagens/culpadasestrelas.jpg",
    "video": "video/culpadasestrelas.mp4"
  },
  { 
    "id": 7, 
    "nome": "Homem Aranha no Aranhaverso", 
    "descrição": "Em Homem-Aranha no Aranhaverso, Miles Morales é um jovem negro do Brooklyn que se tornou o Homem-Aranha inspirado no legado de Peter Parker, já falecido. Entretanto, ao visitar o túmulo de seu ídolo em uma noite chuvosa, ele é surpreendido com a presença do próprio Peter, vestindo o traje do herói aracnídeo sob um sobretudo. A surpresa fica ainda maior quando Miles descobre que ele veio de uma dimensão paralela, assim como outras versões do Homem-Aranha.", 
    "imagem": "Imagens/homemaranha.jpg", 
    "video": "video/aranhaverso.mp4"
  },
  { 
    "id": 8, 
    "nome": "O auto da Compadecida", 
    "descrição": "As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa Senhora (Fernanda Montenegro). Adaptação da obra de Ariano Suassuna.", 
    "imagem": "Imagens/O_auto_da_compadecida.jpg", 
    "video": "video/autodacompadecida.mp4"
  }
]

document.querySelectorAll('.filme-img').forEach(img => {
  img.addEventListener('click', () => {
    const id = img.getAttribute('data-id');
    window.location.href = `detalhes.html?id=${id}`;
  });
});



function Main(){

  location.href = "index.html"

}
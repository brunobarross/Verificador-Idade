function verificar () {
  var data = new Date();
  var ano = data.getFullYear(); // ANO ATUAL
  var fano = document.getElementById('txtano'); 
  var resultado = document.getElementById("resultado");

  if(fano.value.length == 0 || fano.value > ano) { // CAMPO VAZIO OU ANO DIGITADO MAIOR QUE O ATUAL
    alert('Verifique os dados e tente novamente'); // ERRO
  } else {
    var fsex = window.document.getElementsByName ('radsex')
    var idade = ano - Number(fano.value); //ANO ATUAL MENOS VALOR DIGITADO NO INPUT ANO DE NASCIMENTO
    var genero = '';
    var adicionaImg = window.document.createElement('img'); // CRIA UM ELEMENTO IMG NO HTML
    adicionaImg.setAttribute('id', 'foto'); // ADICIONA UM ID E UM NOME DO ID AO ELEMENTO CRIADO


    //CHECAR SE É GÊNERO MASCULINO //

    if (fsex[0].checked) {//verificar se o valor escolhido é o da posição 0 = homem
      genero = 'Homem'; //atribui 'Homem' a variavel genero
      if (idade >=0 && idade < 10) {
        adicionaImg.setAttribute('src', 'bebe_menino.png'); //ADICIONA UM SRC E A IMAGEM DESEJADA
        resultado.innerHTML = `Detectamos criança com ${idade} anos`;
      } else if (idade > 10 && idade <=18) {
        adicionaImg.setAttribute('src' , 'jovem_homem.png'); //ADICIONA UM SRC E A IMAGEM DESEJADA
        resultado.innerHTML = `Detectamos adolescente com ${idade} anos`;
      } else if (idade > 18 && idade <= 60) {
        adicionaImg.setAttribute('src', 'adulto_homem.png'); //ADICIONA UM SRC E A IMAGEM DESEJADA
        resultado.innerHTML = `Detectamos adulto com ${idade} anos`;
      } else {
        adicionaImg.setAttribute('src', 'idoso_homem.png'); //ADICIONA UM SRC E A IMAGEM DESEJADA
        resultado.innerHTML = `Detectamos idoso com ${idade} anos`;
      }
    } 


   //CHECAR SE É GÊNERO FEMININO //


    else if (fsex[1].checked) {  //verificar se o valor escolhido é o da posição 1 = mulher
      genero ='Mulher'; //atribui 'Mulher' a variavel genero//      
      if (idade >=0 && idade < 10) {
        adicionaImg.setAttribute('src', 'bebe_menina.png'); //ADICIONA UM SRC E A IMAGEM DESEJADA
        resultado.innerHTML = `Detectamos criança com ${idade} anos`;
      } else if (idade > 10 && idade <=21) {
        adicionaImg.setAttribute('src', 'jovem_mulher.png'); //ADICIONA UM SRC E A IMAGEM DESEJADA
        resultado.innerHTML = `Detectamos adolescente com ${idade} anos`;
      } else if (idade > 21 && idade <= 50) {
        adicionaImg.setAttribute('src', 'adulta_mulher.png'); //ADICIONA UM SRC E A IMAGEM DESEJADA
        resultado.innerHTML = `Detectamos adulta com ${idade} anos`;
      } else {
        adicionaImg.setAttribute('src', 'idosa_mulher.png'); //ADICIONA UM SRC E A IMAGEM DESEJADA
        resultado.innerHTML = `Detectamos idosa com ${idade} anos`;
      }
    } 

    //EXEBILÃO DO TEXTO E ADIÇÃO DA IMAGEM EMBAIXO DO TEXTO
    resultado.style.textAlign='center'; // ATLINHA TEXTO AO CENTRO
    resultado.appendChild (adicionaImg);
  }
}
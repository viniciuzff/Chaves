function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>*Digite algo no campo!</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
   
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    let imagem = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      //se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) || imagem.includes(campoPesquisa)) {
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <img src="${dado.imagem}" alt="${dado.imagem}"> 
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
      }
    }

    if (!resultados) {
        resultados = "<p>Esse personagem ou caracteristica não foi encontrado. tente novamente!</p>"
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }




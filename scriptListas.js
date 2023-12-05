

// Função para fazer a requisição GET para a API
async function fazerRequisicaoReceitas() {
    try {
      const resposta = await fetch('https://receita.azurewebsites.net/receitas', {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          // Se precisar de headers adicionais, adicione-os aqui
        },
      });
  
      if (!resposta.ok) {
        throw new Error('Erro ao obter os dados', resposta);
      }
  
      const dados = await resposta.json();
      // Aqui, 'dados' conterá a lista de strings em formato JSON
      mostrarDadosReceita(dados); // Exibindo os dados no console (você pode fazer o que quiser com eles)
  
      return dados; // Retorna os dados para serem usados em outro lugar, se necessário
    } catch (erro) {
      console.error('Ocorreu um erro:', erro);
      // Trate o erro conforme necessário
    }
}

// Função para exibir os dados na página
function mostrarDadosReceita(dados) {
    const listaDados = document.getElementById('lista-receitas');

    // Limpa qualquer conteúdo pré-existente na lista
    listaDados.innerHTML = '';

    // Itera sobre os dados e cria itens de lista para exibição na página
    dados.forEach(item => {
        const listItem = document.createElement('li');
        // Exibe o item entre as aspas duplas
        listItem.textContent = item;
        listaDados.appendChild(listItem);
    });
}

async function fazerRequisicaoUsuarios() {
    try {
      const resposta = await fetch('https://receita.azurewebsites.net/usuarios', {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          // Se precisar de headers adicionais, adicione-os aqui
        },
      });
  
      if (!resposta.ok) {
        throw new Error('Erro ao obter os dados', resposta);
      }
  
      const dados = await resposta.json();
      // Aqui, 'dados' conterá a lista de strings em formato JSON
      mostrarDadosUsuario(dados); // Exibindo os dados no console (você pode fazer o que quiser com eles)
  
      return dados; // Retorna os dados para serem usados em outro lugar, se necessário
    } catch (erro) {
      console.error('Ocorreu um erro:', erro);
      // Trate o erro conforme necessário
    }
}

// Função para exibir os dados na página
function mostrarDadosUsuario(dados) {
    const listaDados = document.getElementById('lista-usuarios');

    // Limpa qualquer conteúdo pré-existente na lista
    listaDados.innerHTML = '';

    // Itera sobre os dados e cria itens de lista para exibição na página
    dados.forEach(item => {
        const listItem = document.createElement('li');
        // Exibe o item entre as aspas duplas
        listItem.textContent = item;
        listaDados.appendChild(listItem);
    });
}

fazerRequisicaoReceitas();
fazerRequisicaoUsuarios();  
// Chama a função para consultar a API quando a página carregar
//consultarAPI();

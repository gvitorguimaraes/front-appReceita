// ============ CRIAR USUARIO ===============

// Função para enviar o JSON para a API
async function cadastrarUsuario() {
    const email = document.getElementById('email').value;
    const nome = document.getElementById('nome').value;

    // Criando o objeto com os dados do formulário
    const dados = {
        nome: nome,
        email: email
    };

    try {
        const resposta = await fetch('http://receita.azurewebsites.net/usuario', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dados)
        });

        if (!resposta.ok) {
          throw new Error('Erro ao enviar os dados');
        }

        const respostaJson = await resposta.json();
        console.log('Resposta da API:', respostaJson);
        // Trate a resposta da API conforme necessário
      } catch (erro) {
        console.error('Ocorreu um erro:', erro);
        // Trate o erro conforme necessário
      }
}

async function cadastrarReceita() {
    const id_usuario = document.getElementById('emailReceita').value;
    const titulo = document.getElementById('titulo').value;
    const conteudo = document.getElementById('descricao').value;

    // Criando o objeto com os dados do formulário
    const dados = {
        id_usuario: id_usuario,
        email: titulo,
        conteudo: conteudo
    };
    
    // Enviando os dados para a API via método POST usando fetch
    try {
        const resposta = await fetch('http://receita.azurewebsites.net/receitas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dados)
        });

        if (!resposta.ok) {
          throw new Error('Erro ao enviar os dados');
        }

        const respostaJson = await resposta.json();
        console.log('Resposta da API:', respostaJson);
        // Trate a resposta da API conforme necessário
      } catch (erro) {
        console.error('Ocorreu um erro:', erro);
        // Trate o erro conforme necessário
      }
}
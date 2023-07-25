// Função para adicionar uma nova atividade na lista
function adicionarAtividade(descricao, data, turma) {
  const atividade = {
    descricao,
    data,
    turma
  };

  const atividades = JSON.parse(localStorage.getItem('atividades')) || [];
  atividades.push(atividade);
  localStorage.setItem('atividades', JSON.stringify(atividades));
}

// Função para exibir as atividades na lista
function exibirAtividades() {
  const atividades = JSON.parse(localStorage.getItem('atividades')) || [];

  const listaAtividades = document.getElementById('atividades');
  listaAtividades.innerHTML = '';

  atividades.forEach((atividade) => {
    const itemLista = document.createElement('li');
    itemLista.textContent = `Descrição: ${atividade.descricao}, Data: ${atividade.data}, Turma: ${atividade.turma}`;
    listaAtividades.appendChild(itemLista);
  });
}

// Evento para cadastrar a atividade quando o formulário é enviado
const form = document.getElementById('atividadeForm');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const descricao = document.getElementById('descricao').value;
  const data = document.getElementById('data').value;
  const turma = document.getElementById('turma').value;

  adicionarAtividade(descricao, data, turma);
  exibirAtividades();

  // Limpa os campos do formulário
  form.reset();
});

// Exibe as atividades cadastradas ao carregar a página
exibirAtividades();

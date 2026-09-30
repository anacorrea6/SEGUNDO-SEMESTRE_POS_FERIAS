// Classe Prato: armazena dados das refeições
class Prato {
  // Construtor atribui propriedades ao criar a estrutura do prato
  constructor(nome, preco, categoria) {
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
  }

  // Formata o valor numérico para o padrão de moeda do Brasil
  formatarPreco() {
    return `R$ ${this.preco.toFixed(2).replace('.', ',')}`;
  }
}

// Array com instâncias dos pratos oferecidos
const pratos = [
  new Prato('Feijoada Completa', 42.90, 'Prato Principal'),
  new Prato('Coxinha Artesanal', 8.50, 'Petisco'),
  new Prato('Brigadeiro Gourmet', 6.00, 'Sobremesa')
];

// Função que cria dynamicamente a marcação HTML estilizada com Tailwind CSS
function criarCard(prato) {
  // Cria o nó principal do card como tag <article>
  const card = document.createElement("article");

  // Lista de utilitários Tailwind aplicadas via array e agrupadas por .join(" ")
  card.className = [
    "bg-white rounded-xl shadow-sm",                       // Fundo branco, cantos arredondados, sombra leve
    "p-4 flex flex-col h-full",                             // Padding 16px, layout Flexbox em coluna, altura total
    "border border-gray-200",                               // Borda sutil de tom cinza claro
    "hover:-translate-y-1 transition-transform cursor-pointer" // Efeito hover subindo 4px com transição suave
  ].join(" ");

  // Injeta o conteúdo estruturado com utilitários Tailwind dentro do card
  card.innerHTML = `
    <!-- Nome do Prato: texto grande (xl), fonte em negrito -->
    <h3 class="text-xl font-bold mb-1">${prato.nome}</h3>
    
    <!-- Categoria: tom cinza atenuado (gray-500) e texto pequeno (sm) -->
    <p class="text-gray-500 text-sm mb-3">${prato.categoria}</p>
    
    <!-- Preço formatado: verde (green-600), fonte destacada (lg) e negrito -->
    <p class="text-green-600 font-bold text-lg mb-4">
      ${prato.formatarPreco()}
    </p>

    <!-- Botão de Ação -->
    <!-- mt-auto: MARGEM SUPERIOR AUTOMÁTICA (empurra o botão sempre para o fundo do flexbox de altura total) -->
    <button class="mt-auto w-full bg-red-700 text-white font-bold py-2 rounded-lg hover:bg-red-800 transition-colors">
      Pedir Agora
    </button>
  `;

  // Retorna o elemento card montado
  return card;
}

// Obtém a referência do elemento container no HTML via ID
const container = document.querySelector("#containerPratos");

// Itera sobre o vetor de pratos criando e inserindo cada um no DOM
pratos.forEach(p => container.appendChild(criarCard(p)));
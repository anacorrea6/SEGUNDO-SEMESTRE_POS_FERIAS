# Do Quintal Pizza Bar 🍕

Um projeto web super simples e extremamente didático para a pizzaria artesanal fictícia **"Do Quintal Pizza Bar"**. 
O design mistura o rústico com o moderno, aplicando uma estética aconchegante.

## 🛠️ Tecnologias Utilizadas

- **HTML5** (Semântico e organizado)
- **CSS3** (Estilos customizados e importação via CSS puro)
- **JavaScript** (Módulos ES6)
- **Bootstrap 5** (Instalado via `npm`, sem usar CDNs no HTML)

## 📁 Estrutura de Pastas

```text
meu-projeto/
├── index.html            # Estrutura principal da página com componentes Bootstrap
├── package.json          # Gerenciamento de dependências (npm)
├── README.md             # Documentação do projeto
└── src/
    ├── css/
    │   └── style.css     # CSS que importa o Bootstrap do node_modules e adiciona customizações
    └── js/
        └── script.js     # JS que importa o Bootstrap do node_modules e tem lógica de form
```

## 🚀 Como Rodar o Projeto

1. Abra o terminal na pasta raiz do projeto (`meu-projeto`).
2. Instale as dependências executando:
   ```bash
   npm install
   ```
3. Como o projeto importa módulos diretamente do `node_modules` com o caminho relativo, você precisará servir a pasta raiz com um servidor local para que o navegador não bloqueie por CORS ou por erro de caminho.
   - **Recomendação**: Use a extensão **Live Server** no VS Code. Basta clicar com o botão direito no `index.html` e selecionar "Open with Live Server".
   - **Alternativa**: Você pode usar o pacote `serve` executando: `npx serve .`

## 📚 Notas Didáticas

- **Bootstrap via NPM:** Ao invés de usar as tags `<link>` e `<script>` pegando da internet (CDN), instalamos o `bootstrap` na pasta `node_modules`. Importamos ele usando `@import` no arquivo CSS e `import` no arquivo JS (como módulo).
- **Grid do Bootstrap:** Usamos extensivamente `container > row > col-*` para deixar a seção de "Cardápio" e o "Formulário" responsivos e centralizados.
- **Utilitários do Bootstrap:** Foram usadas classes como `p-5` (padding), `mb-3` (margin-bottom), `fw-bold` (font-weight), e `bg-light` (background color) para acelerar a estilização sem escrever CSS manualmente.
- **Comentários:** O código fonte (`index.html`, `style.css` e `script.js`) contém comentários explicando o que cada classe ou bloco faz. Ideal para aulas!

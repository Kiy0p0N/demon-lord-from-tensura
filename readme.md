# Lordes Demônios - That Time I Got Reincarnated as a Slime

![Imagem do Projeto](/image/example.gif)

## Descrição

Este projeto consiste em uma página web dedicada aos Lordes Demônios da obra **"That Time I Got Reincarnated as a Slime"**, uma série de light novels de fantasia japonesa escrita por **Fuse** e ilustrada por **Mitz Vah**.

A página apresenta informações detalhadas sobre cada um dos Lordes Demônios, incluindo seus nomes, títulos, descrições e imagens. O usuário pode navegar entre os personagens clicando nos botões de próximo e anterior ou carregar um personagem aleatório.

## Tecnologias Utilizadas

- **HTML5**: Estruturação do conteúdo.
- **CSS3**: Estilização da página, incluindo layout responsivo e design visual.
- **JavaScript (Node.js + Express)**: Servidor backend para fornecer os dados dos Lordes Demônios.
- **EJS (Embedded JavaScript)**: Template engine para renderizar dinamicamente as páginas HTML.
- **Axios**: Biblioteca para realizar requisições HTTP ao backend.
- **Body-parser**: Middleware para lidar com requisições JSON e URL-encoded.

## Funcionalidades

- Exibição dinâmica de informações sobre cada Lorde Demônio.
- Navegação entre personagens usando botões de "Próximo" e "Anterior".
- Carregamento de um Lorde Demônio aleatório ao acessar a página inicial.
- API backend que fornece os dados dos personagens.

## Como Executar o Projeto

1. Clone este repositório:
   ```sh
   git clone https://github.com/Kiy0p0N/demon-lord-from-tensura.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd demon-lord-from-tensura
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie o servidor backend:
   ```sh
   node api.js
   ```
5. Abra um segundo terminal e inicie o servidor frontend:
   ```sh
   node app.js
   ```
6. Acesse a página no navegador:
   ```
   http://localhost:3000
   ```

## Autor

Desenvolvido por [Felipe Cesar Rodrigues](https://www.linkedin.com/in/felipe-cesar-rodrigues/).
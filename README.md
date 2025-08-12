<img width="1029" height="784" alt="image" src="https://github.com/user-attachments/assets/4a71e53b-0d6d-4eb7-835a-45f33bb707d3" />


Projeto DrogaLisa
Projeto Final Bloco 2 Generation - Brasil
Desenvolvido por Raul da Silva Vieira

Descrição
Projeto DrogaLisa é uma API RESTful para gerenciamento de produtos e categorias farmacêuticas. Permite operações CRUD (Create, Read, Update, Delete) para categorias de produtos e para os produtos farmacêuticos.

Endpoints
| Método | Endpoint           | Descrição                  |
| ------ | ------------------ | -------------------------- |
| POST   | `/categorias`      | Criar uma nova categoria   |
| GET    | `/categorias`      | Listar todas as categorias |
| GET    | `/categorias/{id}` | Buscar categoria por ID    |
| PUT    | `/categorias/{id}` | Atualizar categoria por ID |
| DELETE | `/categorias/{id}` | Deletar categoria por ID   |


Produtos Farmacêuticos
| Método | Endpoint         | Descrição                |
| ------ | ---------------- | ------------------------ |
| POST   | `/produtos`      | Criar um novo produto    |
| GET    | `/produtos`      | Listar todos os produtos |
| GET    | `/produtos/{id}` | Buscar produto por ID    |
| PUT    | `/produtos/{id}` | Atualizar produto por ID |
| DELETE | `/produtos/{id}` | Deletar produto por ID   |

Schemas
Categoria
Representa a categoria do produto farmacêutico.

Produto
Representa o produto farmacêutico, que pertence a uma categoria.

Tecnologias utilizadas
 - NestJS
 - TypeORM
 - Swagger para documentação da API

Como rodar o projeto
1. Clone o repositório
git clone <URL_DO_REPOSITÓRIO>

2. Instale as dependências
npm install

3. Configure o banco de dados (MySQL, Postgres, etc) no arquivo de configuração.

4. Rode a aplicação
npm run start

5. Acesse a documentação da API pelo Swagger na URL:
ttp://localhost:4000/api

Autor
Raul da Silva Vieira
LinkedIn: www.linkedin.com/in/raul-vieiradev
GitHub: https://github.com/RaulVieira007

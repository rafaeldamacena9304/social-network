# 🚀 Social Network DRF + React

## 🔍 Descrição do Projeto

Este é um projeto de **Rede Social Simples** que combina:

- **Backend**: Django Rest Framework (DRF) para fornecer uma API REST robusta e segura.
- **Frontend**: React para uma interface moderna e responsiva.

A aplicação permite registro e autenticação de usuários, criação de posts, feed de publicações (geral ou filtrado pelos usuários seguidos), perfis de usuário e funcionalidades de seguir/unfollow.

---

## 🛠️ Tecnologias Utilizadas

- **Python 3.x**
- **Django** & **Django Rest Framework**
- **React** (Create React App)
- **SQLite** (banco de dados padrão)
- **Axios** (para requisições HTTP no frontend)
- **JWT Authentication** (via DRF Simple JWT ou similar)

---

## 🚀 Funcionalidades Principais

1. **Registro de Usuário**  
   - Endpoint público de cadastro de novos usuários.
2. **Autenticação**  
   - Login via JWT para acessar as rotas protegidas.
3. **Feed de Posts**  
   - Listagem de todas as publicações.
   - Filtro opcional para exibir apenas posts de usuários que você segue (`?following=true`).
4. **Perfis de Usuário**  
   - Visualização de detalhes do perfil de qualquer usuário pelo `username`.
5. **Sistema de Seguidores**  
   - Seguir e deixar de seguir outros usuários.
   - Verificar se já está seguindo um usuário específico.
6. **Criação de Post**  
   - Endpoint para criar novas publicações autenticadas.

---


## ⚙️ Como Executar o Projeto

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/sns-drf-react.git
cd sns-drf-react
```

### 2. Configurar o Backend (Django)

```bash
cd social_network_backend
python -m venv venv
source venv/bin/activate    # Windows: `venv\Scripts\activate`
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

O backend estará disponível em `http://127.0.0.1:8000/`.

### 3. Configurar o Frontend (React)

```bash
cd social_network_frontend
npm install
npm run dev
```

O frontend abrirá em `http://localhost:5173/` e fará consumo da API do backend.

---

## 🔗 Endpoints da API

| Método | Rota                                | Descrição                                   |
| ------ | ----------------------------------- | ------------------------------------------- |
| POST   | `/register_user/`                  | Registro de novo usuário                   |
| POST   | `/api/token/`                      | Obtenção de token JWT                       |
| POST   | `/api/token/refresh/`              | Renovação de token JWT                      |
| GET    | `/home/`                           | Obter feed (todos ou apenas seguidos)       |
| GET    | `/profile_detail/:username/`       | Detalhes do perfil de `username`            |
| GET    | `/is_following_user/:username/`    | Verifica se está seguindo `username`        |
| POST   | `/follow/:username/`               | Seguir o usuário `username`                 |
| POST   | `/unfollow/:username/`             | Deixar de seguir `username`                 |
| POST   | `/create_post/`                    | Criar nova publicação                       |

> **Observação:** Ajuste o prefixo `/api/` de acordo com seu `ROOT_URLCONF` se necessário.

---

## 🎨 Estrutura de Componentes React

- **LoginForm**: formulário de autenticação.
- **RegisterForm**: formulário de cadastro.
- **Feed**: exibe lista de posts com filtro.
- **Profile**: detalhes do usuário e lista de seus posts.
- **PostForm**: criação de novas publicações.

---

## 🤝 Contribuição

Contribuições são bem-vindas!

1. Faça um fork do projeto.  
2. Crie uma branch para sua feature: `git checkout -b feature/nome-da-feature`  
3. Commit suas mudanças: `git commit -m "Adiciona nova feature"`  
4. Abra um Pull Request.

---

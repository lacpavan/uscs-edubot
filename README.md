# EduBot USCS

EduBot USCS é uma aplicação web acadêmica desenvolvida por alunos do curso de Inteligência Artificial da Universidade Municipal de São Caetano do Sul (USCS).

O projeto tem como objetivo facilitar o acesso dos estudantes às principais informações, serviços e recursos acadêmicos da universidade por meio de uma interface moderna, interativa e intuitiva.

---

# Funcionalidades

* Interface responsiva para Desktop e Mobile
* Mascote virtual interativo (EduBot)
* Cards de navegação acadêmica
* Balão dinâmico de informações
* Modo Claro e Escuro
* Efeitos sonoros e áudio de boas-vindas
* Links rápidos para serviços institucionais
* Organização visual moderna e amigável
* Integração Frontend + Backend via API REST

---

# Tecnologias Utilizadas

## Frontend

* React
* TypeScript
* Vite
* CSS3
* Lucide React

## Backend

* Python
* FastAPI

## Ferramentas

* Node.js
* npm
* Git
* GitHub

---

# Estrutura do Projeto

```bash
edubot/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── ...
│
└── README.md
```

---

# Como Executar o Projeto

## 1. Clone o Repositório

```bash
git clone https://github.com/SEU-USUARIO/edubot-uscs.git
```

---

# Frontend

## Instalar Dependências

```bash
cd frontend
npm install
```

## Executar

```bash
npm run dev
```

O frontend ficará disponível em:

```bash
http://localhost:5173
```

---

# Backend

## Instalar Dependências

```bash
cd backend
pip install -r requirements.txt
```

## Executar

```bash
uvicorn main:app --reload
```

O backend ficará disponível em:

```bash
http://localhost:8000
```

---

# Responsividade

O projeto foi desenvolvido com foco em responsividade:

* Desktop:

  * Tela única sem scroll
  * Layout centralizado
  * Melhor aproveitamento visual

* Mobile:

  * Layout adaptável
  * Scroll automático quando necessário
  * Reorganização dinâmica dos componentes

---

# Funcionalidades do EduBot

O mascote virtual EduBot possui:

* Balão interativo de informações
* Áudios personalizados
* Efeitos visuais
* Compatibilidade com Dark Mode
* Integração com os cards da plataforma

---

# Equipe

Projeto desenvolvido por alunos do curso de Inteligência Artificial da USCS.

## Integrantes

* Larissa Pavan
* Beatriz Mayumi
* Thiago Alves
* Guilherme Carvalho
* Samuel de Castro
* Luana Goto
* Maria Esteves

---

# Objetivo Acadêmico

O EduBot foi criado com o propósito de melhorar a experiência acadêmica dos estudantes, centralizando informações importantes em uma plataforma intuitiva, moderna e acessível.

---

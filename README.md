<div align="center">

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" />
<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />

<br/>
<br/>

# EduBot USCS

[🔗 Ver demo](https://edubot-projeto-academico.vercel.app/) · [📂 Repositório](https://github.com/lacpavan/uscs-edubot)

</div>

---

## Sobre o projeto

O EduBot nasceu de uma dor real: Estudantes da USCS navegavam por múltiplos canais institucionais para acessar informações básicas. A plataforma resolve isso com uma interface centralizada, responsiva e com um mascote virtual interativo que guia o usuário pelos recursos da universidade.

---

## Funcionalidades

- 🤖 **Mascote virtual (EduBot)** - Balão dinâmico de informaçõesn e efeitos visuais.
- 🗂️ **Cards de navegação** - Links rápidos para os principais serviços institucionais.
- 🌗 **Dark/light mode**
- 📱 **Layout responsivo** - Tela única sem scroll no desktop, reorganização dinâmica no mobile.
- 🔌 **Integração via API REST** - Front-End e Back-End desacoplados.

---

## Arquitetura

```
uscs-edubot/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
├── backend/
│   ├── main.py
│   └── requirements.txt
└── README.md
```

**Frontend:** React + TypeScript + Vite + CSS3 + Lucide React  
**Backend:** Python + FastAPI (validação via Pydantic, documentação OpenAPI automática)  
**Deploy:** Vercel

---

## Rodando localmente

**Pré-requisitos:** Node.js ≥ 18, Python ≥ 3.8

### 1. Clone o repositório

```bash
git clone https://github.com/lacpavan/uscs-edubot.git
cd uscs-edubot
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

Disponível em `http://localhost:5173`

### 3. Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Disponível em `http://localhost:8000`  
Documentação da API: `http://localhost:8000/docs`

---
## Contexto acadêmico

Projeto desenvolvido para a disciplina "Plataformas Computacionais para IA" do Prof. Dr. Carlos Eduardo Bognar, do curso de Inteligência Artificial da Universidade Municipal de São Caetano do Sul.

## Equipe

| Nome | GitHub |
|------|--------|
| Larissa Pavan | [@lacpavan](https://github.com/lacpavan) |
| Beatriz Mayumi | [@BiaMayumi](https://github.com/BiaMayumi) |
| Thiago Alves Serra | [@thiagoexpressoDev](https://github.com/thiagoexpressoDev) |
| Guilherme Carvalho | [@guilhermecarvalho173](https://github.com/guilhermecarvalho173) |
| Luana Goto | [@luanagoto](https://github.com/luanagoto) |
| Maria Clara Esteves | [@uusaagii](https://github.com/uusaagii) |
| Samuel de Castro | — |

---

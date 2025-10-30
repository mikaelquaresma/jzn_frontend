# jzn_frontend

Frontend da aplicação JZN construído com React + Vite.

## Tecnologias

- React 18
- Vite
- Axios
- Nginx (para produção)
- Docker

## Como executar localmente

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## Como executar com Docker

```bash
docker build -t jzn-frontend .
docker run -p 80:80 jzn-frontend
```

## Build para produção

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## Variáveis de Ambiente

- `VITE_API_URL` - URL do backend (padrão: http://localhost:8080)

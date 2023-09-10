# Repositório para aplicação simples para base de uma imagem Docker

A aplicação inclui:

- Node.JS
- Framework Express

Abra o terminal na raiz, execute o comando para baixar as dependências do package.json

```
npm install
```

Agora para gerar a imagem docker, execute o comando:

```
docker build -t chiarorosa/app-node:1.0
```

## v1.0.3

Incluido docker-compose para coordenar o container. Na raiz, execute o comando:

```
docker-compose up -d
```

<hr>

Repositório do Docker Hub 🔗:
[hub.docker](https://hub.docker.com/r/chiarorosa/app-node)

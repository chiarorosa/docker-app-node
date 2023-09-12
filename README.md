# Repositório para aplicação simples para base de uma imagem Docker

<strong>Repositório no Docker Hub 🔗:</strong>
[hub.docker](https://hub.docker.com/r/chiarorosa/app-node)

<hr>
A aplicação inclui:

- Node.JS 18.x
- Framework Express

Abra o terminal na raiz do projeto, execute o comando para baixar as dependências:

```
npm install
```

Em seguida, execute o comando para rodar o container:

```
docker-compose up -d
```

Se quiser criar sua própria imagem a partir deste docker, execute o comando:

✏️ Você precisa trocar para o nome do seu usuário no Docker

```
docker build -t chiarorosa/app-node:1.0
```

## v1.0.3

Incluido docker-compose para coordenar o container. Na raiz, execute o comando:

```
docker-compose up -d
```

## v1.1

A versão estável da aplicação para download: [v1.1](https://github.com/chiarorosa/docker-app-node/releases/tag/v1.1)

# Quanto vale meu carro?

O QuantoValeMeuCarro é um produto web, porém idealizado em mobile-first e foi construída em ReactJS. Atualmente, voltada para os pessoas que tem interesse em consultar o valor de mercado do seu veículo.

## Requisitos

É necessário que se tenha instalado:

- [Git]('https://git-scm.com/book/en/v2/Getting-Started-Installing-Git')
- [Node]('https://nodejs.org/en/')
- [npm]('https://classic.npmpkg.com/en/docs/install/#mac-stable')
- [Docker]('https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-18-04')
- [API]('https://creditas-price-api.herokuapp.com/brands')

```bash
docker --version
Docker version 19.03.1, build 74b1e89
```

- Docker-Compose 1.24 ou superior

```bash
docker-compose --version
docker-compose version 1.24.1, build 4667896b
```

## Instalação

Para fazer o clone do projeto execute o comando:

```bash
git clone git@github.com:viniciusmattosrj/quanto-vale-meu-carro.git
```

Instale as dependências necessarias para o correto funcionamento do sistema:

```bash
npm install
```

````

Configurar no .env variavel

```bash
NODE_PATH='src/'
````

# Iniciando e Testando

Acesse [http://localhost:3000](http://localhost:3000) para visualizar no navegador o sistema irá atualizar constantemente após cada modificação

### Para utilizar sem Docker

```sh
npm start
```

### Para utilizar com Docker

```sh
docker-compose up
```

## Testando o projeto

```sh
npm test
```

Execute para rodar os testes do projeto

# Deploy

## Preparando o projeto para produção

```sh
npm build
```

Prepara o build para produção disponivel na pasta `build`

O build minifica arquivos e nome de arquivos e inclui hashes

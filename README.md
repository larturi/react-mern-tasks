# MERN Tasks (Client)

## React, Node and Mongo

### 🚀 Quick start

#### Instalar dependencias

```bash
yarn
```

#### Start in development mode

```shell
yarn start 
```

### Pruebas con Cypress

#### Correr pruebas por spec

```shell
npx cypress open
```

#### Correr todas las pruebas por consola

```shell
npx cypress run --browser chrome
```

### Docker

```bash
docker build --build-arg REACT_APP_BACKEND_URL=http://mern-tasks.cloudapp.com.ar:4004 -t mern-tasks-frontend:latest .

docker-compose up -d
```

#### Made with ❤️ by Leandro Arturi

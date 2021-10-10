# Periodic-table-backend
Proyecto periodic table backend  usando node.js,postgreSQL, express y sequelize.

Este proyecto contiene los siguientes módulos:

- Users
- Elements
- Categories
- Groups
- Periods

También se integra los módulos con sus respectivos seeders.

## Sobre el proyecto

Requisitos

  - Nodejs 10.13.0 en adelante
  - PostgreSQL 9 en adelante


## Instalación del proyecto

1. Clonar el código fuente desde el repositorio.

```sh
$ https://github.com/DianaDrz/Periodic-table-backend.git
```

2. Ingresar a la carpeta.

```sh
$ cd Periodic-table-backend
```

3. Instalar las dependencias de paquetes npm

```sh
$ npm install
```

## Configuraciones



## Inicializar la base de datos

1. Crear una base de datos vacía en su gestor de base de datos con la información que configuró en el archivo config/config.js

2. Ejecutar lo siguiente para ejecutar

```sh
$ npm start
```

3. Ejecutar lo siguiente para poblar las tablas con datos iniciales.


```sh
$ npm run seeders
```



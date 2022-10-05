# Sistema de Gestión de la Calidad Universidad Tecnológica de Salamanca
<img src="http://www.utsalamanca.edu.mx/assets/img/pagina-principal/logouts.png" style="width: 220px;" alt="Universidad Tecnológica de Salamanca">

## Pre-requisitos

- Instalar [Docker.](https://www.docker.com/get-started)
- Instalar [Docker Compose.](https://docs.docker.com/compose/install/)

## Instalación

- Clonar repositorio `git clone https://github.com/JoseRazo/sgc.git`
- Crear imagen docker **`docker compose build`**
- Crear contenedor **`docker compose up -d`**
- Abrir navegador y entrar a URL [127.0.0.1:4200](http://127.0.0.1:4200)

## Subir cambios del proyecto a servidor de producción

- Entrar al contenedor `docker exec -i -t sgc-web-1 /bin/sh`
- Compilar el codigo **`ng build --prod --build-optimizer --base-href=./`**
- Subir archivos de la carpeta /dist/SGC/ al servidor de producción

##
<p style="color:yellow">Si te gusta nuestro proyecto por favor deja una estrella ☆<p>
# Node.js con Javascript

## Contenido
- [Equipo](#equipo)
- [Prerrequisitos](#requisitos-previos)
- [Levantar el proyecto](#levantar-el-proyecto)
- [Levantar el proyecto con el marco Express](#levantar-el-proyecto-con-el-marco-express)
- [Presentación del equipo](Presentación.pdf)
- [Solución de la actividad propuesta en la exposición](#solucion-de-la-actividad)
<br>

## Equipo:
- Jesus Alejandro Be Hau
- Juan Carlos Conde Marrufo
- Darwin Miguel Huchim Dzib

## Requisitos previos:
Instalar [Node.js](https://nodejs.org/en)

## Levantar el proyecto:
Clonar el proyecto
</br>
``
git clone https://github.com/JesusBeHau/Node.js
``

Ir al directorio raíz del proyecto
</br>
``
cd Node.js
``

Ejecutar el archivo HelloWorld
</br>
``
node HelloWorld.js
``

Ejecutar el archivo TypeServices
</br>
``
node TypeServices.js
``
>Nota: En el archivo TypeServices.js es necesario modificar la dirección IP por la de tu máquina.

## Levantar el proyecto con el marco express
Ir al directorio raíz del proyecto
</br>
``
cd my-express-app
``

Instalar Express
</br>
``
npm install express
``

Ejecutar el archivo App
</br>
``
node App.js
``

## Solucion de la actividad

Para la actividad planteada al final de la exposicion, la solucion era crear un archivo para el cliente (en nuestro caso le llamamos appClient.js) y agregar el código siguiente:
```
const http = require('http');

http.get(`http://localhost:3000/teamMembers`, (res) => {
    res.on('data', (data) => {
        console.log('Respuesta del servidor:', data.toString());
    });
});
```
[VER SOLUCION](https://github.com/JesusBeHau/Node.js/blob/main/my-express-app/appClient.js)

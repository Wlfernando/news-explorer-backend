# news-explorer-backend

## Descripción General

* Introducción
* Controladores
* Middlewares
* Modelos
* Rutas
* Librería
* Dependencias

## Introducción

El actual proyecto es el desarrollo del backend para la app de explorador de noticias donde se guardaran todos los usuarios registrados y las tarjetas en favoritos con la ayuda de express.

## Controladores 

Tenemos funciones para crear artículos, recuperar los articulos creados por el usuario, borrar los articulos guardados en la app.

## Middlewares

Encontramos la autorización que comprobara el json web token que se le envia al usuario una vez que este se registró. Lo recuperará de la cabecera por cada solicitud que se realiza.

La función con el nombre "hasError" es el manejo centralizado de errores para enviar la respuesta al cliente.

El archivo logger tiene las funciones responsables con la ayuda de la librería de winston para el registro de los requerimientos y los posibles errores.

Y por ultimo, tenemos la función que respondera al cliente con un 404 a una solicitud no encontrada.

## Modelos

Se emplea Mongoose para gestionar la base de datos y así poder crear los objetos necesarios para gestionar los requerimientos del cliente.

El esquema para el usuario pide un "email", "password" y "name". El correo recibe una propiedad llamada "unique" para evitar el conflicto de cuentas creadas por un correo que será el valor que da la identidad a la cuenta.

Asi, el esquema para los articulos solicita "keyWord", "title", "text", "date", "urlToImage", "url" y "source". Iternamente gestiona la fecha de creación del articulo guardado y relaciona este mismo con el usuario que mandó la petición.

## Rutas

Actualmente existe un archivo para gestionar las rutas con express router donde podemos encontrar los métodos post, get y delete para los articulos.

## Libreria

Se presenta las constantes para la aplicación, las utilidades albergan las funciones como "validateEmailPattern" y "findByCredencials", y tenemos el manejo de errores como "AuthError", "CastError", "Conflict" y "Forbidden".

## Dependencias

Se utilizan librerias como "bcrypt", "validator", "celebrate", "joi", "cors", "dotenv", "express", "express-winston", "jsonwebtoken" y "mongoose".

## node-code-verifier-backend
Node Express project - backend

# Dependencias del proyecto

>concurrently: su funcion es poder ejecutar contantemente un comando de la consola, en este caso lo use para poder ejecutar nodemon de manera constante y asi poder usar ts

> dotenv: permite leer los datos del archivo .env

> eslint: nos obliga a crear y seguir una forma especifica de crear codigo

> jest: dependencia para ejecutar test

> typescript: nos permite crear el archivo tsconfig.json para usar typescript


# Script creados

*  **buld**: al ejecutar este escript se creara la caperta dist con la copilacion del codigo de typescript
* **start**: inicia el servidor una vez se haya creado la carpeta dist
* **dev**: usando concurrently se ejecutaran dos comandos, el primero es el watch de ts que escuchara por los cambios en el ts, y el otro es el nodemon que ejecutara el servidor en la solucion de javascript
* **test**: ejecutara los test de jest
* **server:coverage**: ejecuta un servidor donde se veran los resultados de los test


# Variables de entorno 

* **PORT**: es el puerto con el que se iniciara el servidor local

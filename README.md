# Integrador_FullStack_Avanzado
Trabajo integrador final FullStack UTN

# Integrador_FullStack_Avanzado
Trabajo integrador final FullStack UTN

# Documentación del Proyecto 

## Configuración

### Variables de entorno

El proyecto utiliza variables de entorno para la configuración. Asegúrate de configurar las siguientes variables en el archivo `.env`:

- `MONGODB_URI`: URL de conexión de la base de datos MongoDB.
- `EMAIL_HOST`: Host del servidor de correo electrónico.
- `EMAIL_PORT`: Puerto del servidor de correo electrónico.
- `EMAIL_USER`: Usuario del servidor de correo electrónico.
- `EMAIL_PASSWORD`: Contraseña del servidor de correo electrónico.

## Estructura del Proyecto

El proyecto "A" sigue la siguiente estructura de archivos y directorios:

```
- controllers/
  - homeController.js
- db-final-avanzado-firebase-adminsdk-vuhmo-f802ec79c4.json
- routes/
  - products.js
  - user.js
- router/
  - formulario.js
- views/
  - partials/
- .env
- app.js
- package.json
- public/
  - css/
    - style.css
```

- `controllers/`: Directorio que contiene los controladores utilizados en el proyecto.
- `routes/`: Directorio que contiene las rutas del proyecto.
- `router/`: Directorio que contiene el router específico para el formulario.
- `views/`: Directorio que contiene las vistas utilizadas en el proyecto, incluyendo la confirmación y el formulario.
- `.env`: Archivo de variables de entorno que debe ser configurado antes de ejecutar el proyecto.
- `app.js`: Archivo principal del proyecto.
- `package.json`: Archivo de configuración de npm que contiene las dependencias y scripts del proyecto.
- `public/`: Directorio que contiene archivos estáticos, como hojas de estilo CSS.

## Uso

1. Instala las dependencias del proyecto ejecutando el siguiente comando:

```
npm install
```

2. Configura las variables de entorno en el archivo `.env` con los valores correspondientes.

3. Ejecuta el proyecto utilizando el siguiente comando:

```
npm start
```

Esto iniciará el servidor y estará disponible en `http://localhost:3000`.

## Funcionalidades

El proyecto tiene las siguientes funcionalidades:

- Visualización y manipulacion de productos.
- Formulario de contacto que utiliza Nodemailer para enviar mensajes por correo electrónico.

## Dependencias

El proyecto utiliza las siguientes dependencias principales:

- `bootstrap`: Framework CSS para estilizar la aplicación web.
- `dotenv`: Carga de variables de entorno desde el archivo `.env`.
- `express`: Framework de Node.js para crear aplicaciones web.
- `hbs`: Motor de plantillas para renderizar vistas.
- `mongoose`: ODM (Object-Document Mapping) para MongoDB.

## Modales jQuery
El proyecto utiliza modales jQuery para ciertas funcionalidades.

Modal de Creación
Modal de Edición
Modal de Eliminación
Modal de Inicio de Sesión


## Conclusión

Esta documentación proporciona una visión general del proyecto, su configuración, estructura y cómo utilizarlo. 

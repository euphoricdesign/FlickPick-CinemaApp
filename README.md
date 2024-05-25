---
title: "FlickPick"
description: "Plataforma de salas de cine."
---

# FlickPick

## Descripción
FlickPick es una aplicación de salas de cine interactivas donde los usuarios pueden elegir las películas que desean ver en cartelera a través de completar un formulario. Aunque la aplicación actualmente cuenta con funcionalidades básicas, tiene un gran potencial para ser expandida y mejorada con nuevas características que se implementarán en el futuro.

## Características
- **Visualización de Películas:** Los usuarios pueden ver en la página principal las películas guardadas en la base de datos.
- **Sección "About Us":** Información sobre el proyecto y su propósito.
- **Sección "Our Cinemas":** Detalles sobre los cines ficticios asociados.
- **Sección "Schedule":** Horarios de las películas (de momento, estática).
- **Sección "You Choose":** Los usuarios pueden completar un formulario para agregar la película que desean ver en cartelera, y esta aparecerá en la página principal.

## Tecnologías Utilizadas
- **Frontend:** HTML, CSS
- **Backend:** Express, Mongoose
- **Base de Datos:** MongoDB

## Instalación y Configuración
Para instalar y configurar FlickPick en un entorno local, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/tuusuario/flickpick.git](https://github.com/euphoricdesign/FlickPick-CinemaApp.git)
   ```
2. **Navegar al directorio del proyecto:**
   ```bash
   cd flickpick
   ```
3. **Instalar dependencias del backend:**
   ```bash
   npm install
   ```
4. **Configurar variables de entorno:**
   - Crear un archivo `.env` en el directorio del backend con las siguientes variables:
     ```plaintext
     PORT=5000
     MONGO_URI=tu_mongodb_uri
     API_KEY=tu_api_key
     ```
5. **Iniciar el servidor backend:**
   ```bash
   npm start
   ```
6. **Abrir el frontend:**
   - Abrir el archivo `index.html` ubicado en la carpeta `frontend` con tu navegador preferido.

## Uso
- **Página Principal:** Visualiza las películas actuales en cartelera.
- **Formulario "You Choose":** Completa el formulario para agregar una nueva película a la cartelera.
- **Otras Secciones:** Explora las secciones "About Us", "Our Cinemas", y "Schedule" para más información.

## Contribución
Si deseas contribuir a FlickPick, sigue estas pautas:
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza los cambios necesarios y haz commit (`git commit -m 'Añadir nueva característica'`).
4. Envía tus cambios a tu repositorio fork (`git push origin feature/nueva-caracteristica`).
5. Crea un Pull Request explicando los cambios realizados.

## Licencia
Este proyecto no tiene una licencia específica por el momento.

### Autores

- **Merlina Villecco**

### Contacto

- **LinkedIn:** [Merlina Villecco](https://www.linkedin.com/in/merlina-villecco-64149a214/)

---


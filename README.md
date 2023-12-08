## Rick and Morty.

Este proyecto fue realizado para una prueba de desarrollo.

Utilize el framework Nextjs ya que este me provee de un ambiente fullstack el cual fue necesario para este proyecto ademas con style-components.


Deploy: https://rick-and-morty-seven-theta.vercel.app/

## Clonar el Proyecto desde GitHub

1. **Obtener la URL del Repositorio:**
   - Copia la URL que aparece (puedes usar HTTPS o SSH).

2. **Clonar el Repositorio:**
   - Abre tu terminal o línea de comandos.
   - Navega al directorio donde deseas clonar el proyecto.
   - Ejecuta el siguiente comando, reemplazando `<URL>` con la URL que copiaste:

     ```bash
     git clone <URL>
     ```

   Esto creará una copia local del repositorio en tu máquina.

## Instalar Dependencias

1. **Navegar al Directorio del Proyecto:**
   - Utiliza el comando `cd` para cambiar al directorio del proyecto clonado:

     ```bash
     cd nombre_del_proyecto
     ```

2. **Instalar Dependencias:**
   - Entra al ```package.json``` para ver las dependencias usadas.

     ```bash
     npm install
     ```

3. **Agregar las variables de entorno:**
   - Crea un archivo .env en la raiz del proyecto y sus valores
        ```bash
         NEXT_PUBLIC_RICK_AND_MORTY_URL=https://rickandmortyapi.com/api/character
     ```

## Ejecutar el Proyecto

1. **Comandos de Ejecución:**
   - Para desarrollo:
    ```bash
   npm run dev
   ```

   - Para hacer build:
    ```bash
   npm run build
   ```
   - Para para produccion:
    ```bash
   npm run start
   ```


# 🌟 Contributing Guide / Guía de Contribución 🌟

Esta es un guía para nuestro proyecto, tiene el fin de mantener un formato de código limpio y organizado, así como de mantener una comunicación clara y eficiente. 👨🏻‍💻

## 👀 Pasos para Contribuir

### 1️⃣ Fork el repositorio (también puedes hacer commits directamente en el repositorio, pero verifica que tus cambios estén bien)

- Presionar el botón **Fork** en la esquina superior derecha para crear una copia del repositorio bajo tu cuenta.


### 2️⃣ Clonar el Fork

- Clona el repositorio forkeado en tu máquina local ejecutando el siguiente comando:

   ```bash
   git clone https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git
   ```

- Reemplazar `YOUR_USERNAME` y `REPOSITORY_NAME` con tu nombre de usuario y el nombre del repositorio.


### 3️⃣ Cree una nueva rama o utilice la rama main

- Crea una rama basada en el tipo de cambio (por ejemplo, `feat/name-related-issue`, `docs/name-related-issue`).

   ```bash
   git checkout -b branch-name
   ```

   > Ejemplo: `docs/update-readme` o `fix/bottom-bug`.

### 4️⃣ Haga los cambios y escriba los commits

- Haga los cambios en su repositorio local.
- Escriba los commits siguiendo el **formato de commit**:

   - Cada commit debe hacer una única y lógica modificación.
   - Evite agrupar cambios no relacionados en un único commit.
   - Escriba mensajes de commit claros y descriptivos usando el formato:

   ```bash
   git add .
   git commit -m "[type] description"
   ```

   > Tipos y cuándo usarlos:

   - `[feat]` A new feature
   - `[fix]` A bug fix
   - `[docs]` Documentation changes
   - `[style]` Changes that do not affect the meaning of the code (formatting, etc.)
   - `[refactor]` Code changes that neither fix a bug nor add a feature
   - `[perf]` Changes that improve performance
   - `[test]` Adding missing tests or correcting existing tests
   - `[build]` Changes that affect the build system or external dependencies
   - `[ci]` Changes to CI configuration files and scripts
   - `[chore]` Maintenance changes that do not fall into any of the other categories

### 5️⃣ Correr el proyecto localmente

- Garantiza que el proyecto se ejecute correctamente después de hacer los cambios.
- Sigue las instrucciones específicas del proyecto para probar los cambios localmente.

### 6️⃣ Empuja tus cambios

- Empuja tus cambios a tu repositorio forkeado:

   ```bash
   git push origin your-branch-name
   ```
   > - Reemplazar `your-branch-name` con el nombre de tu rama.

### 7️⃣ Crea un Pull Request (PR)

- Navegar a tu repositorio forkeado en GitHub.
- Haga clic en **New Pull Request** y seleccione tu rama para fusionar con la rama `main` del repositorio original.

## 📝 Notas adicionales

- Garantiza que tu código siga las convenciones de estilo y la documentación del proyecto. 🧹
- Asegurate de correr los tests y verificar que los pasen. 🙏
- Escribe tests en caso de que aplique. 🧪

Gracias por ser parte de este proyecto de Verificación y Validación de Software. 💪
Gracias por esfuerzo y tiempo. 🤝
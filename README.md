# Mcqueen Cars

Este es un proyecto para la venta de automóviles, desarrollado como parte de un curso de Verificación y Validación de Software.

## Prerequisitos

Para ejecutar este proyecto localmente, necesitas tener lo siguiente instalado:

1. **Docker**:
   - Docker es necesario para ejecutar la aplicación y servicios en contenedores aislados.
   - Instala Docker desde el [sitio oficial de Docker](https://www.docker.com/get-started).

2. **Node.js y npm**:
   - Requerido para ejecutar pruebas de Jest o cualquier tarea relacionada con JavaScript.
   - Descarga e instala desde [Node.js](https://nodejs.org/).

3. **Composer**:
   - Un administrador de dependencias para PHP, usado para gestionar bibliotecas del proyecto.
   - Instala Composer desde [getcomposer.org](https://getcomposer.org/).

4. **Sonar Scanner**:
   - Descarga el CLI de Sonar Scanner desde el [sitio oficial](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/).

5. **PHPUnit**:
   - PHPUnit se usa para pruebas unitarias en PHP. Las dependencias ya están configuradas en el archivo `composer.json`.
   - Se instalará automáticamente al ejecutar `composer install`.

---

## Estructura del proyecto

```plaintext
mcqueen/
├── backend/               # Código fuente del backend (basado en PHP)
├── frontend/              # Código fuente del frontend
├── tests/                 # Casos de prueba para el proyecto
├── docker-compose.yaml    # Docker configuration file
├── composer.json          # Configuración del administrador de dependencias PHP
├── jest.config.js         # Configuración de Jest para pruebas del frontend
├── phpcs.xml              # Configuración de PHP CodeSniffer
├── sonar-project.properties # Configuración de SonarQube
└── README.md              # Documentación del proyecto
```

---

## Instrucciones de configuración

### 1. Realiza un fork del repositorio

### 2. Clona el repositorio
```bash
git clone https://github.com/salazarsebas/mcqueen.git
cd mcqueen
```

### 3. Inicia los contenedores de Docker
Asegúrate de que Docker esté corriendo, luego usa el siguiente comando:
```bash
docker-compose up --build
```

Esto hará:
- Construye y inicia los servicios del backend y frontend.
- Expone la aplicación en los puertos especificados (ver `docker-compose.yaml` para detalles).

---

## Ejecutar pruebas

### 1. Pruebas de Jest (Frontend)
Jest se usa para probar JavaScript/TypeScript en el directorio `frontend/`. Ejecuta los siguientes comandos:
```bash
npm install
npm test
```

### 2. PHP CodeSniffer (PHPCS)
PHP CodeSniffer se usa para analizar y corregir violaciones de estilo de código PHP en el directorio `backend/`. Ejecuta:
```bash
composer install
composer phpcs backend/
```

Para corregir automáticamente problemas de estilo de código:
```bash
composer phpcbf backend/
```

### 3. Pruebas de PHPUnit (Backend)
PHPUnit se utiliza para pruebas unitarias en el backend. Para ejecutar las pruebas:
```bash
vendor/bin/phpunit backend/tests/Test.php
```

### 4. Análisis de estilo con ESLint (Frontend)
ESLint analiza el código fuente del frontend para garantizar el cumplimiento de buenas prácticas. Ejecuta:
```bash
npm run lint
```

### 5. Análisis de SonarQube
1. Asegúrate de que SonarQube esté corriendo localmente o en un servidor (predeterminado: `http://localhost:9000`):
   ```bash
   docker run -d --name sonarqube -p 9000:9000 sonarqube
   ```

2. Ejecuta el escaner de Sonar:
   ```bash
   sonar-scanner
   ```

---

## Notas de desarrollo

- **Backend**:
  - Las dependencias PHP se gestionan mediante Composer. Ejecuta `composer install` antes de comenzar el desarrollo del backend.

- **Frontend**:
  - Las dependencias de Node.js se gestionan mediante `npm`. Ejecuta `npm install` en el directorio raíz antes de comenzar el desarrollo del frontend.

- **Testing**:
  - Agrega nuevos casos de prueba al directorio `tests/` para ambos backend y frontend.

---

## Problemas y depuración

1. **Problemas con Docker**:
   - Si los servicios no se inician, revisa los logs:
     ```bash
     docker-compose logs
     ```

2. **Problemas con PHPCS**:
   - Asegúrate de que las rutas en `phpcs.xml` sean correctas y que las dependencias se instalen con Composer.

3. **Problemas con SonarQube**:
   - Si la autenticación falla, asegúrate de que tu token de Sonar esté correctamente configurado en `sonar-project.properties`.

---

## Comandos adicionales

### Detener contenedores de Docker
```bash
docker-compose down
```

### Reconstruir contenedores de Docker
```bash
docker-compose up --build
```






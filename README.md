# mcqueen Cars

## About

Este es un sitio web sobre una venta de automóviles. Para el proyecto de Verificación y Validación de Software.

## Analisis de codigo

Este proyecto usa [PHP CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) para la verificación de codigo.

### Ejecutar PHPCS localmente
```bash
composer phpcs backend/
```

## Analisis de codigo con SonarQube

### Ejecutar localmente
1. Asegurate que SonarQube esté corriendo (ejecutando Docker).
2. Ejecuta el escaner de Sonar:
   ```bash
   sonar-scanner
   ```

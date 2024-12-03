# Etapa de construcción de React
FROM node:18 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY ./frontend/package.json ./frontend/package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código fuente de frontend
COPY ./frontend ./

# Construir la aplicación de React
RUN npm run build  # Esto generará la carpeta dist en lugar de build

# Etapa de Nginx para servir los archivos estáticos
FROM nginx:alpine

# Copiar los archivos generados en la etapa de construcción (dist) a la carpeta pública de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

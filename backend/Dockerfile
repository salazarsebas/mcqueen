# Paso 1: Imagen base de PHP con Apache
FROM php:8.2-apache

# Paso 2: Instalar dependencias necesarias para PHP (si se requiere)
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd

# Paso 3: Habilitar mod_rewrite para Apache (si se necesita)
RUN a2enmod rewrite

# Paso 4: Establecer el directorio de trabajo en el contenedor
WORKDIR /var/www/html

# Paso 5: Copiar el código PHP al contenedor
COPY ./backend /var/www/html/

# Exponer el puerto 80 en el contenedor para acceder al backend
EXPOSE 80

# Comando para iniciar Apache en primer plano
CMD ["apache2-foreground"]

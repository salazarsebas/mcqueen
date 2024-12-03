# Paso 1: Imagen base de PHP con Apache
FROM php:8.2.13-apache

# Paso 2: Instalar dependencias necesarias para PHP (si se requiere)
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    libzip-dev \
    unzip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd zip pdo pdo_mysql \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Paso 3: Habilitar mod_rewrite para Apache (si se necesita)
RUN a2enmod rewrite

# Add custom Apache configuration
COPY ./backend/apache.conf /etc/apache2/sites-available/000-default.conf
RUN echo "ServerTokens Prod" >> /etc/apache2/apache2.conf \
    && echo "ServerSignature Off" >> /etc/apache2/apache2.conf

# Paso 4: Establecer el directorio de trabajo en el contenedor
WORKDIR /var/www/html

# Paso 5: Copiar el código PHP al contenedor
COPY ./backend/composer.* ./
RUN composer install --no-dev --optimize-autoloader
COPY ./backend/src/ /var/www/html/

# Create non-root user
RUN useradd -r -u 1000 webuser \
    && chown -R webuser:webuser /var/www/html

# Exponer el puerto 80 en el contenedor para acceder al backend
EXPOSE 80
# Switch to non-root user
USER webuser

# Add health check
HEALTHCHECK --interval=30s --timeout=3s \
    CMD curl -f http://localhost/ || exit 1

# Comando para iniciar Apache en primer plano
CMD ["apache2-foreground"]

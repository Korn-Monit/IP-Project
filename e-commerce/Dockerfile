# Use the official PHP image with Apache as the base image
FROM php:8.1-apache

# Set the working directory to /var/www/html
WORKDIR /var/www/html

# Copy the application files to the container's working directory
COPY . .

# Install PHP extensions required for Laravel
RUN docker-php-ext-install pdo pdo_mysql

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install project dependencies using Composer
RUN composer install

# Set the appropriate permissions for Laravel
RUN chown -R www-data:www-data storage bootstrap/cache

# Expose port 80 for Apache
EXPOSE 80

# Start the Apache web server
CMD ["apache2-foreground"]
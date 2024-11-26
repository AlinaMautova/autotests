# Установка Nginx

1. Обновите пакеты:
   ```bash
   sudo apt update
2. Установите Nginx:
   sudo apt install nginx -y
3. Настройка HTML-страницы:
	3.1 Создайте файл index.html:
	    <!DOCTYPE html>
	    <html lang="en">
	    <head>
		    <meta charset="UTF-8">
		    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   	    <title>Hello</title>
	    </head>
	    <body>
    		    <h1>Hello, DevOps World!</h1>
	    </body>
	    </html>	
	3.2 Сохраните файл в /var/www/html/.
4. Перезапуск Nginx
   sudo systemctl restart nginx

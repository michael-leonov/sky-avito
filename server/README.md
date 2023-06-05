# Запуск бэкенда

Для запуска бэкенда потребуется docker и docker-compose.

1. Перейти в директорию с сервером:

```sh
cd server
```

2. Запустить бэкенд:

```sh
docker-compose -f docker-compose-backend.yaml up -d
```

Бэкенд и документация в Swagger GUI будут доступны по адресу: `http://localhost:8090/`

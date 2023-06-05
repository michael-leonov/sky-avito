# sky-avito

## Описание проекта

Сайт-аналог "Авито"

Макет доступен по [ссылке](https://www.figma.com/file/ISqzPS7Sym7V004jFo5buE/%D0%A1%D0%B0%D0%B9%D1%82-%D0%B0%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3-%D0%90%D0%B2%D0%B8%D1%82%D0%BE?node-id=0-1&t=ODYlPjsiGCB8E2Yi-0)

### Функционал

1. Реализована логика поведения незарегистрированного пользователя:

   - [x] Возможность поиска товаров по ключевым словам
   - [x] Просмотр объявления
   - [x] Просмотр профиля продовца
   - [x] Возможность оставлять комментарии
   - [x] Возможность получать номер телефона продавца

2. Реализован функционал регистрации и аутентификации пользователя

3. Реализована логика поведения зарегистрированного пользователя:

   - [x] Смена имени, фамилии, города, телефона, аватарки
   - [x] Добавление объявления
   - [x] Возможность снять объявление с публикации
   - [x] Редактирование объявления
   - [x] Добавление отзывов о товаре

## Запуск приложения

### Запуск в development mode

Склонируйте репозиторий

#### Запуск бэкенда

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

#### Запуск фронденда

1. Перейти в директорию с клиентом:

```sh
cd client
```

2. Установите зависимости:

```sh
npm i
```

3. Создайте в директории с клиентом файл **.env** и настройте переменные окружения из файла **.env.example**

4. Запустите фронтенд командой:

```sh
npm run start
```

Приложение доступно по: [http://localhost:3000](http://localhost:3000)

## Технический стек приложения

1. [React](https://ru.reactjs.org/)
2. [Redux Toolkit](https://redux-toolkit.js.org/) + [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
3. [React Router DOM](https://reactrouter.com/en/main)
4. [styled-component](https://styled-components.com/)
5. [react-hook-form](https://react-hook-form.com/)
6. [react-loader-spinner](https://mhnpd.github.io/react-loader-spinner/)

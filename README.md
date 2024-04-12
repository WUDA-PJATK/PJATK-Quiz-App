# PJATK-Quiz-App

## 1. Full App
To run full aplication, run:
```
docker compose up
```

## 2. Frontend
To run docker frontend (next.js) container run:
```
docker build frontend ./frontend
docker container run -p 3000:3000 frontend 
```

## 3. Backend
To run docker springBoot container run:
```
docker build backend ./quizAppBackend
docker container run -p 8080:8080 backend 
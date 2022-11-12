# YuGiOh-Database-Crawler

## 소개
유희왕 카드 DB를 크롤링하여 카드의 정보를 알려주는 API입니다.

## 기능
- 유희왕 카드 데이터 조회 기능

## 개발 현황
-[ ] puppeteer 및 cheerio를 사용한 크롤링 API 개발
-[ ] Dockerfile을 통한 컨테이너 배포 환경 구성

## 개발 환경 구축

1. .env 파일 생성
2. .env.example의 내용을 .env로 복사
3. 환경 변수 설정

```bash
# 의존성 설치
$ npm install
```

## 실행

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# docoker를 사용하는 경우
$ docker-compose up

$ docker-compose down
```

## 이슈
> docker를 이용한 가상 환경에서 puppeteer를 정상 구동할 수 없음.
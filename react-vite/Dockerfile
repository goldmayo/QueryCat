# 가져올 이미지를 정의
FROM node:18 AS development
# 경로 설정하기
WORKDIR  /usr/src/app
# package.json 워킹 디렉토리에 복사 (.은 설정한 워킹 디렉토리를 뜻함)
COPY --chown=node:node package*.json ./
# COPY --chown=node:node vite.config.js ./

# 명령어 실행 (의존성 설치)
RUN npm i
# 현재 디렉토리의 모든 파일을 도커 컨테이너의 워킹 디렉토리에 복사한다.
COPY --chown=node:node . .

EXPOSE 3001

USER node
# 각각의 명령어들은 한줄 한줄씩 캐싱되어 실행된다.
# package.json의 내용은 자주 바뀌진 않을 거지만
# 소스 코드는 자주 바뀌는데
# npm install과 COPY . . 를 동시에 수행하면
# 소스 코드가 조금 달라질때도 항상 npm install을 수행해서 리소스가 낭비된다.

# $ docker build .


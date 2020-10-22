# docker-compose

## 멀티 컨테이너 실행시 및 컨테이너간 연결시 docker-composne 를 이용함

- 컨테이너 호스트 연결시에 http://~url 형식이 아닌 컨테이너명을 명시해 주면 호스트 연결이 가능하다
- ex

  ```js
  // 레디스 클라이언트 생성
  const client = redis.createClient({
    // 컨테이너간 호스트 연결시에는 컨테이너 이름을 명시해 주어야 연결이 된다.
    host: 'redis-server',
    port: 6379
  });
  ```

- docker-compose 를 사용에 필요한 yml 파일을 만들어야 한다.
  - ex

  ```yml
  version: "3"          # 버전명시
  services:             # 컨테이너 서비스들을 하위에 명시
    redis-server:       # 컨테이너명
      image: "redis"
    node-app:           # 컨테이너명
      build: .          # Dockerfile 의 경로
      ports:            # port 매핑
        - "5000:8080"
  ```
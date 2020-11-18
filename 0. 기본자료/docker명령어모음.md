# Docker 명령어 모음

## `# 컨테이너`

### `1. 모든 컨테이너 삭제`

- power shell
  
  ```bash
  docker ps -a -q | % { docker rm $_ -f }
  ```

- linux

  ```bash
  docker rm -vf $(docker ps -a -q)
  ```

### `2. 컨테이너 리스트`



## `# 이미지`

### `1. 이미지 삭제`

> 모든 이미지 삭제

- power shell

  ```bash
  docker images -a -q | % { docker rmi $_ -f }
  ```

- linux

  ```bash
  docker rmi -f $(docker images -a -q)
  ```

> 사용하지 않는 이미지 삭제
  
- 기본
  
  ```bash
  docker image prune
  ```

- 멈춘지 24시간이 지난 컨테이너 제거
  
  ```bash
  docker container prune --filter "until=24h"
  ```

> 전체 이미지 제거

  ```bash
  docker image prune -a
  ```

### `2. 이미지 검색`
  
- 기본
  
  ```bash
  docker images
  ```

- blue 이름이 포함된 이미지 전체 출력
  
  ```bash
  docker images --filter=reference="blue/*"
  ```
  
- blue 이름이 포함된 이미지 ID만 출력
  
  ```bash
  docker images --filter=reference="blue/*" -q
  ```

### `3. 이미지 세부정보 확인`
  
  ```bash
  docker image inspect <이미지명>
  ```

### `4. 이미지 태그 설정`

  ```bash
  docker image tag <기존이미지명>:[태그명] <Docker Hub 사용자명>/<이미지명>:[태그명]
  ```

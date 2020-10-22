const express = require('express');
const redis = require('redis');

// 레디스 클라이언트 생성
const client = redis.createClient({
  // 컨테이너간 호스트 연결시에는 컨테이너 이름을 명시해 주어야 연결이 된다.
  host: 'redis-server',
  port: 6379
});

const app = express();

// 숫자 0부터 시작
client.set('number', 0);

app.get('/', (req, res) => {
  client.get('number', (err, number) => {
    // 현재 숫자를 가져와 1씩 증가
    client.set('number', parseInt(number, 10) + 1);

    res.send('숫자가 1씩 증가합니다. 숫자:' + number);
  })
})

app.listen(8080, () => {
  console.log('server is running 8080!');
});
function hello(){
    alert('hello world!');
}
function printMultiplicationTable(x) {

  for (let i = 2; i <= x; i++) { // 구구단의 2단부터 9단까지 반복
    console.log(`${i}단`);
    for (let j = 1; j <= 9; j++) { // 해당 단의 1부터 9까지 곱한 결과를 출력
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('\n'); // 각 단 사이에 공백 줄 추가
  }
}
function rollDice() {
    console.log(Math.floor(Math.random() * 6) + 1);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

printMultiplicationTable(3);

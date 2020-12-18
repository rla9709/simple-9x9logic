# simple-9x9logic
가장 간단하면서 for문을 이해하기 쉬운 구구단 만들기.



우선 구조를 먼저 생각해야 한다.

첫번째. 버튼을 만든다.

두번째. 버튼을 누르면 아래에 구구단이 쭉 나온다.



첫번째. HTML 작성하기

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>구구단 만들기</title>
    <link rel="stylesheet" href="./index.css" />
  </head>
  <body>
    <button class="btn">눌러주세요</button>
    <div class="test_container"></div>
    <script src="./index.js"></script>
  </body>
</html>
우선 button태그를 하나 만들고 'btn'이라는 클래스를 주고 

아래에 빈 div태그를 만들어서 'test_container'클래스를 주었다.

(div태그는 구구단이 입력될 칸을 미리 만들어 놓은것)



두번째, 자바스크립트

function gugudan() {
  for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      document.querySelector(
        ".test_container"
      ).innerHTML += `<div>${i}*${j} = ${i * j} `;
    }
  }
}

document.querySelector(".btn").onclick = function () {
  gugudan();
};
우선  gugudan이라는 funtion을 만들고 

그안에 for 반복문을 사용해서 다음과 같이 설정한다. 

i 는 앞의 숫자, j 는 뒤의 숫자 이다.

이 둘에 9까지의 제한을 주고 반복시키면 우리가 아는 구구단 공식이 완성된다.



쿼리셀럭터를 이용해 아까 div태그에 지정해줬던 클래스인 test_container를 불러와 div 구간안에 

구구단의 식을 넣어주는 함수를 만든것



그리고 button을 누르면 위의 함수가 실행 되게끔 함수를 실행 시켜 주면 된다.

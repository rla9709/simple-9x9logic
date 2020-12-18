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

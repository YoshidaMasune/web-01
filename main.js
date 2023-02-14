const colors = ["green", "red", "rgb(123,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('#color-code');

btn.addEventListener('click', function() {
  const randomNumber = getrandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber]
})

function getrandomNumber() {
  return Math.floor(Math.random() * colors.length)
}
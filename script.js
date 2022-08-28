count = 0;
let entry = document.getElementById("entries");
let number = document.getElementById("amount");
function increment()
{
count++;
number.innerText = count;
}
function save()
{
entry.textContent += count + " - ";
count = 0;
number.innerText = count;
}
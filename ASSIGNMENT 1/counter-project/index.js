const count = document.querySelector('.display')
const minusBtn = document.querySelector('.minus-btn')
const plusBtn = document.querySelector('.plus-btn')
const changeBy = document.querySelector('.changeBy')
const resetBtn = document.querySelector('.reset-btn')
changeBy.value=parseInt(changeBy.value);
minusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue - changeByValue
})

plusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue + changeByValue
})

resetBtn.addEventListener('click', () => {
    count.innerText = 0;
})
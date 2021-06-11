
document.addEventListener('keydown', (e) => {
    if (e.which === 13) {
        fun()
    }
})

function fun() {
    low = document.getElementById('entryVal_a').value;
    high = document.getElementById('entryVal_b').value;

    if (low === '' || high === '') {
        alert('請輸入範圍')
    }

    document.getElementById('outVal').innerHTML = narcissisticScope(low, high)
}

function isNarcissistic(number) {
    let digits = [];
    let num = number;
    let sum = 0; //每個位數的次方之總和，最後會和 num 比較是否相同

    while (num != 0) {
        digits.push(num % 10);
        num = parseInt(num / 10)
    }
    for (let i = 0; i < digits.length; i++) {
        sum += Math.pow(digits[i], digits.length)
    }
    return sum === number
}

function narcissisticScope(low, high) {
    let armstrongs = [];
    // let bound = Math.pow(5, n <= 10 ? n : 9)
    for (let i = low; i < high; i++) {
        if (isNarcissistic(i)) {
            armstrongs.push(i)
        }
    }
    return armstrongs;
}

console.log(narcissisticScope(1, 1000));


//找出三位數的阿姆斯壯數


function isNarcissistic_a(number) {
    let digits = [];
    let num = number;
    let sum = 0; //每個位數的次方之總和，最後會和 num 比較是否相同

    while (num != 0) {
        digits.push(num % 10);
        num = parseInt(num / 10)
    }
    for (let i = 0; i < digits.length; i++) {
        sum += Math.pow(digits[i], digits.length)
    }
    return sum === number
}

function narcissistic(n) {
    let armstrongs = [];
    let bound = Math.pow(10, n < 40 ? n : 39)
    for (let i = 0; i < bound; i++) {
        if (isNarcissistic_a(i)) {
            armstrongs.push(i)
        }
    }
    return armstrongs
}
document.getElementById('armstrong').innerHTML = narcissistic(3)

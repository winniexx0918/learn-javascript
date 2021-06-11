
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

    document.getElementById('outVal').innerHTML = narcissistic(low, high)
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

function narcissistic(low, high) {
    let armstrongs = [];
    // let bound = Math.pow(5, n <= 10 ? n : 9)
    for (let i = low; i < high; i++) {
        if (isNarcissistic(i)) {
            armstrongs.push(i)
        }
    }
    return armstrongs;
}

console.log(narcissistic(1, 1000));
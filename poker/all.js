//先初始化撲克牌
var suit = ["clubs", "hearts", "diamonds", "spades"];
var number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var poker = [];

//將玩家人數分別存成陣列arr[[],[],...]
var playerCards = [];
var pokerArea = document.getElementById("pokerArea");


$(document).ready(function () {
    for (let i = 0; i < suit.length; i++) {
        for (let j = 0; j < number.length; j++) {
            let item = [suit[i], number[j]];
            poker.push(item);
        }
    }
});


//洗牌
function shuffle(a, b) {
    let num = Math.random() > 0.5 ? -1 : 1;
    return num;
};

function checkedFun() {
    //清空前一次
    pokerArea.innerHTML = "";
    if (document.getElementById('isSort').checked) {
        playerCards.map((item, index, arr) => {
            console.log(item);
            playerCards[index].sort();
            let div = document.createElement("div");
            for (let i = 0; i < arr[index].length; i++) {
                let img = document.createElement("img");
                img.src = arr[index][i][0] + "/" + arr[index][i][1] + ".gif"
                div.appendChild(img);
                console.log(img);
            }
            console.log(div);
            pokerArea.appendChild(div);
        })
    };
console.log(playerCards);
}
//發牌觸發事件
function deal() {
    pokerArea.innerHTML = "";

    //先洗牌
    poker.sort(shuffle);

    let checkedVal = document.querySelectorAll("input[name='players']")
    let getPlayersVal;

    //取得玩家數量
    for (let i = 0; i < checkedVal.length; i++) {
        if (checkedVal[i].checked) {
            getPlayersVal = checkedVal[i].value
        }
    }
    // pokerArea.innerHTML = "";
    //把玩家數量轉為個別陣列
    for (let j = 0; j < getPlayersVal; j++) {
        playerCards[j] = [];
    }
    //發牌，將牌組依序分給每位玩家
    for (let i = 0; i < poker.length; i++) {
        let x = i % getPlayersVal;
        playerCards[x].push(poker[i]);
    }


    //動態產生DOM
    for (let j = 0; j < getPlayersVal; j++) {
        //依花色排序
        if (document.getElementById('isSort').checked) {
            playerCards[j].sort()
        };
        let div = document.createElement("div");
        for (let i = 0; i < playerCards[j].length; i++) {
            let img = document.createElement("img");
            img.src = playerCards[j][i][0] + "/" + playerCards[j][i][1] + ".gif";
            div.appendChild(img);
        }
        pokerArea.appendChild(div);
    }
}
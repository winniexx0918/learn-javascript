//抓到印出得值
function getHistoryNumber(){
    return document.getElementById('history_value').innerText;
}
//印出在頁面上(顯示)
function printHistoryNumber(num){
    document.getElementById('history_value').innerText=num;
}
function getOutput(){
    return document.getElementById('output_value').innerText;
}
//如果不是空字串，就會使用getCommaNumber()方法使每三位數加上","。
function printOutput(num){
    if(num==''){
        document.getElementById('output_value').innerText=num;
    }else{
        document.getElementById('output_value').innerText=getCommaNumber(num);
    }
}
// 將數字格式化，使整數部分每三位加一個逗號，toLocaleString()
// 先將num轉換為數字，Number()
function getCommaNumber(num){
    if(num=='-'){
        return '';
    }//如果為負值，返回空字串。
    var n = Number(num);
    var changeValue = n.toLocaleString();
    return changeValue;
}
// printOutput('999444999')

//把印出的字串(數字)，","拿掉變數字，才能改變型別。
// replace()方法用來將字串中的字取代為另一個字，g全部。
function replaceNumber(num){
    return Number(num.replace(/,/g,''));
}
// console.log(replaceNumber(getOutput()))

//按符號
var operator = document.getElementsByClassName('operator');
// console.log(typeof(operator)) 物件
// console.log(Object.keys(operator)) ES2015取物件長度之方法
for(i=0; i<operator.length; i++){
    operator[i].addEventListener('click',function(){
        // console.log(this.id)
        if(this.id=='clear'){
            printHistoryNumber('');
            printOutput('')
        }else if(this.id=='backspace'){
            var output = replaceNumber(getOutput()).toString();
            if(output){
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }else if(this.id=='percentage'){
            var output = replaceNumber(getOutput());
            if(output){
                output = output/100;
                printOutput(output);
            }
        }
        else{
            var output = getOutput();
            var history = getHistoryNumber();
            if(output=='' && history!=''){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0,history.length-1)
                }
            }
            if(output!='' || history!=''){ //如果output不等於空字串
                //用三元運算子 condition?true:false
                output = output==''? output : replaceNumber(output);
                history = history+output;
                if(this.id=='='){
                    var result = eval(history);
                    printOutput(result);
                    printHistoryNumber('')
                }else{
                    historynum = history+this.id;
                    printHistoryNumber(historynum);
                    printOutput('')
                }
            }
        }
    });
}
//按數字
var number = document.getElementsByClassName('number');
for(i=0; i<number.length; i++){
    number[i].addEventListener('click',function(){
        // console.log(this.id)
        var output = replaceNumber(getOutput());
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    })
}
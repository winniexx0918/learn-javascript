### 【簡易計算機練習】

##### num為字串

##### toLocaleString()
    將數字格式化，使整數部分每三位加一個逗號，toLocaleString()
  <br />
##### replace()
    把印出的字串(數字)，","拿掉變數字，才能改變型別。
    replace()方法用來將字串中的字取代為另一個字，g全部。
    replaceNumberNumber(num)

    ex:
    var str="Visit Microsoft!"
    document.write(str.replace(/Microsoft/, "W3School"))
    print: Visit W3School!
   <br />

##### 符號
    operator，是陣列
   <br />

##### addEventListener()
    綁定事件
   <br />

##### toString()
    將數字轉換為字符串
   <br />

##### substr()
    String.substr( Start , Length )

    Start - 就是要擷取的起始位置，必須項目，若為 0 則代表從第一個字符開始擷取，
    若為負數，則從字串最尾端字符開始往左計算出起始位置，最尾字符從 1 開始算，
    也就是 -1 代表最後一個字符，-2 代表倒數第二個字符，以此類推。

    Length - 要擷取的字串長度，非必要項目，如果沒有設定或長度超過字串的長度，
    則 substr 會從 Start 位置開始擷取至字串最尾端。

    註一：空白字元也會算為一個字符。
    註二：substr 返回一個全新的字串，不影響原本的字串內容。
   <br />

##### object.length
    取得物件(object)的長度
    用迴圈來取
   <br />

##### Object.keys(operator)
    ES2015取物件長度之方法
   <br />

##### eval() 的参數是一个字符串，可以自動為算術表達式求值。
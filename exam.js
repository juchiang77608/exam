// 	Challenge #1
function getMiddle(str) {
    // 先判斷奇數偶數
    const result = (str.length % 2 === 0) ? 'even' : 'odd';
    // 再取偶數中間值
    const evenResult = ((str.length / 2) + (str.length / 2 - 1)) / 2;
    if (result === 'odd') {
        console.log(str.slice(0, 1));
        return str.slice(0, 1);
    } else {
        return str.substr(evenResult, 2);
    }
}
// 	Challenge #2
function lookSay(number) {
    console.log('number', number);
    let result = ''; // 定義結果
    let text = number.toString().split(''); // 數字轉字串分割空白
    let targetText = text[0]; // 取數字轉字串後的第一個字
    let count = 0; // 計數
    text.forEach((t, index) => {
        // 假設當前字等於目標字的話 計數就加一
        if (t === targetText) {
            count++;
            console.log('true:', result);
        } else {
            // 重複字每輪的結果
            result += count.toString() + targetText;
            // 重設
            targetText = t;
            count = 1;
        }
        // 當數完的時候，把上面的結果再加起來
        if (index == text.length - 1) {
            result += count.toString() + targetText;
        }
    });
    return result;
}
// 	Challenge #3
function firstNonRepeatingLetter(str) {
    for (var i = 0; i < str.length; i++) {
        let char = str[i];
        // 比對文字
        let strCount = (str.match(new RegExp(char, "gi")) || []).length;
        // 假設這個字為第一個不重複的字，就計算結束
        if (strCount == 1) {
            return char;
        }
    }
    return '';
}
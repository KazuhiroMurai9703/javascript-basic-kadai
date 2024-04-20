const today = new Date();
let year = today.getFullYear().toString().padStart(4, '0');
let month = (today.getMonth() + 1).toString().padStart(2, '0');
let day = today.getDate().toString().padStart(2, '0');


// 実行時間 YYYY年MM月DD日
console.log( year + "年"+ month + "月"+ day + "日");





// 変数宣言
let num ;

// 変数に代入
//num = 99 ;　// 3の倍数。でも5の倍数ではない。
//num = 100 ; // 5の倍数。でも3の倍数ではない。
num = 105 ;  // 3と5の倍数。
//num = 98 ;　// 3の倍数でも5の倍数でもない。

if( num % 3 == 0 && num % 5 == 0 )
{
 console.log('3と5の倍数です');
}
else if( num % 3 == 0 )
{
 console.log('3の倍数です');
}
else if( num % 5 == 0 )
{
 console.log('5の倍数です');
}
else if ( num % 3 != 0 && num % 5 != 0)
{
 console.log( num );
}


var str='',freestr='';
var total=0,save=0;	
function FreeStrHandle(freeitemcount)
{	
	if(IfPromotion(item[freeitemcount].barcode,buycount))
	{	
		freecount++;
		freestr+='名称：'+item[freeitemcount].name+'，数量：'+freecount+item[freeitemcount].unit+'\n';
		save+=parseFloat(item[freeitemcount].price);
	}
}

function TotalStrHandle(totalitemcount)
{
	if(0!=buycount)
	{
		str+='名称：'+item[totalitemcount].name+
		'，数量：'+buycount+item[totalitemcount].unit+
		'，单价：'+item[totalitemcount].price.toFixed([2]) +'(元)，小计：'+
		(item[totalitemcount].price*(buycount-freecount)).toFixed([2])+'(元)\n';			
		total+=parseFloat(item[totalitemcount].price*(buycount-freecount));									
	}	
}

function dateDigitToString(num)
{	
    return num < 10 ? '0' + num : num; 
}

function StrTime()
{
	var currentDate = new Date(),
    year = dateDigitToString(currentDate.getFullYear()),
    month = dateDigitToString(currentDate.getMonth() + 1),
    date = dateDigitToString(currentDate.getDate()),
    hour = dateDigitToString(currentDate.getHours()),
    minute = dateDigitToString(currentDate.getMinutes()),
    second = dateDigitToString(currentDate.getSeconds()),
    formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
        
    str+='***<没钱赚商店>购物清单***\n' + '打印时间：' + formattedDateString + '\n'+'----------------------\n';
}

function ConsoleStr()
{		
	str+='----------------------\n挥泪赠送商品：\n'+freestr+'----------------------\n'
	+'总计：'+total.toFixed([2])+'(元)\n'
	+'节省：'+save.toFixed([2])+'(元)\n'+'**********************';		
	console.log(str);
}
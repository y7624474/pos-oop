//TODO: Please write code in this file.
var item = loadAllItems();	
var buycount=0,freecount=0;		//记录商品购买数目和活动商品数目
function printInventory(inputlist)
{		
	StrTime();
	for (var itemcount=0;itemcount<item.length;itemcount++)    //依次与loadAllItems()里的六种商品比较
	{
		buycount=0;	
		freecount=0;	
		CompareInput(inputlist,itemcount);
		FreeStrHandle(itemcount);
		TotalStrHandle(itemcount);	
	}
	ConsoleStr();
}

function CompareInput(inputlist,itemcount)
{
	for (var inputcount=0;inputcount<inputlist.length;inputcount++)			//依次与input商品清单比较
		{
			var index=inputlist[inputcount].indexOf('-');	//判断并取出商品数量
			if(-1!=index&&(inputlist[inputcount].substring(0,index)=='ITEM00000'+itemcount))
			{
				buycount=inputlist[inputcount].substring(index+1);				
			}
			if(inputlist[inputcount]=='ITEM00000'+itemcount)
			{
				buycount++;					
			}					
		}
}


function FreeList()
{
	var promotion=loadPromotions();   
	for(ifree=0;ifree<promotion.length;ifree++)
	{
		if(promotion[ifree].type='BUY_TWO_GET_ONE_FREE')
		var free=promotion[ifree].barcodes;		
	}
	return free;
}

function IfPromotion(inputbarcodes,count) 
{
	var freelist=FreeList();
	for (var j = 0; j < freelist.length; j++)
	{
		if (count>1&&freelist[j].indexOf(inputbarcodes) > -1)
		{
			return true;						
		}
	}
}
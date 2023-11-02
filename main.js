function food(name,price,order){
	return order(name,price);
}
food("Pizza","120",order);

function order(name,price){
	setTimeout(()=>{
	document.write(`Order the ${name}<br>`);
	},1000);
	
	setTimeout(()=>{
	document.write(`Preparing the ${name}<br>`);
	},2000);
	
	setTimeout(()=>{
	document.write(`Your food is ${name} Prize in ${price}<br>`);
	},3000);
	
	setTimeout(()=>{
	document.write(`Food delivery in successfully`);
	},6000);
}








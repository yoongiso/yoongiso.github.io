function sayName(){
	var responseOne = prompt("嘿，你叫什么名字？")
	alert("嗨," + responseOne + ",现在来帮丽萨找小狗吧！");
var obeject=["白云","郁金香","泰迪熊玩具","水晶球"];
var objectDetails = [
	{name:"白云",
	color:"white"},
	{name:"郁金香",
	color:"pink"},
	{obeject:"泰迪熊玩具",
	name:"brown"},
	{obeject:"水晶球",
	name:"bule"}
];
alert("猜猜丽萨的小狗伪装成以下哪样物品了呢？");
var responseTwo = prompt("白云 "+" 郁金香 "+" 泰迪熊玩具 "+" 水晶球");
if (responseTwo === "白云"){
	alert("恭喜！你成功抓到小狗啦")
	 }
  else{
	 alert("你没有找到小狗，再试一次吧")
	 }
};

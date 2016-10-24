/*document.getElementById('myBtn').onclick= function(){
	document.getElementById('light').src='img/eg_bulbon.gif'
	document.getElementById('myBtn').innerHTML='关灯';
	document.getElementById('myBtn').className='bg-red'	
}*/
/*
var x= 1;
var y= 2;

x=5;

var z= x + y;*/
//var sar='hello worid';

/*小于12   儿童
  12到18   少年
  18到30   青年
  30到50   中年
    大于50   老年
 */

/*var agr=30;

if(agr<12){
	console.log('儿童');
}else if(agr>12 && agr<=18){
	console.log('少年');
}else if(agr>18 && agr<=30){
	console.log('青年');
}else if(agr>30 && agr<=50){
	console.log('中年');
}else{
	console.log('老年');
}
*/
/*
var total=0;

for( var i=1; i<=100; i++){
	total+=i;
	
}
	console.log(total);	*/
//	For循环
/*
var sum=0;

for(var i=0;i<=100;i++){
//	console.log(i);
    if(i%2==0){
    	sum+=i;
    }
}
document.write(sum)
*/
/*var sum=0;
for(var i=1; i<=100; i+=2){
	/*if(i%2==0){
		continue;
//		break;
	}
		sum+=i;   
}
console.log(sum);*/
/*	function step(){
			for(i=1;i<=9;i++){
					for(j=1;j<=i;j++){
							document.write(i+"x"+j+"="+i*j +" ");
						}document.write("<br/>")
				}	
		}*/

//while循环
/*var i=0;
while(i<=10){
	console.log(i);
		i++;
}*/
// continue（跳过当前执行下一个循环） 与break（跳出循环） 的区别
/*for(var i=0; i<=10; i++){
	if(i==5){
//		continue;
		break;
	}
    console.log(i);
}*/

//字符串lenght属性
/*var str="abcdefg"

console.log(str.length);*/

//字符串截取字符串方法substr与substring的区别
/*var str="abcdefg"

str=str.substr(1,4);
str=str.substring(1,4);

console.log(str);*/

//练习
/*var imgUrl = 'img/abc/def.rmvb';

var ext = '';

ext = imgUrl.substring(imgUrl.lastIndexOf('.'));

console.log(ext);*/

//如何判断一个字符串以a开头，以a结尾
/*var x=false;
var i='asdwkjkfkaskla';

x=i.indexOf('a')==0;

if(x){"a在开头"
	
} else{"a不在开头"

}

console.log(x);*/

/*var i='asdwkjkfkaskla';

if(i.lastIndexOf('a')==i.length-1){
	alert("该字符以a结尾");
	
} else{
	alert("该字符不以a结尾");
}*/

//小数点后保留几位
/*var f=1.25465678;

f=f.toFixed(3);
console.log(f);
*/

//电子时钟
/*var date=new Date();
var datestr = date.getFullYear()+'年'+(date.getMonth()+1)+'月'
    +date.getDate()+'日'+''+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();

console.log(datestr);*/

//数组字面量
/*var arr2 = ['a','b', 5, 6,true]

//console.log(arr2);


var arr1 = new Array();

arr1[0] = 'a';
arr1[1] = 'b';
arr1[2] = 5;
arr1[3] = true;

console.log(arr1.concat(arr2));*/


/*var arr2 = ['a','b', 5, 6,true]

console.log(arr2.join('+'));*/

/*var arr5 = ['a','b','c','d','e']

arr5.push('f');
console.log(arr5);*/

//数组的遍历
/*var arr7 = ['a','b','c','d','e']

for(var i=0;i<arr7.length;i++){
	
        console.log(arr7[i]);
}*/

/*for(var i=1;i<10;i++){
	for(var j=1;j<i;i++){
		document.write(i+'x'+j+'='+i*j+' ');
	}document.write("<br/>")
}*/

//求奇数/偶数的乘积
/*var sum =1;
for(var i = 1;i<=10;i+=2){
//	if(i%2==0){
//		continue;
	sum*=i;
//	}
}
document.getElementById("dd").innerHTML = sum;*/

/*var nus =1;
for(var i=1;i<=10;i++){
	if(i%2==0){
//		continue;
	}
	nus*=i;
}
console.log(nus);
*/
//如何清空一个数组

/*var arr8 = ['a','b','c','d','e']

arr8.length=2bang;

console.log(arr8);*/

/*var f="1qqqw";
if(f){
	alert(true);
} else{
	alert(false);
}*/

/*var myname(name,color)=function(){
	alert('车牌号'+name+'颜色'+color);
}



function myname(name,color){
	alert('车牌号'+name+'颜色'+color);
}
*/

/*function mus(){
	var txt="我是一个变量";
	return txt;
}
    var p=document.getElementById("f");
    f.innerHTML=mus();
 mus();*/

/*var date=new Date();
var datestr=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+'</br>'+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+'</br>'+'星期'+date.getDay();
document.getElementById('mien').innerHTML=datestr;
if(sce > = 10){
     sce;
} else{'0'+sce;
}*/

/*var members =[
    '杨1',
    '杨2',
    '杨3',
    '杨4',
    '杨5',
    '杨6',
    '杨7',
    '杨8'
];

var r = parseInt(Math.random()*8);
console.log(members[r]);*/

//console.log(parseInt(r*8)); 



/*var a=[1,2,5,7,9];
    b=[25,86,12,3,5];
var max=Math.max.apply(Math,b);
console.log(max);*/
/*var a=['&','@','%','#']
for(i=0;i<10;i++){
    if(i>10){

	}
document.getElementById('&');*/
//document.write('@');
//document.write('%');
//document.write('#');
//	}

/*var dt =new Date();
dt.set
console.log(dtear);*/

//js对象

/*var obj={
	type:'笔记本',
	name:'联想',
	price:6500,
	test:function(){
		console.log('taee');
	}
};
*/

//var arr1=['a','b','c','d','x','y','z']


/*function hero(){
    var arr=['魔导师','猴子','伐木机','双子','炼金','船长','火女','死灵法师','死亡先知','小丑','敌法'];
	var suphero;
	
	suphero=Math.floor(Math.random()*arr.length);
	return arr[suphero];
}

console.log(hero());
*/
//得到一个扩展名
/*var imgUrl ='img/abc/def.jpg';

var ext =imgUrl.substr(imgUrl.indexOf('.'));

console.log(ext);*/

/*var are='dancdkb';

if(are.lastIndexOf('b')==length-1){
	console.log(true);
} else{
	console.log(false);
}
*/

function toFixed(num,len){
    return 

}

var a = 1.135;
var b = 1.134;

var c =toFixed(a,2);   //1.14
var d =toFixed(a,1);   //1.1
var e =toFixed(b,2);   //1.13
var f =toFixed(b,1);   //1.1

console.log(c);
console.log(d);
console.log(e);
console.log(f);
/*var winWidth= window.innerWidth;
var winHeight= window.innerHeight;
console.log(winWidth);
console.log(winHeight);*/

function getWindowHeight(){
	var h=window.innerHeight || document.documentElement.clientHeight;
	return h;
}

var myBtn=document.getElementById('myBtn');
myBtn.onclick=function(){
	window.location='http://www.baidu.com';
}

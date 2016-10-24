var wp=document.getElementById('wp');
var tableHtml =[
    '<table>',
        '<tr>',
            '<td>1</td>',
        '</tr>',
    '<table>'
];

for(var i=1;i<10;i++){
	console.log(i)
}

wp.innerHTML =tableHtml.join('');
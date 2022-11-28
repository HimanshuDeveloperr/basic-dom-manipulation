var li=document.querySelectorAll('li')
console.log(li)
li[1].style.color='green'

var odd=document.querySelectorAll('li:nth-child(odd)')
console.log(odd)

//loop through each one to target each li;

for(let i=0;i<odd.length;i++)
{
 odd[i].style.backgroundColor='green'
}
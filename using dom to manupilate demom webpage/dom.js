//TRAVERSING THE DOM

let ul=document.querySelector('#items')
//finding the parentnode of the ul 
console.log(ul.parentNode)

//changing the parent node background color using our parentnode selector
ul.parentNode.style.backgroundColor='#f4f4f4'

//PARENTELEMENT
//will be similar to the parentnode property

let p=document.querySelector('#main-header')
console.log(p.parentElement)

p.parentElement.style.background='black'

//CHILDNODE
 console.log(ul.childNodes)
//it will give childs in the form of nodelist, of parent element ul with including a oth index where any texdt example a white space,line or any thingcould bge inclusive 

//CHILDEREN
console.log(ul.children)

ul.children[1].style.backgroundColor='lightgreen'

//FIRSTCHILD
//it gives us a node in the list as 0th node which includes the txt/lines/space etc
console.log(ul.firstChild)

//FIRSTELEMENTCHILD
//more convinient way to target the first item of our list.
console.log(ul.firstElementChild)
ul.firstElementChild.style.border='3px solid lightgrey'


//LASTTCHILD
//it gives us a node in the list as 0th node which includes the txt/lines/space etc
console.log(ul.lastChild)

//FIRSTELEMENTCHILD
//more convinient way to target the first item of our list.
console.log(ul.lastElementChild)
ul.lastElementChild.style.display='none'



//NEXTSIBILING
let container=document.querySelector('#main')
console.log(container.nextSibling)



//NEXTELEMENTSIBILING
console.log(container.nextElementSibling)//IT WILL US NULL CAUSE IT DOES NOT HAVE ANY SIBILINGS
//but after adding a span as its sibiling it gives us the span element\



//  PREVIOUSSIBILING
console.log(container.previousSibling)

//PREVIOUSELEMENTSIBILING
console.log(container.previousElementSibling)





//CREATE AN ELEMENT 

//createelement

let newdiv=document.createElement('div')

//add classname to it
newdiv.className='mydiv'

//add id to it
newdiv.id='created'

//setting an attribute
newdiv.setAttribute('title','helloDiv')

//to insert something inside our di create a textnode
let newdivTEXT=document.createTextNode('HELLO DIV')

//now append it to our parent element div as its child
newdiv.appendChild(newdivTEXT)



console.log(newdiv)

//insertin new div above item lister

//first grab the header div with container class below which we r inserting our new div
let insertingDivAt=document.querySelector('header .container')

//second grab the header h1 tag above which we r inserting our new div
let h1=document.querySelector('header h1')

//now use inerstbefore command to insert the new div before the h1 tag
insertingDivAt.insertBefore(newdiv,h1)




var div2=document.createElement('div')

div2.className='h'
div2.id='i'
div2.setAttribute('title','createdByMe')

var divtext=document.createTextNode('Hello world')

div2.appendChild(divtext)


console.log(div2)

var inserIT=document.querySelector(' #items')
console.log(inserIT)

var i2=document.querySelector('li')
console.log(i2)

inserIT.insertBefore(div2,i2)
div2.style.color='coral'


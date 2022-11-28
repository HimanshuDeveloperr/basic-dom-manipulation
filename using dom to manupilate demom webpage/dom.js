// // console.dir(document);
 //it is gonna show us all of the different properties and method attached to our document object.

// console.log(document.domain);
// it is going  to give the domain name 

// console.log(document.URL);
//it is going to give us the url of our webpage

// console.log(document.title);
 //gives title of webpage

// document.title= 'using dom'; 
//will change the  title of the webpage using dom method but we won't be using this method to manipulate our dom;

// console.log(document.doctype)
//gives the doctype 

// console.log(document.all); 
//will give every thing basically our sourcecode

// // console.log(document.all[10]);
//targeting the element in our sourcecode through the index where our target belongs

// //document.all[10].textContent="hello"
// changing the target text using textcontent

// console.log(document.forms);
//gives us the form if there is any we had inserted in our webpage

// console.log(document.forms[0])
//targets the form element through index


// NOW COMES THE EXCITING PART SELECTORS

// FIRST GETELEMENTBYID
console.log(document.getElementById("header-title"));
let header=document.getElementById("header-title");
console.log(header)


header.textContent="hello"
//changes the text of the targeted element


header.innerText="HELLO"
//it also changes the taxt but the main difference between the textcontent and the innertext is the inner text also records the style changes of the html text

header.innerHTML='<h3>NICE</h3>';
// it changes the html of our original html like here the h3 tag will not directly change the h1 tag of original html instead it will make it way inside/ below the h1 tag and override the h1 tag


let main= document.getElementById("main")
console.log(main)

main.style.border= '3px solid blue'

// GETELEMENTBYCLASS

let items=document.getElementsByClassName("list-group-item")//give us the elements by class name
console.log(items)
console.log(items[1]);

items[2].style.backgroundColor="green";

for(i=0;i<items.length;i++)// to change color and font of each we had to loop through each list item 
{
    items[i].style.color="black"
    items[i].style.fontWeight="bold"
}

let newitem=document.getElementsByClassName("diffclass")
console.log(newitem)
newitem[0].style.backgroundColor='green'
// newitem[0].style.border='2px solid black'
newitem[0].style.listStyle='none'





//GETELEMENTBYTAG

let li=document.getElementsByTagName('li')
console.log(li)

li[4].style.color='black'
li[4].textContent='new'
li[4].style.padding='13px 23px'
li[4].style.fontSize='16px'
li[4].style.fontWeight='bold'

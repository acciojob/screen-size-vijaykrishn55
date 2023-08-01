//your JS code here. If required.
let width =window.innerWidth;
let height = window.innerHeight;
let div=document.querySelector('sizeInfo');
let h1=div.firstChild;
	h1.innerText="width: "+width+" and Height: "+height;
window.addEventListener('resize',()=>{
	let width =window.innerWidth;
	let height = window.innerHeight;
	h1.innerText="width: "+width+" and Height: "+height;
	
})

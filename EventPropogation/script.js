

document.body.addEventListener('click',function(e){
    console.log('Body',e)
})


const parent = document.getElementById('parent');

parent.addEventListener('click',function(e){
   
    console.log('Parent',e)
})



const btn = document.getElementById('child-btn');

btn.addEventListener('click',function(e){
  
    console.log('Child Button 2',e)
})

btn.addEventListener('click',function(e){
    e.stopPropagation()
    console.log('Child Button',e)
})
btn.addEventListener('click',function(e){
  
    console.log('Child Button 3',e)
})





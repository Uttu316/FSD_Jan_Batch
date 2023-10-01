
// DOM
const titleEl = document.getElementById('title');
titleEl.style.color = "blue"
titleEl.style.background = "pink"


const listItems = document.getElementsByClassName('list-item')


for(let i of listItems){
    if(i.innerHTML==='Avadh'){
       i.style.color = "pink"
    }else{
        console.log(i.innerHTML)
        i.innerHTML = i.innerHTML+"_Newton School"
    }   
}

const allP = document.getElementsByTagName('p')

console.log(allP)

const div = document.createElement('div')


const h2 = document.createElement('h2');

 h2.innerText = "Hey I am newborn"


 div.appendChild(h2)

 document.body.appendChild(div)




 const list = document.getElementById('student_list');
 const li = document.createElement('li')
li.classList.add("list-item")
// li.classList.remove('hide')
// li.classList.contains('show')
// li.classList.replace('hide',"show")
// li.classList.toggle('bigger')

 li.innerText = "Utkarsh"

list.append(li)



const el = document.querySelector('#student_list .list-item.bg-red');

console.log(el)


const listItemsEl = document.querySelectorAll('#student_list .list-item');

const btn = document.getElementById('btn')
// btn.onclick = function(){
//     el.classList.toggle('bg-red')
// }

btn.addEventListener('click',function(){
    el.classList.toggle('bg-red')
})














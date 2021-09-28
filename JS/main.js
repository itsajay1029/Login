const name2=document.getElementById('input1');
const username=document.getElementById('label1')


name2.addEventListener('focus',(e)=>{
    username.style="transform :translateY(-22px); color:white; transition:0.5s; "
})

name2.addEventListener('focusout',(e)=>{
    if(e.target.value=="")
    username.style="transform :translateY(+0px); color: #B3B3B3;transition:0.5s; "
})

const name3=document.getElementById('input2');
const password=document.getElementById('label2')


name3.addEventListener('focus',(e)=>{
    password.style="transform :translateY(-22px); color:white; transition:0.5s; "
})

name3.addEventListener('focusout',(e)=>{
    if(e.target.value=="")
    password.style="transform :translateY(+0px); color: #B3B3B3;transition:0.5s; "
})
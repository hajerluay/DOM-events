let select=document.getElementsByTagName("select")[0];
select.addEventListener('click',()=>{
    for(i=0;i<select.length;i++){
        if(select.options[i].selected==true){
            if(select.value !=''){
                submit.classList.remove("disabled");
            }
        }
}});

let submit=document.getElementById('submit');
let div=document.getElementById('content');
submit.addEventListener('click',(e)=>{
    e.preventDefault();//cause submit inside form and form refersh the page we do not need it to refresh the page while pressing
    if(select.value !=''){
        div.classList.add(`${select.value}`)
    }
});

let select=document.getElementsByTagName("select")[0];
select.addEventListener('click',()=>{
    for(i=0;i<select.length;i++){
        if(select.options[i].selected==true){
            if(select.value !=''){
                submit.classList.remove("disabled");
            }
        }
}});

let div=document.getElementById('content');
div.addEventListener('click',()=>{
    if(select.value !=''){
        div.classList.add('value')
    }
});

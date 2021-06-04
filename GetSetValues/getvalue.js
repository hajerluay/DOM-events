let button=document.getElementsByTagName('button')[0];
button.addEventListener('click',()=>{
    let val1=+(document.getElementById('value1').value);
    let val2=+(document.getElementById('value2').value);
    let result=document.getElementById('result');
    let select=document.getElementById('select');
    if(select.value==='+'){
       return result.value=val1+val2;
    }else if(select.value==='-'){
       return  result.value=val1-val2;
    }
    else if(select.value==='*'){
        return result.value=val1*val2;
    }else if(select.value==='/'){
        return result.value=val1/val2;
    }else if(select.value==='/'){
        return result.value=val1/val2;
    }

});
let input1=document.getElementById('value1');
input1.addEventListener('input',()=>{
    if(value1===''){
        return 0;
    }else if(isNaN(input1.value)){
         alert('Value  must be a number')
    }
});

let input2=document.getElementById('value2');
input2.addEventListener('input',()=>{
    if(value1===''){
        return 0;
    }else if(isNaN(input2.value)){
        alert('Value  must be a number')
    }
    
    

});


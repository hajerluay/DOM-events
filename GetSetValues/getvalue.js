let button=document.getElementsByTagName('button')[0];
alert(button)
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
    if(input1.value===''){
        return 0;
    }else if(input1 ===""){
        return alert('Value X must be a number')
    }
}

);
let input2=document.getElementById('value2');
input1.addEventListener('input',()=>{
    if(input2===''){
        return 0;
    }else if(input2 ===""){
        return alert('Value X must be a number')
    }
}

);


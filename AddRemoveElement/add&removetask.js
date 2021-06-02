let button=document.getElementById('add-element');
 button.addEventListener('click', addElement);
  function addElement(){
    let div=document.getElementById('elements');
    div.innerHTML=(
    `<div class="element">
    <h3  id="x" >Element </h3>
    <h4>This is an element</h4>
    <button>Delete</button>
    </div>`);
    let button1=document.getElementsByTagName('button')[1];
    button1.addEventListener('click', removeElement);


  };
  function removeElement(){
    let div2=document.getElementsByClassName('element')[0];
    div2.innerHTML='';

  };

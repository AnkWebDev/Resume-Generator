// alert('loading...')
function addNewAfield() {

  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('weField');
  newNode.classList.add("mt-2");
  newNode.setAttribute('rows',2);
  newNode.setAttribute('placeholder', "Enter other...")

  let weOb=document.getElementById('we');
  let weAddButtonOb=document.getElementById('weAddButton');

  weOb.insertBefore(newNode, weAddButtonOb);
}

  //  Education qualification 

function addNewEQfield() {

  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('eqField');
  newNode.classList.add("mt-2");
  newNode.setAttribute('rows',2);
  newNode.setAttribute('placeholder', "Enter other...")

  let weOb=document.getElementById('eq');
  let eqAddButtonOb=document.getElementById('eqAddButton');

  weOb.insertBefore(newNode, eqAddButtonOb);
}


// Generating CV

function generateCV(){
  // console.log('generating CV')
  
  let nameField = document.getElementById('nameField').value;

  let nameT = document.getElementById('name-t')

  nameT.innerHTML = nameField;

  //direct
  document.getElementById('name-t2').innerHTML = nameField;

  // contact
  document.getElementById('con-tem').innerHTML = document.getElementById('ContactField').value;

  // address 
  document.getElementById('add-t').innerHTML = document.getElementById('adderField').value;

  // social media
  document.getElementById('fb-t').innerHTML = document.getElementById('fbField').value;

  document.getElementById('ins-t').innerHTML = document.getElementById('instaField').value;

  document.getElementById('link-t').innerHTML = document.getElementById('linkField').value;
  
  document.getElementById('git-t').innerHTML = document.getElementById('gitField').value;

  // Objective 
  document.getElementById('objec-tex').innerHTML = document.getElementById('objectiveField').value;

  //Work experience
  let wes = document.getElementsByClassName('weField');
  
  let str = "";

  for(let e of wes){
    str = str + `<li> ${e.value} </li>`; 

  }
  document.getElementById('we-t').innerHTML = str;

  // Education qualification

  let aqs = document.getElementsByClassName('eqField')
  let str1 = ''

  for(let e of aqs){
    str += `<li>${e.value} </li>`;
  }

  document.getElementById('aq-t').innerHTML = str;


  document.getElementById('cv-form').style.display = 'none';
  document.getElementById('cv-temp').style.display = 'block'

}


// Printing 
function printCV(){
  window.print();

}
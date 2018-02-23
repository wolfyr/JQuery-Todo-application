// get input element
let filterInput = document.getElementById('userInput');
// Create a EventListener for the filterInput variable
filterInput.addEventListener('keyup', filterNames);

/*Function to check if the name is in the list
and if not removes non matching names with css*/
function filterNames(){
  // Get the input value and store it in a variable
  let filterValue = document.getElementById('userInput').value.toUpperCase();

  // Safe the UL so I can get the to the LI
  let ul = document.getElementById('contacten');
  // Get al li elements with a class of collection-header to compare them to the input
  let li = ul.querySelectorAll('li.collection-header');

  // A loop to compare the input with all the li collection-header elements
  for(let i = 0;i < li.length; i++){
    let a = li[i].getElementsByTagName('a')[0];

    // If the input matches do nothinh
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
      li[i].style.display = '';
    // If the input does not match set the css style to none
    } else {
      li[i].style.display = 'none';
    }
  }

}


let addUserButton = document.getElementById('addUser');

addUserButton.addEventListener('click', addNewUser);

function addNewUser(){

  //Get the input and save in in a variable
  let newNameInput = document.getElementById('userInput').value;

  var li = "<li>" + "<a href='#'>" + newNameInput + "</a>" + "</li>";
  //Safe the UL in a variable

  let ul = document.getElementById('contacten');


  /*Take all h5 elemtens with and class of contactIndex to
  compare it to the first letter of the input to match the
  H5 with a class of contactIndex*/
  let contactIndex = ul.querySelectorAll('h5.contactIndex');

  let all = document.getElementsByTagName("ul")


  /*Loop to go to all the H5 with a class of contactIndex
  and compare the input to it. If its the same
  add it to the list else go on to the H5 with a class of contactIndex*/
  for(let i = 0;i < contactIndex.length; i++){
    let a = contactIndex[i];

    if(a.innerHTML == newNameInput.charAt(0).toUpperCase()){

       a.outerHTML += li;

    }
  }

}

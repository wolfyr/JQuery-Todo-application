$(document).ready(function(){

 $('#addItem').on('click', addItemToList);
 $('#thingsTodo').on('click', '.deleteThisItem', deleteItem);
 $('#thingsTodo').on('click', '#listItem', editItem);

function addItemToList (){
      var newItem = $('#inputField').val();

      if($('#inputField').val() !== ''){
        $('#thingsTodo').append('<div class="section">'+
                            '<li id="listItem" class="blue-text text-darken-2 tooltip">' + newItem + '<span class="tooltiptext">Click to edit</span></li>'+
                            '<i class="small material-icons deleteThisItem">delete</i>'+
                            '<div>'+
                            '<div class="divider"></div>');
        $('#inputField').val("");
        }else{
          alert("Please make sure you enter something before clicking the button");
     }
   }

function deleteItem(){
    $(this).closest('.section').remove();
    $(this).closest('.divider').remove();
  }

function editItem(){
    var newTodoInput = prompt("Please edit your todo item");

     if(newTodoInput !== ""){
       $(this).text(newTodoInput);
     }else{
       alert("Please make sure you enter something before clicking the button");
     }


  }

});

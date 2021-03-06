$(document).ready(function(){
  var data = JSON.parse(localStorage.getItem("todoData"));
  var items = [];
  console.log(data);

  $('#addItem').on('click', addItemToList);
  $('#thingsTodo').on('click', '.deleteThisItem', deleteItem);
  $('#thingsTodo').on('click', '#listItem', editItem);
  $('#clearList').on('click', clearFullList);


  if(data != null){
    for (var i = 0; i < data.length; i++){
      items.push(data[i]);

      localStorage.setItem("todoData", JSON.stringify(items));

      $('#thingsTodo').append('<div class="section">'+
                                '<li id="listItem" class="blue-text text-darken-2 tooltip">' + data[i] +
                                  '<span class="tooltiptext">Click to edit</span></li>'+
                                '<i class="small material-icons deleteThisItem">delete</i>'+
                              '<div class="divider"></div>');
   }
  }



function clearFullList(){
   localStorage.removeItem("todoData");
   location.reload();
 }

function addItemToList (){
      var newItem = {value: $('#inputField').val()};
      items.push(newItem.value);

      if(newItem.value !== ''){

        localStorage.setItem("todoData", JSON.stringify(items));

        $('#thingsTodo').append('<div class="section">'+
                            '<li id="listItem" class="blue-text text-darken-2 tooltip">' + newItem.value + '<span class="tooltiptext">Click to edit</span></li>'+
                            '<i class="small material-icons deleteThisItem">delete</i>'+
                            '<div class="divider"></div>');
        $('#inputField').val("");
        }else{
          alert("Please make sure you enter something before clicking the button");
     }
   }

function deleteItem(){
    $(this).closest('.section').remove();
    $(this).closest('.divider').remove();
    var x = $(this).parent().text();

    for (var i = 0; i < items.length; i++){
      if(x == items[i]+"Click to editdelete"){
        items.splice(i, 1)
        localStorage.setItem("todoData", JSON.stringify(items));
        console.log(data);
      }
    }
  }

function editItem(){
    var newTodoInput = {newValue: prompt("Please edit your todo item")};

    items.push(newTodoInput.newValue);

     if(typeof newTodoInput.newValue !== 'object'){
       if(newTodoInput.newValue !== ""){
         localStorage.setItem("todoData", JSON.stringify(items));
         $(this).replaceWith('<li id="listItem" class="blue-text text-darken-2 tooltip">' + newTodoInput.newValue + '<span class="tooltiptext">Click to edit</span></li>');
       }

     }else{
       alert("Please make sure you enter something before clicking the button");
     }

  }

});

$(document).ready(function(){

 $('#addItem').on('click', addItemToList);
 $('#thingsTodo').on('click', '.deleteThisItem', deleteItem);

    function addItemToList (){
    var newItem = $('#inputField').val();

    $('#thingsTodo').append('<div class="section">'+
                            '<li class="blue-text text-darken-2">' + newItem +
                            '<i class="small material-icons deleteThisItem">delete</i></li>'+
                            '<div>'+
                            '<div class="divider"></div>');
    $('#inputField').val("");
  }

  function deleteItem(){
    $(this).closest('.section').remove();
    $(this).closest('.divider').remove();
  }

});

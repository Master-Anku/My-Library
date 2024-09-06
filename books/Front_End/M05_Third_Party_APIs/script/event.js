var shoppingFormEl = $('#shopping-form');  //form
var shoppingListEl = $('#shopping-list'); //ul

// 1: handleFormSubmit
function handleFormSubmit(event) {
  event.preventDefault();

  var shoppingItem = $('input[name="shopping-input"]').val();  //apple

  if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
    return;
  }

  // Create li
  var shoppingListItemEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  shoppingListItemEl.text(shoppingItem); // ul ထဲကို liထည့်

  // add delete button to remove shopping list item  li ထဲကို remove btn ထည့်ခြင်း
  shoppingListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  );

  // print to the page
  shoppingListEl.append(shoppingListItemEl);

  // clear the form input element
  $('input[name="shopping-input"]').val('');
  // $('input[name="shopping-input"]').remove();
}

// 2: handleRemoveItem
function handleRemoveItem(event) {
  // convert button we pressed (`event.target`) to a jQuery DOM object
  var btnClicked = $(event.target);

  // get the parent `<li>` element from the button we pressed and remove it
  btnClicked.parent('li').remove();
}

// use event delegation on the `shoppingListEl` to listen for click on any element with a class of `delete-item-btn`
shoppingListEl.on('click', '.delete-item-btn', handleRemoveItem); //23 
shoppingFormEl.on('submit', handleFormSubmit);

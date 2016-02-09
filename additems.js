$(document).ready(function() {
  $(".btn").on("click", addItem);

  $("ol").on("click", ".link-delete", deleteItem);
});
function addItem() {
  // console.log("Yes Sir I am working"); use this just to test that the function is active
  var text = window.prompt("Please let me know what you would like to know more about.");
  var delete_link = '<a href="#" class="link-delete">(Delete)</a>'
  $("ol").append("<li>" + text + " " + delete_link + "</li>");
}

function deleteItem(event) {
  console.info(event);
  $(event.target).parent().remove();
  var numItems = $("li").length;
  $(".total").html(numItems + " items");


}

$(document).ready(function() {
  $("button#hello").click(function() {
  $("ul#user").prepend("<li>Hello!</li>");
  $("ul#webpage").prepend("<li>Why hello there!</li>");
  $('li').css('background-color', 'green');
});

  $("button#goodbye").click(function() {
    $("ul").prepend("<li>Goodbye!</li>");
  });

  $("button#stop").click(function() {
    $("ul").prepend("<li>Stop copying me!</li>");
  });
});

$("button#hello").click(function() {
$("p#salad").prepend("<li>Hello!</li>");
});

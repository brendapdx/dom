$(document).ready(function() {
  $("button#kitty").click(function() {
    $("ul").prepende("<li>Meow!</li>");
  });

  $("button#dog").click(function() {
    $("ul").prepend("<li>Bark!</li>");
  });

  $("button#stop").click(function() {
    $("ul").prepend("<li>?</li>");
  });
});

module.exports = function() {
  var canvas = document.createElement("canvas");
  canvas.width = 600;
  canvas.height = 450;
  document.body.appendChild(canvas);
  var cx = canvas.getContext("2d");
  var img = document.createElement("img");
  img.src = "img/game_over.png";
  img.addEventListener("load", function() {
      cx.drawImage(img, 0, 0);
  });
};
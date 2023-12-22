function draw8By8BoundingBox(x, y, boxSize, color) {
  _drawBoundingBox(8, x, y, boxSize, color);
}

function draw16By16BoundingBox(x, y, boxSize, color) {
  _drawBoundingBox(16, x, y, boxSize, color);
}

function _drawBoundingBox(dim, x, y, boxSize, color) {
  color = color || 0;

  push();

  noFill();
  stroke(color);
  strokeWeight(0.5);

  var xPos = x;
  var yPos = y;

  for (var row = 0; row < dim; row++) {
    for (var col = 0; col < dim; col++) {
      rect(xPos, yPos, boxSize, boxSize);
      xPos += boxSize;
    }

    xPos = x;
    yPos += boxSize;
  }

  pop();
}
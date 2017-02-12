var body = document.getElementsByTagName('body')[0];
var gridMama = document.createElement('div');
body.appendChild(gridMama);
gridMama.className = 'gridMama';
var newPalette = document.createElement('div');
body.appendChild(newPalette);
newPalette.className = 'newPalette';

function gridLayout(){
  var grid = document.createElement('div');
  gridMama.appendChild(grid);
  grid.className = 'grid';

  for (var i = 0; i < 25; i++) {
    var row = document.createElement('div')
    grid.appendChild(row);
    row.className = 'row';

    for (var j = 0; j < 40; j++) {
      var pixel = document.createElement('div');
      row.appendChild(pixel);
      pixel.className = 'pixel';
    }
  }
  return grid;
}
gridLayout();

function colorPalette(){
  var palette = document.createElement('div');
  newPalette.appendChild(palette);
  palette.className = 'palette';

    for (var j = 0; j < 30; j++) {
      var color = document.createElement('div');
      palette.appendChild(color);
      color.className = 'color';

    for (var i = 0; i < 100; i++) {
      let colors = document.createElement('div');
      color.appendChild(colors);
      colors.className = 'colors';

    let randomColor = color[j];
      randomColor = 'rgb(' + (Math.floor(Math.random()*256)) + ', ' +  (Math.floor(Math.random()*256)) + ', ' + (Math.floor(Math.random()*256)) + ')';
      color.style.backgroundColor = randomColor
      }
    }
}
colorPalette();

var colorSave = document.createElement('div');
colorSave.style.backgroundColor = '';

newPalette.addEventListener('click', function(){
  if (event.target === this) {}
  else {
    colorSave.style.backgroundColor = event.target.style.backgroundColor;
  }
});

gridMama.addEventListener('click', function(){
  if (event.target === this) {}
  else {
    event.target.style.backgroundColor = colorSave.style.backgroundColor;
  }
});

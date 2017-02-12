var body = document.getElementsByTagName('body')[0];
var newPalette = document.createElement('div');
body.appendChild(newPalette);
newPalette.className = 'newPalette';
var gridMama = document.createElement('div');
body.appendChild(gridMama);
gridMama.className = 'gridMama';
// var newPalette = document.createElement('div');
// body.appendChild(newPalette);
// newPalette.className = 'newPalette';

function gridLayout(){
  var grid = document.createElement('div');
  gridMama.appendChild(grid);
  grid.className = 'grid';
  // // grid.style.marginTop = '100px'

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

      for (var j = 0; j < 15; j++) {
        var color = document.createElement('div');
        palette.appendChild(color);
        color.className = 'color';

      var colors = ['Red', 'DarkOliveGreen', 'DarkBlue', 'Orange', 'Yellow', 'violet', 'CadetBlue','Crimson', 'WhiteSmoke', 'Coral', 'DarkGray', 'DodgerBlue', 'Lime', 'Purple', 'Black'];
      var styleColor = colors[j];
      color.style.backgroundColor = styleColor;
      palette.appendChild(color);
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

// colors.addEventListener('click', function(event) {
//     clickerColor.style.backgroundColor = event.target.style.backgroundColor;
// })
// firstDiv.addEventListener('click', function(event) {
//   if (clickerColor.classList === this) {}
//   else {
//     event.target.style.backgroundColor = clickerColor.style.backgroundColor;
//   }
// })```

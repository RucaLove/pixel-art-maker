var body = document.getElementsByTagName('body')[0];
var newPalette = document.createElement('div');
body.appendChild(newPalette);
newPalette.className = 'newPalette';
var gridMama = document.createElement('div');
body.appendChild(gridMama);
gridMama.className = 'gridMama';

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
  body.appendChild(palette);
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

    // return palette;
    // color.appendChild(colors)
    // color.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
colorPalette();

  gridMama.addEventListener('click', function(){
    if (event.target === this) {}
    else {
      event.target.style.backgroundColor = 'red';
    }
});

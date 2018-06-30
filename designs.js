// Select color input
// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    const height = $('#inputHeight').val();
    const width = $('#inputWidth').val();
    makeGrid(height, width);
})

function makeGrid(row, col) {
  // Your code goes here!
$('#pixelCanvas').find('tr').remove();
  for (var i = 1; i < row; i++) {
    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
      for (var j = 1; j < col; j++) {
        $('#table' + i).append('<td></td>');
    }
}
    // add colors to the cells
$('td').click(function addColor(){
  color = $('#colorPicker').val();
    if ($(this).attr('style')) {
      $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}

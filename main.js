var canvas = new fabric.Canvas('c', {
    backgroundColor: 'rgb(100,100,200)',
    width: "1400",
    height: "500",
    selectionColor: 'blue',
    selectionLineWidth: 2
    // ...
  });
var imgElement = document.getElementById('my-image');
var imgInstance = new fabric.Image(imgElement, {
  left: 100,
  top: 100,
  angle: 30,
  opacity: 0.85
});
canvas.add(imgInstance);


document.getElementById('imgLoader').onchange = function handleImage(e) {
    var reader = new FileReader();
      reader.onload = function (event){
        var imgObj = new Image();
        imgObj.src = event.target.result;
        imgObj.onload = function () {
          var image = new fabric.Image(imgObj);
          image.set({
                angle: 0,
                padding: 10,
                cornersize:10,
                height:110,
                width:110,
          });
          canvas.centerObject(image);
          canvas.add(image);
          canvas.renderAll();
        }
      }
      reader.readAsDataURL(e.target.files[0]);
    }
var addBtn = document.getElementById('add');
addBtn.addEventListener("click", function() {
    alert("a7a")
});
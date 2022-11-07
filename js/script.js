function init(){
  function myEventFunction (){
    var a = document.getElementById('entryinput');
    var b = "Munawar Ali: ";
    var c = b+a.value;
    alert(c);
  }; 
  var d1 = document.getElementById('entrybutton'); 
  d1.addEventListener('click', myEventFunction);	 
  d1.addEventListener('click', function(){
    var d2 = document.getElementById('textoutput');
    d2.innerHTML = fc.value;
  });
}
window.addEventListener('load', init);

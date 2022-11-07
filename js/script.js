function init(){
  function myEventFunction (){
    //declaring global variable a to be used by other functions as well
    a = document.getElementById('entryinput');
    //creating local variables
    var b = "Munawar Ali: ";
    var c = b+a.value;
    alert(c);
  }; 
  var d1 = document.getElementById('entrybutton'); 
  d1.addEventListener('click', myEventFunction);	 
  d1.addEventListener('click', function(){
    var d2 = document.getElementById('textoutput');
    d2.innerHTML = a.value;
  });
};
window.addEventListener('load', init);

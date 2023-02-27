

document.getElementById('boton').addEventListener('click', function(){
  console.log('Se realizo click en el boton conozca mas');

document.getElementById('cursos_real').style.display='block'
document.getElementById('boton_atras').style.display='block'
})

document.getElementById('boton_atras').addEventListener('click', function(){
  console.log('Se realizo click en el boton ver menos');

  document.getElementById('cursos_real').style.display="none";
  document.getElementById('boton_atras').style.display="none";
})
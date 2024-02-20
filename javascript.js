function formulario(){
let form = document.createElement("form");
let leb=document.createElement('label');
let texto=document.createTextNode('Nombre:');
let input=document.createElement('input');
let dev =document.getElementById('div');
let leb2=document.createElement('label');
let texto2=document.createTextNode('Apellido:');
let input2=document.createElement('input');
let leb3=document.createElement('label');
let texto3=document.createTextNode('Edad:');
let input3=document.createElement('input');
let buton=document.createElement('button');
let texto4=document.createTextNode('Envar:');

input.setAttribute('type', 'text');
leb.setAttribute('for', 'nombre');
input.setAttribute('name','nombre');
input.setAttribute('id','nombre');
input2.setAttribute('type', 'text');
leb2.setAttribute('for', 'apellido');
input2.setAttribute('name','apellido');
input2.setAttribute('id','apellido');
input3.setAttribute('type', 'number');
leb3.setAttribute('for', 'edad');
input3.setAttribute('name','edad');
input3.setAttribute('id','edad');
buton.setAttribute('type', 'button')
buton.setAttribute('onclick', 'agregarFila()');

dev.appendChild (form);
form.appendChild(leb);
form.appendChild(input);
leb.appendChild(texto);
form.appendChild(leb2);
form.appendChild(input2);
leb2.appendChild(texto2);
form.appendChild(leb3);
form.appendChild(input3);
leb3.appendChild(texto3);
form.appendChild(buton);
buton.appendChild(texto4);




}


function agregarFila() {
  
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;
    var apellido = document.getElementById('apellido').value;
  
  
    if (nombre.trim() === '' || apellido.trim()==''|| edad.trim() === '') {
      alert('Por favor completa todos los campos.');
      return;
    }
  
    
    var tabla = document.getElementById('miTabla').getElementsByTagName('tbody')[0];
    var nuevaFila = tabla.insertRow();
  
    
    var celdaNombre = nuevaFila.insertCell(0);
    var celdaApellido = nuevaFila.insertCell(1);
    var celdaEdad = nuevaFila.insertCell(2)
  
    
    celdaNombre.innerHTML = nombre;
    celdaEdad.innerHTML = edad;
    celdaApellido.innerHTML=apellido;
  
  
    document.getElementById('nombre').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('apellido').value = '';
  }













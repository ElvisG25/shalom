document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('modal');
    var btn = document.getElementById("comentar-btn");
    var span = document.getElementsByClassName("close")[0];
    var enviarBtn = document.getElementById("enviar-btn");
    var cancelarBtn = document.getElementById("cancelar-btn");
  
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    cancelarBtn.onclick = function() {
      modal.style.display = "none";
    }
  
    enviarBtn.onclick = function() {
      var nombre = document.getElementById("nombre").value;
      var valorizacion = document.getElementById("valorizacion").value;
      var comentario = document.getElementById("comentario").value;
      
      // Aquí puedes hacer lo que quieras con los datos, como enviarlos a un servidor o mostrarlos en la página
      
      // Luego, cierra el modal
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
  
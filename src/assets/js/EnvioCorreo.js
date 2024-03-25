
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact').addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto
      
      Swal.fire({
        title: 'Enviar correo',
        text: '¿Estás seguro de que deseas enviar?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, enviar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Si el usuario confirma, enviar el formulario
          this.submit();
        }
      });
    });
  });

//   const btn = document.getElementById('button');

//   document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('contact').addEventListener('submit', function(event) {
//       event.preventDefault(); // Evitar el envío del formulario por defecto
  
//     btn.value = 'Enviando...';
  
//     const serviceID = 'default_service';
//     const templateID = 'template_j5ja66g';
  
//     emailjs.sendForm(serviceID, templateID, this)
//       .then(() => {
//         btn.value = 'Send Email';
//         Swal.fire({
//           title: 'Correo enviado',
//           text: '¡El correo se ha enviado correctamente!',
//           icon: 'success',
//           confirmButtonText: 'Aceptar'
//         });
//       })
//       .catch((err) => {
//         btn.value = 'Send Email';
//         Swal.fire({
//           title: 'Error',
//           text: 'Hubo un error al enviar el correo. Por favor, inténtalo de nuevo más tarde.',
//           icon: 'error',
//           confirmButtonText: 'Aceptar'
//         });
//       });
//   });
// });
  
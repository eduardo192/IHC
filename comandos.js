document.addEventListener("DOMContentLoaded", function () {
  if (!annyang) {
    return alert("el navegador no soprta comandos de voz");
  }
  const $comandoreconocido = document.querySelector("#ComandoHola");

  annyang.setLanguage("es-MX");

  let comandos = {
    derecha: function moverDerecha() {
      mLeft += velocidad;
      pelota.style.marginLeft = mLeft + "px";
    },

    izquierda: function moverIzquierda() {
      mLeft -= velocidad;
      pelota.style.marginLeft = mLeft + "px";
    },

    arriba: function moverArriba() {
      mTop -= velocidad;
      pelota.style.marginTop = mTop + "px";
    },

    abajo: function moverAbajo() {
      mTop += velocidad;
      pelota.style.marginTop = mTop + "px";
    },
  };
  annyang.addCommands(comandos);

  annyang.start();
});

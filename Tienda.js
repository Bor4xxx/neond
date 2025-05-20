document.getElementById("ciudad-select").addEventListener("change", function () {
  const seleccion = this.value;
  const tiendas = document.querySelectorAll(".tienda");
  const mapa = document.getElementById("mapa-iframe");

  tiendas.forEach(tienda => {
    if (seleccion === "todas" || tienda.dataset.ciudad === seleccion) {
      tienda.style.display = "block";
    } else {
      tienda.style.display = "none";
    }
  });

  // Cambiar el mapa según la ciudad
  if (seleccion === "madrid") {
    mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.513660240653!2d-3.7037902845978985!3d40.420287963176096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42288768cfadfb%3A0x8f3eb71e9a771f2a!2sGran%20V%C3%ADa%2C%2030%2C%2028013%20Madrid!5e0!3m2!1ses!2ses!4v1716211990001!5m2!1ses!2ses";
  } else if (seleccion === "valencia") {
    mapa.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.5523769740815!2d-0.3756319!3d39.4699077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f1f0c7fbb15%3A0xb6dd8e0347411479!2sAv.%20del%20Cid%2C%2020%2C%2046010%20Valencia!5e0!3m2!1ses!2ses!4v1716212112111!5m2!1ses!2ses";
  } else {
    // Mapa general o combinado
    mapa.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6086.559053969386!2d-1.878229!3d39.910501!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42288768cfadfb%3A0x8f3eb71e9a771f2a!2sGran%20V%C3%ADa%2C%20Madrid!5e0!3m2!1ses!2ses!4v1716212225555!5m2!1ses!2ses";
  }
});

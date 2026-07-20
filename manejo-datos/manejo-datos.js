(() => {
  const menu = document.querySelector("#menu-sesiones");
  const numero = document.querySelector("#numero-sesion");
  const titulo = document.querySelector("#titulo-sesion");
  const visor = document.querySelector("#visor-pdf");
  const abrir = document.querySelector("#abrir-sesion");
  const descargar = document.querySelector("#descargar-sesion");

  if (!menu || !Array.isArray(sesionesManejoDatos) || sesionesManejoDatos.length === 0) return;

  function enlaceDescarga(url) {
    return `${url}${url.includes("?") ? "&" : "?"}download=1`;
  }

  function mostrarSesion(indice) {
    const sesion = sesionesManejoDatos[indice];
    numero.textContent = `Sesión ${sesion.numero}`;
    titulo.textContent = sesion.titulo;
    visor.src = sesion.pdf;
    visor.title = `Sesión ${sesion.numero}: ${sesion.titulo}`;
    abrir.href = sesion.pdf;
    descargar.href = enlaceDescarga(sesion.pdf);

    [...menu.children].forEach((boton, i) => {
      const activo = i === indice;
      boton.classList.toggle("active", activo);
      boton.setAttribute("aria-pressed", activo ? "true" : "false");
    });
  }

  sesionesManejoDatos.forEach((sesion, indice) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "session-menu-button";
    boton.innerHTML = `<span>Sesión ${sesion.numero}</span><strong>${sesion.titulo}</strong>`;
    boton.addEventListener("click", () => mostrarSesion(indice));
    menu.appendChild(boton);
  });

  mostrarSesion(0);
})();

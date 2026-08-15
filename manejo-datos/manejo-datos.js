(() => {
  const menu = document.querySelector("#menu-sesiones");
  const numero = document.querySelector("#numero-sesion");
  const titulo = document.querySelector("#titulo-sesion");
  const visor = document.querySelector("#visor-pdf");
  const abrir = document.querySelector("#abrir-sesion");
  const descargar = document.querySelector("#descargar-sesion");
  const materiales = document.querySelector("#materiales-sesion");
  const listaMateriales = document.querySelector("#lista-materiales-sesion");
  const video = document.querySelector("#video-sesion");
  const tituloVideo = document.querySelector("#titulo-video-sesion");
  const descripcionVideo = document.querySelector("#descripcion-video-sesion");
  const reproductorVideo = document.querySelector("#reproductor-video-sesion");
  const abrirVideo = document.querySelector("#abrir-video-sesion");
  const audio = document.querySelector("#audio-sesion");
  const tituloAudio = document.querySelector("#titulo-audio-sesion");
  const reproductorAudio = document.querySelector("#reproductor-audio-sesion");
  const abrirAudio = document.querySelector("#abrir-audio-sesion");

  if (!menu || !Array.isArray(sesionesManejoDatos) || sesionesManejoDatos.length === 0) return;

  function enlaceDescarga(url) {
    return `${url}${url.includes("?") ? "&" : "?"}download=1`;
  }

  function mostrarSesion(indice) {
    const sesion = sesionesManejoDatos[indice];
    numero.textContent = `Semana ${sesion.numero}`;
    titulo.textContent = sesion.titulo;
    visor.src = sesion.pdf;
    visor.title = `Semana ${sesion.numero}: ${sesion.titulo}`;
    abrir.href = sesion.abrir || sesion.pdf;
    descargar.href = sesion.descargar || enlaceDescarga(sesion.pdf);

    if (audio && tituloAudio && reproductorAudio && abrirAudio) {
      const recursoAudio = Array.isArray(audiosManejoDatos)
        ? audiosManejoDatos.find((elemento) => elemento.numero === sesion.numero)
        : null;

      audio.hidden = !recursoAudio;

      if (recursoAudio) {
        tituloAudio.textContent = recursoAudio.titulo;
        reproductorAudio.src = recursoAudio.spotify;
        reproductorAudio.title = `Podcast de la semana ${sesion.numero}: ${recursoAudio.titulo}`;
        abrirAudio.href = recursoAudio.abrir;
      } else {
        reproductorAudio.removeAttribute("src");
        abrirAudio.href = "#";
      }
    }

    if (materiales && listaMateriales) {
      const recursos = Array.isArray(sesion.materiales) ? sesion.materiales : [];
      materiales.hidden = recursos.length === 0;
      listaMateriales.replaceChildren();

      recursos.forEach((recurso) => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "session-material-card";

        const tipo = document.createElement("p");
        tipo.className = "resource-tag";
        tipo.textContent = recurso.tipo;

        const encabezado = document.createElement("h5");
        encabezado.textContent = recurso.titulo;

        const descripcion = document.createElement("p");
        descripcion.textContent = recurso.descripcion;

        const enlace = document.createElement("a");
        enlace.className = "text-button";
        enlace.href = recurso.abrir;
        enlace.target = "_blank";
        enlace.rel = "noopener";
        enlace.textContent = "Abrir documento ↗";

        tarjeta.append(tipo, encabezado, descripcion, enlace);
        listaMateriales.appendChild(tarjeta);
      });
    }

    if (video && tituloVideo && descripcionVideo && reproductorVideo && abrirVideo) {
      const recursoVideo = sesion.video;
      video.hidden = !recursoVideo;

      if (recursoVideo) {
        tituloVideo.textContent = recursoVideo.titulo;
        descripcionVideo.textContent = recursoVideo.descripcion;
        reproductorVideo.src = recursoVideo.youtube;
        reproductorVideo.title = `Semana ${sesion.numero}: ${recursoVideo.titulo}`;
        abrirVideo.href = recursoVideo.abrir;
      } else {
        reproductorVideo.removeAttribute("src");
        abrirVideo.href = "#";
      }
    }

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
    boton.innerHTML = `<span>Semana ${sesion.numero}</span><strong>${sesion.titulo}</strong>`;
    boton.addEventListener("click", () => mostrarSesion(indice));
    menu.appendChild(boton);
  });

  mostrarSesion(0);
})();

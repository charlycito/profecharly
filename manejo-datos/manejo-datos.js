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
    abrir.href = sesion.abrir || sesion.pdf;
    descargar.href = sesion.descargar || enlaceDescarga(sesion.pdf);

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
        reproductorVideo.title = `Sesión ${sesion.numero}: ${recursoVideo.titulo}`;
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
    boton.innerHTML = `<span>Sesión ${sesion.numero}</span><strong>${sesion.titulo}</strong>`;
    boton.addEventListener("click", () => mostrarSesion(indice));
    menu.appendChild(boton);
  });

  mostrarSesion(0);
})();

(() => {
  const menu = document.querySelector("#menu-audios");
  const numero = document.querySelector("#numero-audio");
  const titulo = document.querySelector("#titulo-audio");
  const reproductor = document.querySelector("#reproductor-spotify");
  const abrir = document.querySelector("#abrir-audio");

  if (
    !menu ||
    !Array.isArray(audiosManejoDatos) ||
    audiosManejoDatos.length === 0
  ) return;

  function mostrarAudio(indice) {
    const audio = audiosManejoDatos[indice];

    numero.textContent = `Sesión ${audio.numero}`;
    titulo.textContent = audio.titulo;
    reproductor.src = audio.spotify;
    reproductor.title = `Audio de la sesión ${audio.numero}: ${audio.titulo}`;
    abrir.href = audio.abrir;

    [...menu.children].forEach((boton, i) => {
      const activo = i === indice;
      boton.classList.toggle("active", activo);
      boton.setAttribute("aria-pressed", activo ? "true" : "false");
    });
  }

  audiosManejoDatos.forEach((audio, indice) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "session-menu-button";
    boton.innerHTML =
      `<span>Sesión ${audio.numero}</span>` +
      `<strong>${audio.titulo}</strong>`;

    boton.addEventListener("click", () => mostrarAudio(indice));
    menu.appendChild(boton);
  });

  mostrarAudio(0);
})();

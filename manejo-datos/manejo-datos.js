(() => {
  const menuParciales = document.querySelector("#menu-parciales");
  const menu = document.querySelector("#menu-sesiones");
  const tituloMenu = document.querySelector("#titulo-menu-sesiones");
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

  if (!menuParciales || !menu || !Array.isArray(sesionesManejoDatos) || sesionesManejoDatos.length === 0) return;

  function parcialDe(sesion) {
    return sesion.parcial || 1;
  }

  function etiquetaDe(sesion) {
    return sesion.etiqueta || "Semana";
  }

  function enlaceDescarga(url) {
    return `${url}${url.includes("?") ? "&" : "?"}download=1`;
  }

  function mostrarSesion(sesion, indice) {
    const parcial = parcialDe(sesion);
    const etiqueta = etiquetaDe(sesion);
    numero.textContent = `${etiqueta} ${sesion.numero} · Parcial ${parcial}`;
    titulo.textContent = sesion.titulo;
    visor.src = sesion.pdf;
    visor.title = `${etiqueta} ${sesion.numero} del Parcial ${parcial}: ${sesion.titulo}`;
    abrir.href = sesion.abrir || sesion.pdf;
    descargar.href = sesion.descargar || enlaceDescarga(sesion.pdf);

    if (audio && tituloAudio && reproductorAudio && abrirAudio) {
      const recursoAudio = parcial === 1 && Array.isArray(audiosManejoDatos)
        ? audiosManejoDatos.find((elemento) => elemento.numero === sesion.numero)
        : null;

      audio.hidden = !recursoAudio;

      if (recursoAudio) {
        tituloAudio.textContent = recursoAudio.titulo;
        reproductorAudio.src = recursoAudio.spotify;
        reproductorAudio.title = `Podcast de la ${etiqueta.toLowerCase()} ${sesion.numero}: ${recursoAudio.titulo}`;
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

        tarjeta.append(tipo, encabezado, descripcion);

        if (recurso.nota) {
          const nota = document.createElement("p");
          nota.className = "session-material-note";
          nota.textContent = recurso.nota;
          tarjeta.appendChild(nota);
        }

        const enlace = document.createElement("a");
        enlace.className = "text-button";
        enlace.href = recurso.abrir;
        enlace.target = "_blank";
        enlace.rel = "noopener noreferrer";
        enlace.textContent = recurso.boton || "Abrir documento ↗";

        tarjeta.appendChild(enlace);
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
        reproductorVideo.title = `${etiqueta} ${sesion.numero}: ${recursoVideo.titulo}`;
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

  const parciales = [...new Set(sesionesManejoDatos.map(parcialDe))].sort((a, b) => a - b);

  function mostrarParcial(parcial) {
    const sesiones = sesionesManejoDatos.filter((sesion) => parcialDe(sesion) === parcial);
    menu.replaceChildren();

    if (tituloMenu) {
      tituloMenu.textContent = parcial === 1 ? "Semanas del Parcial 1" : `Sesiones del Parcial ${parcial}`;
    }

    sesiones.forEach((sesion, indice) => {
      const boton = document.createElement("button");
      const etiqueta = etiquetaDe(sesion);
      boton.type = "button";
      boton.className = "session-menu-button";
      boton.innerHTML = `<span>${etiqueta} ${sesion.numero}</span><strong>${sesion.titulo}</strong>`;
      boton.addEventListener("click", () => mostrarSesion(sesion, indice));
      menu.appendChild(boton);
    });

    [...menuParciales.children].forEach((boton) => {
      const activo = Number(boton.dataset.parcial) === parcial;
      boton.classList.toggle("active", activo);
      boton.setAttribute("aria-pressed", activo ? "true" : "false");
    });

    if (sesiones.length > 0) mostrarSesion(sesiones[0], 0);
  }

  parciales.forEach((parcial) => {
    const cantidad = sesionesManejoDatos.filter((sesion) => parcialDe(sesion) === parcial).length;
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "partial-menu-button";
    boton.dataset.parcial = parcial;
    const resumen = parcial === 1
      ? "Semanas 1–8"
      : `${cantidad} ${cantidad === 1 ? "sesión disponible" : "sesiones disponibles"}`;
    boton.innerHTML = `<span>Parcial ${parcial}</span><strong>${resumen}</strong>`;
    boton.addEventListener("click", () => mostrarParcial(parcial));
    menuParciales.appendChild(boton);
  });

  mostrarParcial(parciales[0]);
})();

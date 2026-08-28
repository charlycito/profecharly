(() => {
  const menu = document.querySelector("#menu-semanas");
  const numero = document.querySelector("#numero-semana");
  const titulo = document.querySelector("#titulo-semana");
  const descripcion = document.querySelector("#descripcion-semana");
  const contenido = document.querySelector("#contenido-semana");

  if (!menu || !contenido || !Array.isArray(semanasCiudadania) || semanasCiudadania.length === 0) return;

  function crearFormulario(semana) {
    const formulario = semana.formulario;
    const fragmento = document.createDocumentFragment();

    const introduccion = document.createElement("div");
    introduccion.className = "diagnostic-intro";
    introduccion.innerHTML = `
      <p class="eyebrow">Antes de comenzar</p>
      <h3>Diagnóstico inicial</h3>
      <p>Este formulario permitirá conocer las características del grupo, su acceso a la tecnología y algunas experiencias previas. No es un examen: responde con sinceridad.</p>
    `;

    const disposicion = document.createElement("div");
    disposicion.className = "diagnostic-layout";

    const tarjeta = document.createElement("article");
    tarjeta.className = "diagnostic-card";

    const cabecera = document.createElement("div");
    cabecera.className = "diagnostic-card-header";
    cabecera.innerHTML = `
      <p class="eyebrow">Microsoft Forms</p>
      <h4>${formulario.titulo}</h4>
      <p>${formulario.indicacion}</p>
    `;

    const visor = document.createElement("iframe");
    visor.className = "diagnostic-frame";
    visor.title = "Formulario de diagnóstico inicial de Ciudadanía Digital";
    visor.src = formulario.incrustado;
    visor.loading = "lazy";
    visor.setAttribute("allowfullscreen", "");

    const acciones = document.createElement("div");
    acciones.className = "diagnostic-actions";
    const abrir = document.createElement("a");
    abrir.className = "primary-button";
    abrir.href = formulario.abrir;
    abrir.target = "_blank";
    abrir.rel = "noopener noreferrer";
    abrir.textContent = "Abrir el diagnóstico en otra pestaña →";
    acciones.appendChild(abrir);
    tarjeta.append(cabecera, visor, acciones);

    const qr = document.createElement("aside");
    qr.className = "diagnostic-card qr-card";
    qr.innerHTML = `
      <p class="eyebrow">Desde tu celular</p>
      <h4>Escanea el código QR</h4>
      <p>Abre la cámara de tu teléfono, apunta al código y toca el enlace que aparecerá.</p>
    `;

    const enlaceQr = document.createElement("a");
    enlaceQr.href = formulario.qrAbrir;
    enlaceQr.target = "_blank";
    enlaceQr.rel = "noopener noreferrer";
    enlaceQr.setAttribute("aria-label", "Abrir la imagen del código QR del diagnóstico");
    const imagenQr = document.createElement("img");
    imagenQr.src = formulario.qrImagen;
    imagenQr.alt = "Código QR para abrir el diagnóstico inicial de Ciudadanía Digital";
    imagenQr.loading = "lazy";
    enlaceQr.appendChild(imagenQr);

    const responder = document.createElement("a");
    responder.className = "primary-button";
    responder.href = formulario.abrir;
    responder.target = "_blank";
    responder.rel = "noopener noreferrer";
    responder.textContent = "Responder diagnóstico";
    qr.append(enlaceQr, responder);
    disposicion.append(tarjeta, qr);

    const aviso = document.createElement("p");
    aviso.className = "privacy-note";
    const etiqueta = document.createElement("strong");
    etiqueta.textContent = "Importante: ";
    aviso.append(etiqueta, semana.aviso);

    fragmento.append(introduccion, disposicion, aviso);
    return fragmento;
  }

  function crearMateriales(semana) {
    const fragmento = document.createDocumentFragment();

    if (semana.ruta) {
      const ruta = document.createElement("section");
      ruta.className = "ordered-resource";
      ruta.innerHTML = `
        <span class="resource-step" aria-label="Paso ${semana.ruta.orden}">${semana.ruta.orden}</span>
        <div>
          <p class="eyebrow">Comienza aquí</p>
          <h3>${semana.ruta.titulo}</h3>
          <p>${semana.ruta.descripcion}</p>
        </div>
      `;
      const abrirRuta = document.createElement("a");
      abrirRuta.className = "primary-button";
      abrirRuta.href = semana.ruta.abrir;
      abrirRuta.target = "_blank";
      abrirRuta.rel = "noopener noreferrer";
      abrirRuta.textContent = "Abrir ruta de aprendizaje";
      ruta.appendChild(abrirRuta);
      fragmento.appendChild(ruta);
    }

    const diapositivas = document.createElement("article");
    diapositivas.className = "slides-card";
    const cabecera = document.createElement("header");
    cabecera.className = "slides-card-header";
    cabecera.innerHTML = `
      <div class="slides-heading">
        <span class="resource-step" aria-label="Paso ${semana.diapositivas.orden}">${semana.diapositivas.orden}</span>
        <div>
          <p class="eyebrow">Presentación de clase</p>
          <h3>${semana.diapositivas.titulo}</h3>
          <p>${semana.diapositivas.descripcion}</p>
        </div>
      </div>
    `;
    const abrirDiapositivas = document.createElement("a");
    abrirDiapositivas.className = "primary-button";
    abrirDiapositivas.href = semana.diapositivas.abrir;
    abrirDiapositivas.target = "_blank";
    abrirDiapositivas.rel = "noopener noreferrer";
    abrirDiapositivas.textContent = "Abrir en otra pestaña";
    cabecera.appendChild(abrirDiapositivas);

    const marco = document.createElement("div");
    marco.className = "slides-frame";
    const visor = document.createElement("iframe");
    visor.src = semana.diapositivas.pdf;
    visor.title = `Diapositivas de la Semana ${semana.numero}: ${semana.diapositivas.titulo}`;
    visor.loading = "lazy";
    visor.setAttribute("allowfullscreen", "");
    marco.appendChild(visor);

    const ayuda = document.createElement("p");
    ayuda.className = "slides-help";
    ayuda.textContent = "Si el visor no aparece en tu dispositivo, utiliza el botón “Abrir en otra pestaña”.";
    diapositivas.append(cabecera, marco, ayuda);

    fragmento.appendChild(diapositivas);

    semana.materiales.forEach((recurso) => {
      const tarjeta = document.createElement("article");
      tarjeta.className = "week-resource-card";
      tarjeta.innerHTML = `
        <span class="resource-step" aria-label="Paso ${recurso.orden}">${recurso.orden}</span>
        <div>
          <p class="eyebrow">${recurso.tipo}</p>
          <h3>${recurso.titulo}</h3>
          <p>${recurso.descripcion}</p>
        </div>
      `;

      const enlace = document.createElement("a");
      enlace.className = "primary-button";
      enlace.href = recurso.abrir;
      enlace.target = "_blank";
      enlace.rel = "noopener noreferrer";
      enlace.textContent = recurso.boton;
      tarjeta.appendChild(enlace);

      if (recurso.spotify) {
        tarjeta.classList.add("podcast-card");
        const reproductor = document.createElement("iframe");
        reproductor.className = "podcast-player";
        reproductor.src = recurso.spotify;
        reproductor.title = `Podcast de la Semana ${semana.numero}: ${recurso.titulo}`;
        reproductor.loading = "lazy";
        reproductor.setAttribute("allow", "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture");
        tarjeta.appendChild(reproductor);
      }

      if (recurso.youtube) {
        tarjeta.classList.add("video-card");
        const reproductor = document.createElement("iframe");
        reproductor.className = "video-player";
        reproductor.src = recurso.youtube;
        reproductor.title = `Video de la Semana ${semana.numero}: ${recurso.titulo}`;
        reproductor.loading = "lazy";
        reproductor.referrerPolicy = "strict-origin-when-cross-origin";
        reproductor.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
        reproductor.setAttribute("allowfullscreen", "");
        tarjeta.appendChild(reproductor);
      }

      if (recurso.nota) {
        const nota = document.createElement("p");
        nota.className = "resource-note";
        nota.textContent = recurso.nota;
        tarjeta.appendChild(nota);
      }

      fragmento.appendChild(tarjeta);
    });

    return fragmento;
  }

  function mostrarSemana(indice) {
    const semana = semanasCiudadania[indice];
    numero.textContent = `Semana ${semana.numero}`;
    titulo.textContent = semana.titulo;
    descripcion.textContent = semana.descripcion;
    contenido.replaceChildren();

    if (semana.tipo === "formulario" && semana.formulario) {
      contenido.appendChild(crearFormulario(semana));
    }

    if (semana.tipo === "materiales" && semana.diapositivas) {
      contenido.appendChild(crearMateriales(semana));
    }

    [...menu.children].forEach((boton, posicion) => {
      const activo = posicion === indice;
      boton.classList.toggle("active", activo);
      boton.setAttribute("aria-pressed", activo ? "true" : "false");
    });
  }

  semanasCiudadania.forEach((semana, indice) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "week-menu-button";
    const numeroBoton = document.createElement("span");
    numeroBoton.textContent = `Semana ${semana.numero}`;
    const tituloBoton = document.createElement("strong");
    tituloBoton.textContent = semana.titulo;
    boton.append(numeroBoton, tituloBoton);
    boton.addEventListener("click", () => mostrarSemana(indice));
    menu.appendChild(boton);
  });

  mostrarSemana(0);
})();

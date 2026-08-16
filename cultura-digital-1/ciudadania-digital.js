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

  function mostrarSemana(indice) {
    const semana = semanasCiudadania[indice];
    numero.textContent = `Semana ${semana.numero}`;
    titulo.textContent = semana.titulo;
    descripcion.textContent = semana.descripcion;
    contenido.replaceChildren();

    if (semana.tipo === "formulario" && semana.formulario) {
      contenido.appendChild(crearFormulario(semana));
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

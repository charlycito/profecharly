(() => {
  const menu = document.querySelector("#menu-semanas");
  const numero = document.querySelector("#numero-semana");
  const titulo = document.querySelector("#titulo-semana");
  const descripcion = document.querySelector("#descripcion-semana");
  const preparacion = document.querySelector("#preparacion-semana");
  const preparacionTitulo = document.querySelector("#titulo-preparacion-semana");
  const preparacionDescripcion = document.querySelector("#descripcion-preparacion-semana");
  const preparacionLista = document.querySelector("#lista-preparacion-semana");
  const preparacionNota = document.querySelector("#nota-preparacion-semana");
  const preparacionEnlace = document.querySelector("#abrir-preparacion-semana");
  const tituloRuta = document.querySelector("#titulo-ruta-semana");
  const descripcionRuta = document.querySelector("#descripcion-ruta-semana");
  const abrirRuta = document.querySelector("#abrir-ruta-semana");
  const tituloDiapositivas = document.querySelector("#titulo-diapositivas");
  const descripcionDiapositivas = document.querySelector("#descripcion-diapositivas");
  const visorDiapositivas = document.querySelector("#visor-diapositivas");
  const abrirDiapositivas = document.querySelector("#abrir-diapositivas");
  const materiales = document.querySelector("#materiales-semana");

  if (!menu || !Array.isArray(semanasInnovacion) || semanasInnovacion.length === 0) return;

  function crearMaterial(recurso) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "innovation-card";

    const paso = document.createElement("span");
    paso.className = "resource-step";
    paso.textContent = recurso.orden;
    paso.setAttribute("aria-label", `Paso ${recurso.orden}`);

    const icono = document.createElement("div");
    icono.className = "innovation-card-icon";
    icono.setAttribute("aria-hidden", "true");
    icono.textContent = recurso.icono;

    const tipo = document.createElement("p");
    tipo.className = "eyebrow";
    tipo.textContent = recurso.tipo;

    const encabezado = document.createElement("h3");
    encabezado.textContent = recurso.titulo;

    const texto = document.createElement("p");
    texto.textContent = recurso.descripcion;

    tarjeta.append(paso, icono, tipo, encabezado, texto);

    if (recurso.nota) {
      const nota = document.createElement("p");
      nota.className = `resource-note ${recurso.claseNota || ""}`.trim();
      nota.textContent = recurso.nota;
      tarjeta.appendChild(nota);
    }

    const enlace = document.createElement("a");
    enlace.className = "primary-button";
    enlace.href = recurso.abrir;
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";
    enlace.textContent = recurso.boton;
    tarjeta.appendChild(enlace);

    return tarjeta;
  }

  function mostrarSemana(indice) {
    const semana = semanasInnovacion[indice];

    numero.textContent = `Semana ${semana.numero}`;
    titulo.textContent = semana.titulo;
    descripcion.textContent = semana.descripcion;

    if (semana.preparacion) {
      preparacion.hidden = false;
      preparacionTitulo.textContent = semana.preparacion.titulo;
      preparacionDescripcion.textContent = semana.preparacion.descripcion;
      preparacionLista.replaceChildren(...semana.preparacion.lista.map(elemento => {
        const item = document.createElement("li");
        item.textContent = elemento;
        return item;
      }));
      preparacionNota.textContent = semana.preparacion.nota;
      preparacionEnlace.href = semana.preparacion.abrir;
      preparacionEnlace.textContent = semana.preparacion.boton;
    } else {
      preparacion.hidden = true;
      preparacionLista.replaceChildren();
      preparacionEnlace.removeAttribute("href");
    }

    tituloRuta.textContent = semana.ruta.titulo;
    descripcionRuta.textContent = semana.ruta.descripcion;
    abrirRuta.href = semana.ruta.abrir;

    tituloDiapositivas.textContent = `Diapositivas: ${semana.diapositivas.titulo}`;
    descripcionDiapositivas.textContent = semana.diapositivas.descripcion;
    visorDiapositivas.src = semana.diapositivas.pdf;
    visorDiapositivas.title = `Diapositivas de la Semana ${semana.numero}: ${semana.diapositivas.titulo}`;
    abrirDiapositivas.href = semana.diapositivas.abrir;

    materiales.replaceChildren(...semana.materiales.map(crearMaterial));

    [...menu.children].forEach((boton, posicion) => {
      const activo = posicion === indice;
      boton.classList.toggle("active", activo);
      boton.setAttribute("aria-pressed", activo ? "true" : "false");
    });
  }

  semanasInnovacion.forEach((semana, indice) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "week-menu-button";
    boton.innerHTML = `<span>Semana ${semana.numero}</span><strong>${semana.titulo}</strong>`;
    boton.addEventListener("click", () => mostrarSemana(indice));
    menu.appendChild(boton);
  });

  mostrarSemana(0);
})();

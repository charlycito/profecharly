(() => {
  const panel = document.querySelector("#aviso-activo");
  const dots = document.querySelector("#indicadores-avisos");
  if (!panel || !dots || !Array.isArray(avisos) || avisos.length === 0) return;
  let current = 0;
  let timer;

  function show(index) {
    current = (index + avisos.length) % avisos.length;
    const item = avisos[current];
    panel.innerHTML = `<span class="notice-category">${item.categoria}</span><h3>${item.titulo}</h3><p>${item.mensaje}</p>`;
    [...dots.children].forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
      dot.setAttribute("aria-current", i === current ? "true" : "false");
    });
  }

  function restart() {
    window.clearInterval(timer);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) timer = window.setInterval(() => show(current + 1), 6500);
  }

  avisos.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Mostrar aviso ${i + 1}`);
    dot.addEventListener("click", () => { show(i); restart(); });
    dots.appendChild(dot);
  });
  document.querySelector(".carousel-button.previous").addEventListener("click", () => { show(current - 1); restart(); });
  document.querySelector(".carousel-button.next").addEventListener("click", () => { show(current + 1); restart(); });
  show(0);
  restart();
})();

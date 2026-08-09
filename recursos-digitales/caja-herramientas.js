(() => {
  const tools = ['mapas-conceptuales', 'apa7', 'accesos-buap'];
  const panels = [...document.querySelectorAll('[data-tool-panel]')];
  const links = [...document.querySelectorAll('[data-tool-link]')];
  let apaLoaded = false;
  let accessLoaded = false;

  async function loadApa() {
    if (apaLoaded) return;
    const target = document.querySelector('[data-tool-panel="apa7"]');
    try {
      const response = await fetch('apa7.html');
      if (!response.ok) throw new Error('No fue posible cargar el recurso');
      const html = await response.text();
      const page = new DOMParser().parseFromString(html, 'text/html');
      const main = page.querySelector('main');
      if (!main) throw new Error('Contenido no disponible');
      target.innerHTML = main.innerHTML;
      target.querySelectorAll('a[href^="#"]').forEach(link => {
        const anchor = link.getAttribute('href').slice(1);
        link.addEventListener('click', event => {
          const destination = target.querySelector(`#${CSS.escape(anchor)}`);
          if (!destination) return;
          event.preventDefault();
          destination.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
      const script = document.createElement('script');
      script.src = 'apa7.js';
      script.onload = () => { apaLoaded = true; };
      document.body.appendChild(script);
    } catch (error) {
      target.innerHTML = '<div class="section-shell tool-loading tool-error"><p>No se pudo cargar la guía. Intenta actualizar la página.</p></div>';
    }
  }

  async function loadAccess() {
    if (accessLoaded) return;
    const target = document.querySelector('[data-tool-panel="accesos-buap"]');
    try {
      const response = await fetch('accesos-buap.html');
      if (!response.ok) throw new Error('No fue posible cargar el recurso');
      const html = await response.text();
      const page = new DOMParser().parseFromString(html, 'text/html');
      const main = page.querySelector('main');
      if (!main) throw new Error('Contenido no disponible');
      target.innerHTML = main.innerHTML;
      const script = document.createElement('script');
      script.src = 'accesos-buap.js';
      script.onload = () => { accessLoaded = true; };
      document.body.appendChild(script);
    } catch (error) {
      target.innerHTML = '<div class="section-shell tool-loading tool-error"><p>No se pudo cargar la guía. Intenta actualizar la página.</p></div>';
    }
  }

  async function showTool(name, scroll = false) {
    const selected = tools.includes(name) ? name : 'mapas-conceptuales';
    if (selected === 'apa7') await loadApa();
    if (selected === 'accesos-buap') await loadAccess();
    panels.forEach(panel => { panel.hidden = panel.dataset.toolPanel !== selected; });
    links.forEach(link => {
      const active = link.dataset.toolLink === selected;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    document.title = selected === 'apa7'
      ? 'Citas y referencias APA 7 | Profe Charly'
      : selected === 'accesos-buap'
        ? 'Recupera tus accesos BUAP | Profe Charly'
        : 'Mapas conceptuales | Profe Charly';
    if (scroll) document.querySelector(`[data-tool-panel="${selected}"]`).scrollIntoView({ behavior:'smooth', block:'start' });
  }

  function route(scroll = false) {
    showTool(location.hash.slice(1), scroll);
  }

  links.forEach(link => link.addEventListener('click', event => {
    const name = link.dataset.toolLink;
    if (!tools.includes(name)) return;
    event.preventDefault();
    history.pushState(null, '', `#${name}`);
    showTool(name, true);
  }));
  addEventListener('popstate', () => route(true));
  route(false);
})();

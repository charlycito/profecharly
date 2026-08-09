(() => {
  const root = document.querySelector('[data-tool-panel="accesos-buap"]');
  if (!root || root.dataset.initialized === 'true') return;
  root.dataset.initialized = 'true';

  const tabs = [...root.querySelectorAll('[data-access-tab]')];
  const panels = [...root.querySelectorAll('[data-access-panel]')];
  tabs.forEach(tab => tab.addEventListener('click', () => {
    const selected = tab.dataset.accessTab;
    tabs.forEach(item => {
      const active = item === tab;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
    });
    panels.forEach(panel => {
      const active = panel.dataset.accessPanel === selected;
      panel.classList.toggle('active', active);
      panel.hidden = !active;
    });
    root.querySelector(`[data-access-panel="${selected}"]`).scrollIntoView({behavior:'smooth', block:'start'});
  }));

  const form = root.querySelector('#access-mail-form');
  const output = root.querySelector('#mail-output');
  const fields = {
    name: root.querySelector('#student-name'), id: root.querySelector('#student-id'),
    service: root.querySelector('#affected-service'), contact: root.querySelector('#alternate-contact'),
    problem: root.querySelector('#problem-description')
  };
  const clean = (value, fallback) => value.trim() || fallback;
  function updateMail() {
    output.textContent = `Estimado equipo de soporte de DCyTIC:\n\nMi nombre es ${clean(fields.name.value, '[nombre completo]')}, matrícula ${clean(fields.id.value, '[matrícula]')}, estudiante de la Preparatoria Amozoc del Complejo Regional Centro.\n\nSolicito su apoyo porque ${clean(fields.problem.value, '[describe aquí el problema]')}. No puedo ingresar a ${fields.service.value}.\n\nAdjunto una captura de pantalla del problema y una fotografía de mi credencial de estudiante para acreditar mi identidad.\n\nAgradezco de antemano su atención y quedo pendiente de su respuesta.\n\nAtentamente,\n${clean(fields.name.value, '[nombre completo]')}\n${clean(fields.contact.value, '[medio alternativo de contacto]')}`;
  }
  form.addEventListener('input', updateMail);
  updateMail();
  root.querySelector('#copy-access-mail').addEventListener('click', async () => {
    const status = root.querySelector('#copy-access-status');
    try { await navigator.clipboard.writeText(`Asunto: Solicitud de recuperación de acceso al correo institucional\n\n${output.textContent}`); status.textContent = 'Correo copiado. Revísalo antes de enviarlo.'; }
    catch { status.textContent = 'No fue posible copiarlo automáticamente. Selecciona el texto y cópialo manualmente.'; }
  });
})();

(() => {
  const tabs = [...document.querySelectorAll('[data-teams-tab]')];
  const panels = [...document.querySelectorAll('[data-teams-panel]')];
  const checks = [...document.querySelectorAll('.teams-checklist input[type="checkbox"]')];
  const count = document.getElementById('teams-check-count');
  const message = document.getElementById('teams-check-message');

  tabs.forEach(tab => tab.addEventListener('click', () => {
    const selected = tab.dataset.teamsTab;
    tabs.forEach(item => {
      const active = item === tab;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
    });
    panels.forEach(panel => {
      const active = panel.dataset.teamsPanel === selected;
      panel.hidden = !active;
      panel.classList.toggle('active', active);
    });
  }));

  function updateChecklist() {
    const completed = checks.filter(check => check.checked).length;
    count.textContent = `${completed} de ${checks.length}`;
    message.textContent = completed === checks.length
      ? '¡Listo! Tu tarea está entregada y comprobada.'
      : 'Completa la lista antes de cerrar Teams.';
  }

  checks.forEach(check => check.addEventListener('change', updateChecklist));
  updateChecklist();
})();

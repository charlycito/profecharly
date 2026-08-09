(() => {
  const tabs = [...document.querySelectorAll('[data-teams-tab]')];
  const panels = [...document.querySelectorAll('[data-teams-panel]')];
  const checks = [...document.querySelectorAll('.teams-checklist input[type="checkbox"]')];
  const count = document.getElementById('teams-check-count');
  const message = document.getElementById('teams-check-message');
  const modal = document.getElementById('teams-infographic-modal');
  const modalFrame = document.getElementById('teams-infographic-frame');
  const modalTitle = document.getElementById('teams-infographic-title');

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

  document.querySelectorAll('[data-infographic-open]').forEach(button => {
    button.addEventListener('click', () => {
      modalFrame.src = button.dataset.infographicOpen;
      modalTitle.textContent = button.dataset.infographicTitle;
      modal.showModal();
    });
  });

  document.querySelector('[data-infographic-close]')?.addEventListener('click', () => modal.close());
  modal?.addEventListener('click', event => {
    if (event.target === modal) modal.close();
  });
  modal?.addEventListener('close', () => {
    modalFrame.src = '';
  });
})();

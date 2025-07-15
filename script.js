function desbloquear(id) {
  const siguiente = document.getElementById(id);
  if (siguiente) {
    siguiente.classList.remove('bloqueado');
    siguiente.scrollIntoView({ behavior: 'smooth' });
  }
}

// Botão "Copiar e-mail": só aparece se o navegador permitir copiar.
document.addEventListener('DOMContentLoaded', () => {
  const botao = document.querySelector('[data-copiar]');
  const aviso = document.querySelector('.copiado');
  if (!botao || !navigator.clipboard) return;

  botao.hidden = false;
  botao.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(botao.dataset.copiar);
      aviso.textContent = 'E-mail copiado.';
    } catch {
      aviso.textContent = 'Não foi possível copiar. Selecione o endereço e copie manualmente.';
    }
    setTimeout(() => { aviso.textContent = ''; }, 4000);
  });
});

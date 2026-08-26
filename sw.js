// Nome do cache (mesmo vazio, é bom declarar para validação do navegador)
const CACHE_NAME = 'my-pfm-cache-v1';

// Evento de Instalação: Obrigatório para o PWA ser instalável
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Evento de Ativação: Limpa caches antigos e assume o controle imediatamente
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Evento de Interceptação de Requisições (Fetch)
self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // REGRA DE SEGURANÇA PARA STREAMLIT: 
  // Ignora completamente WebSockets (_stcore/stream) e requisições que não sejam GET (como POST de dados)
  if (
    url.includes('_stcore/stream') || 
    event.request.method !== 'GET' ||
    url.includes('authkit.streamlit.io')
  ) {
    return; // Deixa o navegador tratar nativamente fora do Service Worker
  }

  // Para requisições comuns de navegação, envia direto para a rede
  event.respondWith(
    fetch(event.request).catch(() => {
      // Caso o usuário esteja totalmente offline, tenta buscar do cache apenas como última alternativa
      return caches.match(event.request);
    })
  );
});

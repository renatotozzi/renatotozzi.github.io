# renatotozzi.github.io

Shell PWA do My PFM, hospedado no GitHub Pages. O Streamlit é incorporado
no iframe `streamlit-app` de `index.html`.

Para compartilhar PDFs do extrato, o iframe delega `web-share` ao app e
permite `allow-downloads` no sandbox para o fallback de download. A decisão
final de suporte continua sendo do Safari/iOS. Não é necessário remover o
sandbox para habilitar esses recursos.

O cache do shell passa a `my-pfm-shell-v13` para substituir a cópia anterior.
Depois de publicar, feche e reabra o PWA conectado à internet para que o
service worker receba a atualização; uma página já aberta precisa recarregar
para usar os novos atributos do iframe.

Teste no iPhone: gerar o extrato, tocar em **📤 Compartilhar**, enviar o PDF
ao WhatsApp/Arquivos e cancelar o compartilhamento. Se o navegador não oferecer
compartilhamento de arquivos, o app mostra **⬇️ Baixar PDF**. Confira também o
Safari direto para verificar que o fluxo existente continua funcionando.

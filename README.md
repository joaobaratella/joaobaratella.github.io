# joaobaratella.github.io

Portfólio de João Pedro Baratella Mattos, estudante de Sistemas de Informação na USP (ICMC, São Carlos).

Site publicado em: https://joaobaratella.github.io

## O que tem no site

- Apresentação curta e um diagrama do processo de confirmação de recebimentos antes e depois da automação.
- Experiência em projetos, no formato ponto de partida, o que fiz e resultado.
- Habilidades, formação, certificações e contato.

## Como foi feito

- HTML, CSS e um pouco de JavaScript puro. Sem framework e sem etapa de build.
- Fontes hospedadas no próprio repositório: Schibsted Grotesk e Source Serif 4 (licença SIL Open Font License).
- Publicado com GitHub Pages.

## Estrutura

```
index.html            página única do portfólio
404.html              página de endereço não encontrado
assets/css/style.css  estilos (cores e tipografia definidas no topo do arquivo)
assets/js/main.js     botão "Copiar e-mail"
assets/fonts/         fontes em woff2
assets/img/           ícones e imagem de prévia para redes sociais
```

## Rodar localmente

```
python -m http.server 8000
```

Depois, abra http://localhost:8000 no navegador. Abrir o `index.html` direto pelo explorador de arquivos também funciona, mas as fontes não carregam por restrição do navegador.

## Privacidade

O site não contém credenciais, extratos nem dados de clientes. O código da automação de recebimentos é privado porque usa dados financeiros reais.

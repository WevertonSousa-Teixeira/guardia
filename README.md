# Guardiãs dos Saberes — HTML, CSS e JavaScript puros

Esta pasta contém a versão completa do site sem React, TypeScript, Python, Node.js ou banco de dados. O catálogo, as buscas, filtros, fichas de planta, QR Codes, estados de áudio, página das guardiãs e trajetória de Graziela funcionam apenas com arquivos estáticos.

## Estrutura da pasta

| Arquivo ou pasta | Finalidade |
|---|---|
| `index.html` | Página inicial e catálogo de plantas |
| `guardias.html` | Página das guardiãs e perfis modelo |
| `graziela.html` | Página da trajetória de Graziela Barroso |
| `404.html` | Página para links não encontrados |
| `css/style.css` | Cores, layout e responsividade |
| `js/app.js` | Dados de plantas e guardiãs, filtros, modais, QR Codes e interações |
| `assets/` | Todas as imagens utilizadas pelo site |

## Como abrir no Visual Studio Code

Abra esta pasta no VS Code. Em seguida, instale a extensão **Live Server**, clique com o botão direito no arquivo `index.html` e escolha **Open with Live Server**. O navegador abrirá um endereço como `http://127.0.0.1:5500`.

Também é possível abrir `index.html` diretamente no navegador, mas o Live Server é recomendado para testar links e arquivos locais.

## Onde editar plantas

Abra `js/app.js` e localize o comentário `1. PLANTAS DO CATÁLOGO`. O array `PLANTS` possui uma ficha para cada planta. Copie um objeto completo, cole antes do `]` final e altere nome, nome científico, foto, descrição, guardiã e áudio.

```js
{
  id: "hortela",
  name: "Hortelã",
  scientific: "Mentha spicata",
  family: "Lamiaceae",
  category: "Aromáticas",
  image: "assets/hortela.jpg",
  description: "Texto revisado sobre a planta.",
  status: "Ficha em revisão",
  statusTone: "warm",
  uses: "Memória e território — relato cultural",
  audioSrc: null,
  guardianName: null,
},
```

Para habilitar um áudio autorizado, coloque o arquivo MP3 dentro de `assets/` e altere `audioSrc` para, por exemplo, `"assets/relato-hortela.mp3"`.

## Onde editar guardiãs

No mesmo arquivo `js/app.js`, localize o comentário `2. PERFIS MODELO DAS GUARDIÃS`. O array `MODEL_PROFILES` reúne os cartões completos. Para criar outra guardiã, copie um perfil inteiro e altere os dados.

> Os três perfis atuais são ilustrativos. Substitua nomes, imagens e histórias por conteúdos reais somente após autorização de publicação.

## Como publicar na Netlify

1. Crie uma conta na Netlify.
2. Escolha **Add new site > Deploy manually**.
3. Arraste esta pasta inteira ou o conteúdo dela para a área de envio.
4. A Netlify publicará o site sem exigir comando de build.

Outra opção é enviar esta pasta para o GitHub e conectá-la à Netlify. O arquivo `netlify.toml` já está pronto e os links `/guardias` e `/graziela` serão redirecionados às páginas corretas.

## Atenção a imagens e histórias reais

Use fotos, nomes, vozes e relatos de guardiãs reais somente com autorização. A fotografia de Graziela possui crédito visível na página: `JBRJ / Arquivo Graziela Maciel Barroso · via Revista Pesquisa FAPESP`.

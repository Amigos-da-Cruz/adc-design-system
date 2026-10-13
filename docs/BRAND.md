Sistema visual e editorial dos Amigos da Cruz, apostolado católico tradicional em Portugal. Serve três superfícies com a mesma identidade: a editora (missais, ordinários, livros devocionais), o blog de notícias e os carrosséis de Instagram. Escreve tudo em português de Portugal.

## Voz e conteúdo

- Escreve como uma pessoa culta e convicta, não como um copywriter. Tom sóbrio, declarativo, rigoroso. Sem pontos de exclamação, sem linguagem de marketing ou de coaching ("descubra", "não perca", "segredo").
- Nunca uses "você" em contexto formal. Cartas e comunicação institucional usam registo medido e diplomático, sem confrontar.
- Usa a terminologia litúrgica com exatidão: féria, comemoração, santoral, rubricas, numeração dos domingos depois do Pentecostes.
- Facto primeiro. Verifica toda a afirmação histórica antes de a escrever e separa o que está documentado do que é tradição piedosa: marca com a etiqueta `adc-tag--documentado` ou `adc-tag--tradicao`. Dá preferência a fontes primárias e académicas.
- Todo o artigo de notícia termina com `SourceBox`. Uma notícia leva `adc-tag--noticia`; um texto de opinião leva `adc-tag--comentario`. Nunca deixes o leitor adivinhar qual é qual.
- Títulos de slide e de capa abrem com uma pergunta ou uma afirmação que obrigue a ler; títulos de artigo e de livro descrevem. O texto do post acrescenta ao do slide, nunca o repete.
- Slides curtos. Um slide, uma ideia, no máximo cerca de 30 palavras no corpo.
- Elimina os padrões de escrita de máquina: contrastes "não é X, é Y", enumerações de três, fechos formulaicos, sequências de frases telegráficas.

## Cor

- Fundo de página, de slide e de capa de papel: `surface` (branco). Cartões e campos: `surface-raised`. Painéis de apoio: `surface-sunken`.
- Texto: `ink` no corpo, `ink-muted` em datas, autoria e legendas. Nada de preto puro.
- `brand` (Carmesim) é a cor de ação e de identidade: botões primários, ligações, rubricas, versais, blocos de capa. Texto e logótipo sobre `brand` usam `on-brand`.
- `ornament` (Ouro) só decora: filetes, divisores, molduras. Não o uses em texto nem em nada que carregue sentido, porque sobre branco dá apenas 2,8:1. Para texto pequeno de acento usa `accent-text`.
- Conteúdo dedicado a Nossa Senhora vai no tema mariano: põe `data-theme="mariano"` no contentor e as mesmas classes passam a Azul profundo com acentos de prata. Não misturas os dois temas dentro do mesmo bloco. Fora do tema, usa `azul-mariano` apenas em capas e blocos de marca.
- Estados de erro e sucesso não existem ainda: quando forem precisos (formulários da editora), cria-os com texto e ícone, nunca só com verde e vermelho.

## Tipografia

- Títulos em Playfair Display (`display-xl`, `display-lg`, `display-md`, `citacao`). Texto corrido em Libre Baskerville (`lede`, `body-lg`, `body`, `body-sm`, `rubrica`). Apoio e interface em Jost (`label`, `button`, `caption`). Inscrições e categorias em Cinzel (`eyebrow`, `inscricao`).
- Carrega as quatro famílias do Google Fonts; `bundle.css` já o faz. Cinzel é só maiúsculas: não o uses em frases longas.
- Em artigos usa `body-lg` com largura máxima `measure-text` (66 caracteres). Em ecrã, nunca abaixo de 16px para texto corrido.
- Uma só família de títulos por peça. A Michelangelus (fonte da Microsoft) não faz parte do sistema; se vier a ser usada, é só como fonte de destaque em documentos Word.

## Espaço, forma e ornamento

- Escala `space-1` a `space-9`; margem de slide `space-7`; padding de cartão `space-5`.
- Cantos quase retos: `radius-sm` por defeito, `radius-0` em capas de livro, slides e imagens. Nada de cantos grandes.
- Separa por filetes (`line`), não por sombras. A única sombra é `shadow-raised`, para capas de livro e cartões levantados.
- Sem gradientes, sem emojis, sem ícones decorativos, sem cartões com barra de cor ao lado. A beleza serve a mensagem: se um ornamento não ensina nem honra, tira-o.
- O ornamento do sistema é o divisor (`adc-divider`): dois filetes em `ornament` e um losango. Usa-o entre secções e à volta de citações.

## Logotipo

- A cruz trilobada com o Sagrado Coração em medalhão tem duas versões em `assets/Logotipo`: `logo-adc-carmesim.svg` sobre fundos claros (branco e superfícies) e `logo-adc-pergaminho.svg` sobre `brand`.
- São imagens a duas tonalidades: carrega-as com `<img>`, não incluas o SVG inline nem lhes mudes a cor.
- Largura mínima 24px em ecrã e 12mm em papel. Reserva à volta uma margem livre de um quarto da largura. Não rodes, não deformes, não lhe ponhas sombra nem moldura.
- O Sagrado Coração perde-se abaixo da largura mínima: abaixo dela mostra só o nome em `inscricao`.

## Editora

- Capas de livro: bloco `brand` em `radius-0` com moldura `ornament` e o logótipo `on-brand`; título em `display-lg`, colecção em `eyebrow`. Usa `BookCard` em listagens.
- Em missais e ordinários, as rubricas compõem-se em `rubrica` na cor `brand`, o texto a recitar em `body`, e a abertura de cada parte leva versal (`adc-versal`). Marca versículo e resposta com `V.` e `R.` em `brand` (`Rubric`).
- Texto de livro: Libre Baskerville, entrelinha de 1,6 ou mais, justificado só se houver hifenização correta em português.

## Blog

- Estrutura de um artigo: `ArticleHeader` (etiqueta de tipo, eyebrow de categoria, título, entrada, autoria e data), corpo em `adc-prose`, `SourceBox` no fim. Citações em destaque usam `blockquote` dentro de `adc-prose` e levam sempre autor e fonte.
- Listagens usam `ArticleCard` em grelha até `measure-page`. Um artigo de notícia nunca tem imagem decorativa; usa imagem só quando documenta.

## Redes sociais

- Carrossel: 1080 × 1350 (4:5), desenhado a 540 × 675. Slide de capa em `brand`, slides de conteúdo em `surface`. Rodapé com o logótipo e o nome da conta (`@amigosdacruz.pt`).
- Ver `Slide`.

## Acessibilidade

- Texto sobre as superfícies cumpre 4,5:1 ou mais nos dois temas. O anel de foco é `focus`, sólido, 3px.
- O tipo de etiqueta distingue-se também pela forma (cheia, contornada, a cheio com filete, tracejada), nunca só pela cor.

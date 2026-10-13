# ADC Design System

Design system dos **Amigos da Cruz**: tokens, componentes React e Storybook. Serve a editora (missais, ordinários, livros devocionais), o blog de notícias e os carrosséis de Instagram.

## Começar

```bash
npm install
npm run dev              # Storybook em http://localhost:6006
npm run build            # biblioteca em dist/
npm run build-storybook  # site estático em storybook-static/
```

Requer Node 22+.

## Estrutura

```
tokens/tokens.json        fonte única de verdade (cores, tipo, espaço, forma)
scripts/build-tokens.mjs  gera src/styles/tokens.css a partir dos tokens
src/styles/               tokens.css (gerado), components.css, fonts.ts
src/components/           um componente + stories por pasta
docs/                     BRAND.md (livro de marca) e páginas MDX do Storybook
.github/workflows/        CI e publicação do Storybook no GitHub Pages
```

## Regras

- **Os tokens mudam só em `tokens/tokens.json`.** Correr `npm run tokens` e fazer commit do `tokens.css` gerado; o CI falha se estiver desactualizado.
- Dois temas: `claro` (por defeito) e `mariano` (só para conteúdo mariano). Aplicam-se com `<Adc tema="mariano">`.
- Sem cantos recortados, sem fundos em pergaminho. Ver `docs/BRAND.md`.
- Texto sempre em português de Portugal.

## Usar noutro projecto

```tsx
import './fonts'; // reexporta os @fontsource usados, ver src/styles/fonts.ts
import { Adc, Button } from 'adc-design-system';
import 'adc-design-system/style.css';

<Adc tema="claro"><Button href="/obras">Ver obras</Button></Adc>
```

As fontes não vão dentro da biblioteca: instalar os pacotes `@fontsource/*` e importá-los na aplicação.

## Publicar o Storybook

Em *Settings → Pages* escolher *GitHub Actions* como origem. Cada push para `main` publica em `https://<utilizador>.github.io/<repo>/`.

## Limitações conhecidas

- O logótipo é uma vectorização do PNG fornecido. Substituir por vector original quando existir.
- O Figma e o Artifact do Claude Design são cópias deste sistema: alterações aqui **não** se propagam automaticamente.
- Pacote não publicado em npm (`private: true`) e sem `.d.ts` gerados; falta `vite-plugin-dts` para o consumir como dependência.

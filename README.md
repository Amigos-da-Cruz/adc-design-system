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
src/styles/               tokens.css (gerado), components.css, index.css (inclui fontes)
src/components/           um componente + stories por pasta
docs/                     BRAND.md (livro de marca) e páginas MDX do Storybook
.github/workflows/        CI, publicação do pacote e Storybook no GitHub Pages
```

## Regras

- **Os tokens mudam só em `tokens/tokens.json`.** Correr `npm run tokens` e fazer commit do `tokens.css` gerado; o CI falha se estiver desactualizado.
- Dois temas: `claro` (por defeito) e `mariano` (só para conteúdo mariano). Aplicam-se com `<Adc tema="mariano">`.
- Sem cantos recortados, sem fundos em pergaminho. Ver `docs/BRAND.md`.
- Texto sempre em português de Portugal.

## Usar noutro projecto

O pacote está no GitHub Packages, sob o âmbito `@amigos-da-cruz`. No projecto consumidor, acrescentar uma `.npmrc` sem credenciais:

```ini
@amigos-da-cruz:registry=https://npm.pkg.github.com
```

Para instalar localmente, autenticar com um personal access token **classic** com `read:packages` e acesso ao pacote:

```bash
npm login --scope=@amigos-da-cruz --auth-type=legacy --registry=https://npm.pkg.github.com
npm install @amigos-da-cruz/adc-design-system
```

Em GitHub Actions, dar ao repositório consumidor acesso **Read** em *Package settings → Manage Actions access*. O workflow consumidor pode então usar `actions/setup-node` com `registry-url: https://npm.pkg.github.com`, `permissions: { contents: read, packages: read }` e `NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}` no passo `npm ci`.

```tsx
import { Adc, Button } from '@amigos-da-cruz/adc-design-system';
import '@amigos-da-cruz/adc-design-system/style.css';

<Adc tema="claro"><Button href="/obras">Ver obras</Button></Adc>
```

O CSS publicado inclui as fontes e os dois temas. A aplicação deve usar React 19 e importar o CSS uma vez na sua entrada.

## Publicar o pacote

1. Alterar a versão em `package.json` e `package-lock.json` (por exemplo, `npm version patch --no-git-tag-version`).
2. Fazer commit, criar a tag `v<versão>` (por exemplo, `v0.1.0`) e enviá-la para o GitHub. O workflow `publish-package.yml` valida a tag, compila o pacote e publica-o em GitHub Packages com `GITHUB_TOKEN`.
3. Na primeira publicação, confirmar nas definições do pacote a visibilidade pretendida e conceder acesso de leitura aos repositórios consumidores.

O registo aceita apenas versões novas. Não reutilizar uma tag ou versão já publicada.

## Publicar o Storybook

Em *Settings → Pages* escolher *GitHub Actions* como origem. Cada push para `main` publica em `https://<utilizador>.github.io/<repo>/`.

## Limitações conhecidas

- O logótipo é uma vectorização do PNG fornecido. Substituir por vector original quando existir.
- O Figma e o Artifact do Claude Design são cópias deste sistema: alterações aqui **não** se propagam automaticamente.

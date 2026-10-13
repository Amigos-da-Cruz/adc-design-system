// Gera src/styles/tokens.css a partir de tokens/tokens.json (fonte única de verdade).
import { readFileSync, writeFileSync } from 'node:fs';

const tok = JSON.parse(readFileSync(new URL('../tokens/tokens.json', import.meta.url), 'utf8'));
const themes = tok.color.themes.map((t) => t.id);
const out = ['/* GERADO por scripts/build-tokens.mjs — não editar à mão. */'];

const colorDecl = (theme) =>
  tok.color.tokens
    .map((t) => {
      let v = t.value;
      if (typeof v === 'object') v = v[theme] ?? v[themes[0]];
      const alias = /^\{(.+)\}$/.exec(v);
      return `--${t.name}:${alias ? `var(--${alias[1]})` : v};`;
    })
    .join('');

out.push(`:root,[data-theme="${themes[0]}"]{${colorDecl(themes[0])}}`);
for (const th of themes.slice(1)) out.push(`[data-theme="${th}"]{${colorDecl(th)}}`);

const root = [];
for (const fam of ['spacing', 'radius', 'shadow', 'measure'])
  for (const t of tok[fam].tokens) root.push(`--${t.name}:${t.value};`);
for (const [k, v] of Object.entries(tok.type.families)) root.push(`--font-${k}:${v};`);
out.push(`:root{${root.join('')}}`);

for (const g of tok.type.groups)
  for (const s of g.styles) {
    let d = `font-family:var(--font-${g.family});font-size:${s.fontSize};line-height:${s.lineHeight};font-weight:${s.fontWeight};`;
    if (s.letterSpacing) d += `letter-spacing:${s.letterSpacing};`;
    if (s.fontStyle) d += `font-style:${s.fontStyle};`;
    out.push(`.${s.name}{${d}}`);
  }

writeFileSync(new URL('../src/styles/tokens.css', import.meta.url), out.join('\n') + '\n');
console.log(`tokens.css: ${tok.color.tokens.length} cores × ${themes.length} temas`);

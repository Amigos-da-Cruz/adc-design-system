import tokens from '../../tokens/tokens.json';

type Tok = { name: string; value: string | Record<string, string>; role?: string; description?: string };

export function ColorTable() {
  const themes: { id: string; name?: string }[] = tokens.color.themes;
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%', fontFamily: 'var(--font-support)', fontSize: 14 }}>
      <thead>
        <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--line-strong)' }}>
          <th style={{ padding: 8 }}>Token</th>
          {themes.map((t) => <th key={t.id} style={{ padding: 8 }}>{t.id}</th>)}
        </tr>
      </thead>
      <tbody>
        {(tokens.color.tokens as Tok[]).map((t) => (
          <tr key={t.name} style={{ borderBottom: '1px solid var(--line)' }}>
            <td style={{ padding: 8 }}><code>--{t.name}</code></td>
            {themes.map((th) => {
              const raw = typeof t.value === 'object' ? t.value[th.id] ?? t.value[themes[0].id] : t.value;
              const alias = /^\{(.+)\}$/.exec(raw);
              return (
                <td key={th.id} style={{ padding: 8 }}>
                  <span style={{ display: 'inline-block', width: 20, height: 20, verticalAlign: 'middle', marginRight: 8, border: '1px solid var(--line-strong)', background: alias ? `var(--${alias[1]})` : raw }} />
                  <code>{alias ? `{${alias[1]}}` : raw}</code>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function TypeSpecimens() {
  return (
    <div>
      {tokens.type.groups.map((g: any) => (
        <section key={g.family} style={{ marginBottom: 32 }}>
          <h3 style={{ fontFamily: 'var(--font-support)' }}>{g.family}</h3>
          {g.styles.map((s: any) => (
            <div key={s.name} style={{ display: 'flex', gap: 24, alignItems: 'baseline', borderBottom: '1px solid var(--line)', padding: '8px 0' }}>
              <code style={{ width: 130, flex: 'none', fontSize: 12 }}>.{s.name}</code>
              <span className={s.name}>Amigos da Cruz</span>
              <small style={{ marginLeft: 'auto', color: 'var(--ink-muted)' }}>{s.fontSize} / {s.lineHeight}</small>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

export function ScaleTable({ familia }: { familia: 'spacing' | 'radius' | 'measure' }) {
  const rows = (tokens as any)[familia].tokens as Tok[];
  return (
    <table style={{ borderCollapse: 'collapse', fontFamily: 'var(--font-support)', fontSize: 14 }}>
      <tbody>
        {rows.map((t) => (
          <tr key={t.name} style={{ borderBottom: '1px solid var(--line)' }}>
            <td style={{ padding: 8 }}><code>--{t.name}</code></td>
            <td style={{ padding: 8 }}>{String(t.value)}</td>
            <td style={{ padding: 8 }}>
              {familia === 'spacing' && <span style={{ display: 'block', height: 12, width: `var(--${t.name})`, background: 'var(--brand)' }} />}
              {familia === 'radius' && <span style={{ display: 'block', height: 32, width: 32, border: '2px solid var(--brand)', borderRadius: `var(--${t.name})` }} />}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

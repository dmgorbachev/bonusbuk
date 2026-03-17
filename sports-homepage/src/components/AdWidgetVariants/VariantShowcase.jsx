import s from './variants.module.css';
import AdWidgetVariant01 from './AdWidgetVariant01';
import AdWidgetVariant02 from './AdWidgetVariant02';
import AdWidgetVariant03 from './AdWidgetVariant03';
import AdWidgetVariant04 from './AdWidgetVariant04';
import AdWidgetVariant05 from './AdWidgetVariant05';
import AdWidgetVariant06 from './AdWidgetVariant06';
import AdWidgetVariant07 from './AdWidgetVariant07';
import AdWidgetVariant08 from './AdWidgetVariant08';
import AdWidgetVariant09 from './AdWidgetVariant09';
import AdWidgetVariant10 from './AdWidgetVariant10';

const variants = [
  { id: '01', name: 'Inline Bar',     type: 'native',   Component: AdWidgetVariant01 },
  { id: '02', name: 'Feed Card',      type: 'native',   Component: AdWidgetVariant02 },
  { id: '03', name: 'Sidebar Minimal',type: 'native',   Component: AdWidgetVariant03 },
  { id: '04', name: 'Hero Split',     type: 'branded',  Component: AdWidgetVariant04 },
  { id: '05', name: 'Full Bleed',     type: 'branded',  Component: AdWidgetVariant05 },
  { id: '06', name: 'Ribbon Banner',  type: 'branded',  Component: AdWidgetVariant06 },
  { id: '07', name: 'Circular Hub',   type: 'creative', Component: AdWidgetVariant07 },
  { id: '08', name: 'Stacked Depth',  type: 'creative', Component: AdWidgetVariant08 },
  { id: '09', name: 'Diagonal Split', type: 'creative', Component: AdWidgetVariant09 },
  { id: '10', name: 'Wide Pill',      type: 'creative', Component: AdWidgetVariant10 },
];

const labelClass = {
  native:   s.slideLabelNative,
  branded:  s.slideLabelBranded,
  creative: s.slideLabelCreative,
};

export default function VariantShowcase() {
  return (
    <div className={s.showcase}>
      <header className={s.showcaseHeader}>
        <h1 className={s.showcaseTitle}>Ad Widget — 10 Variations</h1>
        <p className={s.showcaseSub}>
          3 × Native&ensp;·&ensp;3 × Branded&ensp;·&ensp;4 × Creative
        </p>
      </header>

      <div className={s.track}>
        {variants.map(({ id, name, type, Component }) => (
          <div className={s.slide} key={id}>
            <span className={`${s.slideLabel} ${labelClass[type]}`}>{type}</span>
            <p className={s.slideName}>V{id} — {name}</p>
            <Component />
          </div>
        ))}
      </div>
    </div>
  );
}

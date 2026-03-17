import s from './variants.module.css';
import { FonbetLogo, CloseBtn, AMOUNT, CAPTION, CTA_TEXT, DISCLAIMER } from './shared';

export default function AdWidgetVariant04() {
  return (
    <div className={s.v04}>
      <CloseBtn className={s.close} />
      <div className={s.v04Left}>
        <FonbetLogo size={36} />
        <p className={s.v04Amount}>{AMOUNT}</p>
      </div>
      <div className={s.v04Right}>
        <p className={s.v04Caption}>{CAPTION}</p>
        <a className={s.cta} href="#">{CTA_TEXT}</a>
      </div>
      <p className={s.disclaimer}>{DISCLAIMER}</p>
    </div>
  );
}

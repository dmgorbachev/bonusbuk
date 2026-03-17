import s from './variants.module.css';
import { FonbetLogo, CloseBtn, AMOUNT, CAPTION, CTA_TEXT, DISCLAIMER } from './shared';

export default function AdWidgetVariant05() {
  return (
    <div className={s.v05}>
      <CloseBtn className={s.close} />
      <FonbetLogo size={32} />
      <p className={s.v05Amount}>{AMOUNT}</p>
      <p className={s.v05Caption}>{CAPTION}</p>
      <a className={s.cta} href="#">{CTA_TEXT}</a>
      <p className={s.disclaimer}>{DISCLAIMER}</p>
    </div>
  );
}

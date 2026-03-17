import s from './variants.module.css';
import { FonbetLogo, CloseBtn, AMOUNT, CAPTION, CTA_TEXT, DISCLAIMER } from './shared';

export default function AdWidgetVariant03() {
  return (
    <div className={s.v03}>
      <CloseBtn className={s.close} />
      <FonbetLogo size={32} className={s.v03Logo} />
      <p className={s.v03Amount}>{AMOUNT}</p>
      <p className={s.v03Caption}>{CAPTION}</p>
      <a className={s.cta} href="#">{CTA_TEXT}</a>
      <p className={s.disclaimer}>{DISCLAIMER}</p>
    </div>
  );
}

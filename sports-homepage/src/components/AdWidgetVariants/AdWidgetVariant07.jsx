import s from './variants.module.css';
import { FonbetLogo, CloseBtn, AMOUNT, CAPTION, CTA_TEXT, DISCLAIMER } from './shared';

export default function AdWidgetVariant07() {
  return (
    <div className={s.v07}>
      <CloseBtn className={s.close} />
      <FonbetLogo size={30} className={s.v07Logo} />
      <p className={s.v07Amount}>{AMOUNT}</p>
      <p className={s.v07Caption}>{CAPTION}</p>
      <a className={s.cta} href="#">{CTA_TEXT}</a>
      <p className={s.disclaimer}>{DISCLAIMER}</p>
    </div>
  );
}

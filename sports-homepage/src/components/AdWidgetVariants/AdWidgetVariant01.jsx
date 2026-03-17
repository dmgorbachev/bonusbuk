import s from './variants.module.css';
import { FonbetLogo, CloseBtn, AMOUNT, CAPTION, CTA_TEXT, DISCLAIMER } from './shared';

export default function AdWidgetVariant01() {
  return (
    <div className={s.v01}>
      <FonbetLogo size={28} className={s.v01Logo} />
      <div className={s.v01Text}>
        <p className={s.v01Amount}>{AMOUNT}</p>
        <p className={s.v01Caption}>{CAPTION}</p>
      </div>
      <a className={s.cta} href="#">{CTA_TEXT}</a>
      <CloseBtn className={s.close} />
      <p className={s.disclaimer}>{DISCLAIMER}</p>
    </div>
  );
}

import s from './variants.module.css';
import { FonbetLogo, CloseBtn, AMOUNT, CAPTION, CTA_TEXT, DISCLAIMER } from './shared';

export default function AdWidgetVariant10() {
  return (
    <div className={s.v10}>
      <div className={s.v10LogoWrap}>
        <FonbetLogo size={28} />
      </div>
      <p className={s.v10Amount}>{AMOUNT}</p>
      <div className={s.v10Sep} />
      <p className={s.v10Caption}>{CAPTION}</p>
      <a className={s.cta} href="#">{CTA_TEXT}</a>
      <CloseBtn className={s.close} />
      <p className={s.disclaimer}>{DISCLAIMER}</p>
    </div>
  );
}

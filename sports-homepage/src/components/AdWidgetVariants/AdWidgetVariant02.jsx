import s from './variants.module.css';
import { FonbetLogo, CloseBtn, AMOUNT, CAPTION, CTA_TEXT, DISCLAIMER } from './shared';

export default function AdWidgetVariant02() {
  return (
    <div className={s.v02}>
      <div className={s.v02Header}>
        <FonbetLogo size={24} />
        <span className={s.v02BrandName}>Fonbet</span>
        <CloseBtn className={s.close} />
      </div>
      <div className={s.v02Divider} />
      <div className={s.v02Body}>
        <p className={s.v02Amount}>{AMOUNT}</p>
        <p className={s.v02Caption}>{CAPTION}</p>
        <a className={s.cta} href="#">{CTA_TEXT}</a>
      </div>
      <div className={s.v02Footer}>
        <p className={s.disclaimer}>{DISCLAIMER}</p>
      </div>
    </div>
  );
}

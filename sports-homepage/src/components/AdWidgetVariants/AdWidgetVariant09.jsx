import s from './variants.module.css';
import { FonbetLogo, CloseBtn, AMOUNT, CAPTION, CTA_TEXT, DISCLAIMER } from './shared';

export default function AdWidgetVariant09() {
  return (
    <div className={s.v09}>
      <div className={s.v09Red} />
      <CloseBtn className={s.close} />
      <div className={s.v09Content}>
        <div className={s.v09Top}>
          <FonbetLogo size={28} />
          <p className={s.v09Amount}>{AMOUNT}</p>
        </div>
        <div className={s.v09Bottom}>
          <p className={s.v09Caption}>{CAPTION}</p>
          <a className={s.cta} href="#">{CTA_TEXT}</a>
        </div>
      </div>
      <p className={s.disclaimer}>{DISCLAIMER}</p>
    </div>
  );
}

import s from './variants.module.css';
import { FonbetLogo, CloseBtn, AMOUNT, CAPTION, CTA_TEXT, DISCLAIMER } from './shared';

export default function AdWidgetVariant06() {
  return (
    <div className={s.v06}>
      <CloseBtn className={s.close} />
      <div className={s.v06Accent} />
      <FonbetLogo size={36} className={s.v06Logo} />
      <div className={s.v06Body}>
        <p className={s.v06Amount}>{AMOUNT}</p>
        <p className={s.v06Caption}>{CAPTION}</p>
      </div>
      <div className={s.v06Right}>
        <a className={s.cta} href="#">{CTA_TEXT}</a>
      </div>
      <p className={s.disclaimer}>{DISCLAIMER}</p>
    </div>
  );
}

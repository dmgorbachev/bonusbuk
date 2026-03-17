import s from './variants.module.css';
import { FonbetLogo, CloseBtn, AMOUNT, CAPTION, CTA_TEXT, DISCLAIMER } from './shared';

export default function AdWidgetVariant08() {
  return (
    <div className={s.v08Wrap}>
      <div className={s.v08Layer1} />
      <div className={s.v08Layer2} />
      <div className={s.v08}>
        <CloseBtn className={s.close} />
        <div className={s.v08Header}>
          <FonbetLogo size={28} />
          <p className={s.v08Amount}>{AMOUNT}</p>
        </div>
        <p className={s.v08Caption}>{CAPTION}</p>
        <a className={s.cta} href="#">{CTA_TEXT}</a>
        <p className={s.disclaimer}>{DISCLAIMER}</p>
      </div>
    </div>
  );
}

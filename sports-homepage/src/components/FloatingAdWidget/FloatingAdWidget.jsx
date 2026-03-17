import { useState, useEffect } from 'react';
import s from './FloatingAdWidget.module.css';

const STORAGE_KEY = 'floatingAdWidget_dismissed';

export default function FloatingAdWidget() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(STORAGE_KEY);
      if (!dismissed) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch { /* noop */ }
  };

  if (!visible) return null;

  return (
    <div className={s.overlay} role="complementary" aria-label="Рекламный виджет">
      <div className={s.widget}>
        <button
          className={s.close}
          onClick={handleClose}
          aria-label="Закрыть"
          type="button"
        >
          <img src="/icon-close-widget.svg" alt="" width="16" height="16" />
        </button>

        <img
          className={s.logo}
          src="/stakes-block.svg"
          alt="Fonbet"
          width="32"
          height="32"
        />

        <p className={s.amount}>100 000 рублей</p>
        <p className={s.caption}>Забери быстро на лучших условиях</p>

        <a className={s.cta} href="#" onClick={(e) => e.preventDefault()}>
          Забрать
        </a>

        <p className={s.disclaimer}>Реклама 18+</p>
      </div>
    </div>
  );
}

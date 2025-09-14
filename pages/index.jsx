import { useMemo, useState } from "react";

// ===== Helpers =====
function buildWhatsUrl(phone){
  return `https://wa.me/${String(phone||"").replace(/\+/g, "")}`;
}
function buildViberUrl(phone){
  return `viber://chat?number=${encodeURIComponent(String(phone||""))}`;
}
function buildTelegramDirect(usernameOrPhone){
  if((usernameOrPhone||"").startsWith("@")) return `https://t.me/${usernameOrPhone.slice(1)}`;
  return `https://t.me/${String(usernameOrPhone||"")}`;
}

export default function AvkomPage(){
  const [mobileOpen, setMobileOpen] = useState(false);

  const phones = useMemo(()=>({
    main: "+380978436304",
    alt: "+380985843977",
  }),[]);
  const email = "marketavcom2008@gmail.com";
  const instagram = "https://instagram.com/avkom_avtozapchastini.lv";
  const facebook = "https://facebook.com/%D0%90%D0%B2%D0%BA%D0%BE%D0%BC%20%D0%90%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD";
  const mapUrl = "https://maps.app.goo.gl/vM5FGaa4RZTkNLXN9?g_st=ic";

  const whatsapp = buildWhatsUrl(phones.main);
  const viber = buildViberUrl(phones.main);
  const telegram = buildTelegramDirect(phones.main);

  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <div className="container row between center">
          <a href="#home" className="row center gap">
            <div className="logoBox">
              <img src="/logo.png" alt="Avkom логотип"/>
            </div>
            <div>
              <div className="brand">Avkom Автозапчастини</div>
              <div className="muted tiny">Магазин • Львів • Доставка по Україні</div>
            </div>
          </a>
          <nav className="nav">
            <a href="#catalog">Категорії</a>
            <a href="#services">Послуги</a>
            <a href="#feedback">Зворотній зв’язок</a>
            <a href="#contacts">Контакти</a>
            <a href="#map">Мапа</a>
            <a href={`tel:${phones.main}`} className="btn primary">Подзвонити</a>
          </nav>
          <button className="hamburger" aria-label="Меню" onClick={()=>setMobileOpen(!mobileOpen)}>☰</button>
        </div>
        {mobileOpen && (
          <div className="mobileNav">
            <a onClick={()=>setMobileOpen(false)} href="#catalog">Категорії</a>
            <a onClick={()=>setMobileOpen(false)} href="#services">Послуги</a>
            <a onClick={()=>setMobileOpen(false)} href="#feedback">Зворотній зв’язок</a>
            <a onClick={()=>setMobileOpen(false)} href="#contacts">Контакти</a>
            <a onClick={()=>setMobileOpen(false)} href="#map">Мапа</a>
            <a href={`tel:${phones.main}`} className="btn primary">Подзвонити</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="section">
        <div className="container grid heroGrid">
          <div>
            <h1 className="h1">Інтернет-магазин Avkom Автозапчастини</h1>
            <p className="lead">Масла, фільтри, гальмівні системи, підвіска, електрика, кузовні деталі. Підбір за VIN, консультації та швидка доставка.</p>
            <div className="row wrap gap">
              <a href="#catalog" className="btn primary">Дивитися категорії</a>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="btn outline">Написати в WhatsApp</a>
              <a href={mapUrl} target="_blank" rel="noreferrer" className="btn outline">Самовивіз у Львові</a>
            </div>
          </div>
          <div className="heroCard">
            <div className="glow"></div>
            <div className="card">
              <div className="media">
                {/* ЛОГОТИП у віконці */}
                <img src="/image1.png" alt="Avkom логотип" className="logoInCard"/>
              </div>
              <div className="row gap badges">
                <span className="badge">Гарантія</span>
                <span className="badge">Чесні ціни</span>
                <span className="badge">Доставка 1–2 дні</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="section">
        <div className="container">
          <h2 className="h2">Категорії товарів</h2>
          <p className="muted">Популярні бренди масел: <b>Shell</b>, <b>Mobil</b>, <b>ELF</b>, <b>Total Quartz</b>. Фільтри: повітряні, масляні, паливні, салону.</p>
          <div className="grid cards">
            {[
              {t:"Моторні масла", d:"Підбір в’язкості та допусків під ваш двигун", i:["Shell","Mobil","ELF","Total Quartz","Liqui Moly"]},
              {t:"Фільтри", d:"MANN, MAHLE/Knecht, Filtron та ін.", i:["Повітряні","Масляні","Паливні","Салону","Салонні вугільні"]},
              {t:"Гальмівна система", d:"Підбір під стиль їзди та вагу авто", i:["Колодки","Диски","Супорти","Гальмівна рідина","Троси ручника"]},
              {t:"Підвіска/ходова", d:"Комплектація осі, комплект ремонтний", i:["Амортизатори","Ричаги","Сайлентблоки","Кульові опори","Наконечники"]},
              {t:"Електрика", d:"Перевірені бренди та гарантія", i:["Акумулятори","Датчики","Свічки/котушки","Стартер/генератор","Лампи"]},
              {t:"Кузов/світло", d:"Нові та під відновлення", i:["Фари (перед/зад)","Бампери","Решітки","Дзеркала","Підкрилки"]},
              {t:"Рідини/хімія", d:"Сертифіковані постачання", i:["Омивачі","Антифриз","Гальмівна","ATF/PSF","Аддитиви"]},
              {t:"Двірники та аксесуари", d:"Швидкий самовивіз", i:["Щітки склоочисника","Ароматизатори","Килимки","Чохли","Зарядні дроти"]},
            ].map(cat=> (
              <div key={cat.t} className="card">
                <h3 className="h3">{cat.t}</h3>
                <div className="muted tiny">{cat.d}</div>
                <ul className="list">
                  {cat.i.map(it=> <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section dim">
        <div className="container">
          <h2 className="h2">Послуги та підбір</h2>
          <div className="grid cards three">
            {[
              {t:"Підбір за VIN", i:["Повний каталожний підбір","Оригінали та аналоги","Гарантія сумісності"]},
              {t:"Доставка", i:["Нова Пошта по Україні","Кур’єр у Львові","Самовивіз: Богданівська, 44"]},
              {t:"СТО Авком", i:["Діагностика","Планове ТО","Ходова, гальма, електрика, вихлоп"]}
            ].map(s=> (
              <div key={s.t} className="card">
                <h3 className="h3">{s.t}</h3>
                <ul className="list">
                  {s.i.map(it=> <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEEDBACK */}
      <section id="feedback" className="section">
        <div className="container">
          <h2 className="h2">Зворотній зв’язок</h2>
          <p className="muted">Опишіть потрібні запчастини (VIN, марка/модель/рік, двигун). Ми підберемо та відповімо у месенджері.</p>
          <FeedbackForm phones={phones} email={email} />
        </div>
      </section>

      {/* MAP */}
      <section id="map" className="section dim">
        <div className="container grid two">
          <div className="card center">
            <img src="/qr-avkom.png" alt="Avkom QR код" className="qr"/>
            <div className="muted tiny">Скануйте QR-код для навігації</div>
          </div>
          <div>
            <ul className="list">
              <li>Поверніть з вул. Липинського на Богданівську</li>
              <li>Рухайтесь до буд. 44 (територія авторинку)</li>
              <li>Телефонуйте — зорієнтуємо при в’їзді</li>
            </ul>
            <div className="row wrap gap mt">
              <a href={mapUrl} target="_blank" rel="noreferrer" className="btn primary">Відкрити маршрут у Google Maps</a>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="btn outline">WhatsApp</a>
              <a href={telegram} target="_blank" rel="noreferrer" className="btn outline">Telegram</a>
              <a href={viber} className="btn outline">Viber</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="section">
        <div className="container grid two">
          <div className="card">
            <h3 className="h3">Avkom Автозапчастини</h3>
            <div className="muted">м. Львів, вул. Богданівська, 44</div>
            <div className="muted">Пн–Пт 8:30–18:00, Сб 9:00–15:00</div>
            <div className="stack mt">
              <a href={`tel:${phones.main}`} className="btn primary">📞 {phones.main}</a>
              <a href={`tel:${phones.alt}`} className="btn outline">📞 {phones.alt}</a>
              <a href={`mailto:${email}`} className="btn outline">✉️ {email}</a>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="btn outline">💬 WhatsApp</a>
              <a href={telegram} target="_blank" rel="noreferrer" className="btn outline">💬 Telegram</a>
              <a href={viber} className="btn outline">💬 Viber</a>
              <a href={instagram} target="_blank" rel="noreferrer" className="btn outline">📷 Instagram</a>
              <a href={facebook} target="_blank" rel="noreferrer" className="btn outline">📘 Facebook</a>
            </div>
          </div>
          <div className="card">
            <h3 className="h3">Оплата та доставка</h3>
            <ul className="list">
              <li>Оплата карткою, готівкою, безготівково (ФОП)</li>
              <li>Відправка Новою Поштою у день замовлення (до 16:00)</li>
              <li>Самовивіз зі складу: вул. Богданівська, 44</li>
              <li>Повернення/обмін згідно із Законом України «Про захист прав споживачів»</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container row between center">
          <div>© {new Date().getFullYear()} Avkom Автозапчастини. Усі права захищено.</div>
          <div className="tiny">Політика конфіденційності • Публічна оферта</div>
        </div>
      </footer>

      {/* ====== Styles (styled-jsx global) ====== */}
      <style jsx global>{`
        :root{--bg:#000;--text:#fff;--muted:#bfbfbf;--card:#0f0f10;--line:#1c1c1f;--brand:#ffffff;--accent:#ffffff;--accent2:#d32f2f}
        *{box-sizing:border-box}
        html,body,#__next{height:100%}
        body{margin:0;background:var(--bg);color:var(--text);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,"Noto Sans",sans-serif;}
        a{color:inherit;text-decoration:none}
        img{max-width:100%;display:block}
        .container{max-width:1120px;margin:0 auto;padding:0 16px}
        .section{padding:64px 0}
        .dim{background:rgba(255,255,255,0.04);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
        .row{display:flex;gap:12px}
        .between{justify-content:space-between}
        .center{align-items:center}
        .wrap{flex-wrap:wrap}
        .gap{gap:12px}
        .mt{margin-top:12px}
        .stack{display:grid;gap:10px}
        .grid{display:grid;gap:24px}
        .heroGrid{grid-template-columns:1fr;}
        .cards{grid-template-columns:repeat(1,minmax(0,1fr))}
        .cards.three{grid-template-columns:repeat(1,minmax(0,1fr))}
        .two{grid-template-columns:1fr;}
        @media(min-width:768px){
          .heroGrid{grid-template-columns:1.1fr 0.9fr}
          .cards{grid-template-columns:repeat(2,minmax(0,1fr))}
          .cards.three{grid-template-columns:repeat(3,minmax(0,1fr))}
          .two{grid-template-columns:1fr 1fr}
        }
        .header{position:sticky;top:0;z-index:50;background:rgba(0,0,0,0.8);backdrop-filter:saturate(150%) blur(8px);border-bottom:1px solid var(--line)}
        .nav{display:none;gap:18px}
        .hamburger{background:transparent;border:1px solid var(--line);border-radius:10px;color:#fff;padding:6px 10px}
        @media(min-width:768px){.nav{display:flex} .hamburger{display:none}}
        .mobileNav{border-top:1px solid var(--line);padding:12px 16px;display:grid;gap:8px;background:#000}
        .logoBox{width:48px;height:48px;border-radius:14px;overflow:hidden;border:1px solid var(--line)}
        .logoBox img{width:100%;height:100%;object-fit:cover}
        .brand{font-weight:800;letter-spacing:.3px}
        .muted{color:var(--muted)}
        .tiny{font-size:12px}
        .h1{font-size:36px;line-height:1.2;margin:0}
        .h2{font-size:28px;margin:0 0 8px}
        .h3{font-size:18px;margin:0 0 4px}
        .lead{margin:16px 0 20px;color:#ddd;font-size:18px}
        .btn{padding:10px 16px;border-radius:14px;border:1px solid var(--line);display:inline-block}
        .btn.primary{background:#fff;color:#000;border-color:#fff;font-weight:700}
        .btn.outline{background:transparent}
        .badge{padding:6px 10px;border:1px solid var(--line);border-radius:12px;background:rgba(255,255,255,.06);font-size:12px}
        .card{border:1px solid var(--line);background:var(--card);border-radius:18px;padding:16px}
        .media{aspect-ratio:16/10;border:1px solid var(--line);background:rgba(255,255,255,.05);border-radius:16px;display:grid;place-items:center;overflow:hidden}
        .logoInCard{width:120px;height:auto;opacity:.95}
        .glow{position:absolute;inset:-20px;border-radius:24px;background:rgba(220,0,0,.18);filter:blur(30px);}
        .heroCard{position:relative}
        .list{margin:12px 0 0 0;padding-left:20px}
        .list li{margin:4px 0}
        .qr{width:128px;height:128px}
        .footer{padding:28px 0;color:#bdbdbd}
        .badges{margin-top:12px}
      `}</style>
    </div>
  );
}

// ===== Feedback Form =====
function FeedbackForm({phones, email}){
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const whatsMsg = (()=>{
    const base = `Привіт, Avkom! Мене звати ${name||"(ім’я)"}. Телефон: ${phone||"(номер)"}. Потрібні запчастини: ${text||"(опишіть)"}.`;
    return `${buildWhatsUrl(phones.main)}?text=${encodeURIComponent(base)}`;
  })();
  const tgMsg = (()=>{
    const base = `Привіт, Avkom! Мене звати ${name||"(ім’я)"}. Телефон: ${phone||"(номер)"}. Потрібні запчастини: ${text||"(опишіть)"}.`;
    return `https://t.me/share/url?url=${encodeURIComponent("https://example.com")}&text=${encodeURIComponent(base)}`;
  })();
  return (
    <form className="card stack" onSubmit={(e)=>e.preventDefault()}>
      <div className="grid two">
        <label className="stack">
          <span className="tiny muted">Ім’я</span>
          <input value={name} onChange={e=>setName(e.target.value)} className="input" placeholder="Ваше ім’я"/>
        </label>
        <label className="stack">
          <span className="tiny muted">Телефон</span>
          <input value={phone} onChange={e=>setPhone(e.target.value)} className="input" placeholder="+380…"/>
        </label>
      </div>
      <label className="stack">
        <span className="tiny muted">Що потрібно? (VIN/марка/модель/рік, двигун)</span>
        <textarea rows="4" value={text} onChange={e=>setText(e.target.value)} className="input" placeholder="Наприклад: BMW X5 F15 2016, 3.0d, потрібно масло 5W-30 і фільтри"/>
      </label>
      <div className="row wrap gap">
        <a href={whatsMsg} target="_blank" rel="noreferrer" className="btn primary">Надіслати у WhatsApp</a>
        <a href={tgMsg} target="_blank" rel="noreferrer" className="btn outline">Поділитися у Telegram</a>
        <a href={`mailto:${email}?subject=${encodeURIComponent("Запит на підбір запчастин")}&body=${encodeURIComponent("Ім’я: "+name+"\nТелефон: "+phone+"\nПотрібно: "+text)}`} className="btn outline">Надіслати на Email</a>
      </div>
      <style jsx>{`
        .input{background:rgba(255,255,255,.06);border:1px solid #1c1c1f;color:#fff;border-radius:12px;padding:10px 12px;outline:none}
        .input:focus{border-color:#2c2c31}
      `}</style>
    </form>
  );
}

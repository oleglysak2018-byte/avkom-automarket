import { useMemo, useState } from "react";

// ---------- Helpers (also used by tests) ----------
function buildWhatsUrl(phone){
  return `https://wa.me/${String(phone||"").replace(/\+/g, "")}`;
}
function buildViberUrl(phone){
  return `viber://chat?number=${encodeURIComponent(String(phone||""))}`;
}
function buildTelegramDirect(usernameOrPhone){
  // якщо є username, краще використовувати його
  if((usernameOrPhone||"").startsWith("@")){
    return `https://t.me/${usernameOrPhone.slice(1)}`;
  }
  return `https://t.me/${String(usernameOrPhone||"")}`;
}

export default function AvcomPartsLanding(){
  const [mobileOpen, setMobileOpen] = useState(false);

  // Контакти (оновлено)
  const phones = useMemo(()=>({
    main: "+380978436304", // +38 097 843 63 04
    alt: "+380985843977",
  }),[]);
  const email = "marketavcom2008@gmail.com";
  const instagram = "https://instagram.com/avkom_avtozapchastini.lv"; // @avkom_avtozapchastini.lv
  const facebook = "https://facebook.com/%D0%90%D0%B2%D0%BA%D0%BE%D0%BC%20%D0%90%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD"; // Авком Автомагазин

  const mapUrl = "https://maps.app.goo.gl/vM5FGaa4RZTkNLXN9?g_st=ic";

  const whatsapp = buildWhatsUrl(phones.main);
  const viber = buildViberUrl(phones.main);
  const telegram = buildTelegramDirect(phones.main); // залишаємо за номером, якщо дасте @ — підставлю

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl overflow-hidden border border-white/15">
              <img src="/uploads/ChatGPT Image 22 серп. 2025 р., 18_13_34.png" alt="Avkom логотип" className="w-full h-full object-cover"/>
            </div>
            <div>
              <div className="text-xl font-extrabold tracking-wide">Avkom Автозапчастини</div>
              <div className="text-xs text-white/60 -mt-1">Магазин • Львів • Доставка по Україні</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#catalog" className="hover:text-white/80">Категорії</a>
            <a href="#services" className="hover:text-white/80">Послуги</a>
            <a href="#feedback" className="hover:text-white/80">Зворотній зв’язок</a>
            <a href="#contacts" className="hover:text-white/80">Контакти</a>
            <a href="#map" className="hover:text-white/80">Мапа</a>
            <a href={`tel:${phones.main}`} className="px-4 py-2 rounded-2xl bg-white text-black font-semibold">Подзвонити</a>
          </nav>
          <button onClick={()=>setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-xl bg-white/10 border border-white/10" aria-label="Меню">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/95">
            <div className="max-w-6xl mx-auto px-4 py-4 grid gap-3 text-sm">
              <a onClick={()=>setMobileOpen(false)} href="#catalog" className="py-2">Категорії</a>
              <a onClick={()=>setMobileOpen(false)} href="#services" className="py-2">Послуги</a>
              <a onClick={()=>setMobileOpen(false)} href="#feedback" className="py-2">Зворотній зв’язок</a>
              <a onClick={()=>setMobileOpen(false)} href="#contacts" className="py-2">Контакти</a>
              <a onClick={()=>setMobileOpen(false)} href="#map" className="py-2">Мапа</a>
              <a href={`tel:${phones.main}`} className="py-2 px-4 rounded-xl bg-white text-black font-semibold text-center">Подзвонити</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero (з логотипом у віконці) */}
      <section id="home" className="relative">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Інтернет-магазин Avkom Автозапчастини</h1>
            <p className="mt-4 text-white/80 text-lg">Масла, фільтри, гальмівні системи, підвіска, електрика, кузовні деталі. Підбір за VIN, консультації та швидка доставка.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#catalog" className="px-5 py-3 rounded-2xl bg-white text-black font-semibold">Дивитися категорії</a>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl border border-white/20">Написати в WhatsApp</a>
              <a href={mapUrl} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl border border-white/20">Самовивіз у Львові</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-red-600/20 blur-2xl"/>
            <div className="relative rounded-3xl border border-white/10 p-6 bg-gradient-to-b from-red-600/10 to-transparent">
              <div className="aspect-[16/10] rounded-2xl bg-white/5 grid place-items-center border border-white/10 overflow-hidden">
                {/* логотип у віконці */}
                <img src="/uploads/ChatGPT Image 22 серп. 2025 р., 18_13_34.png" alt="Avkom логотип" className="w-32 h-auto"/>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-white/70">
                <Badge>Гарантія</Badge>
                <Badge>Чесні ціни</Badge>
                <Badge>Доставка 1–2 дні</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Каталог (повернено повний перелік) */}
      <section id="catalog" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-extrabold">Категорії товарів</h2>
        <p className="text-white/70 mt-2">Популярні бренди масел: <b>Shell</b>, <b>Mobil</b>, <b>ELF</b>, <b>Total Quartz</b>. Фільтри: повітряні, масляні, паливні, салону.</p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Cat title="Моторні масла" items={["Shell","Mobil","ELF","Total Quartz","Liqui Moly"]} desc="Підбір в’язкості та допусків під ваш двигун"/>
          <Cat title="Фільтри" items={["Повітряні","Масляні","Паливні","Салону","Салонні вугільні"]} desc="MANN, MAHLE/Knecht, Filtron та ін."/>
          <Cat title="Гальмівна система" items={["Колодки","Диски","Супорти","Гальмівна рідина","Троси ручника"]} desc="Підбір під стиль їзди та вагу авто"/>
          <Cat title="Підвіска/ходова" items={["Амортизатори","Ричаги","Сайлентблоки","Кульові опори","Наконечники"]} desc="Комплектація осі, комплект ремонтний"/>
          <Cat title="Електрика" items={["Акумулятори","Датчики","Свічки/котушки","Стартер/генератор","Лампи"]} desc="Перевірені бренди та гарантія"/>
          <Cat title="Кузов/світло" items={["Фари (перед/зад)","Бампери","Решітки","Дзеркала","Підкрилки"]} desc="Нові та під відновлення"/>
          <Cat title="Рідини/хімія" items={["Омивачі","Антифриз","Гальмівна","ATF/PSF","Аддитиви"]} desc="Сертифіковані постачання"/>
          <Cat title="Двірники та аксесуари" items={["Щітки склоочисника","Ароматизатори","Килимки","Чохли","Зарядні дроти"]} desc="Швидкий самовивіз"/>
        </div>
      </section>

      {/* Послуги */}
      <section id="services" className="bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-extrabold">Послуги та підбір</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm text-white/80">
            <Svc title="Підбір за VIN" items={["Повний каталожний підбір","Оригінали та аналоги","Гарантія сумісності"]}/>
            <Svc title="Доставка" items={["Нова Пошта по Україні","Кур’єр у Львові","Самовивіз: Богданівська, 44"]}/>
            <Svc title="СТО Авком" items={["Діагностика","Планове ТО","Ходова, гальма, електрика, вихлоп"]}/>
          </div>
        </div>
      </section>

      {/* Зворотній зв’язок */}
      <section id="feedback" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-extrabold">Зворотній зв’язок</h2>
        <p className="text-white/70 mt-2">Опишіть потрібні запчастини (VIN, марка/модель/рік, двигун). Ми підберемо та відповімо у месенджері.</p>
        <FeedbackForm phones={phones} email={email} />
      </section>

      {/* Як нас знайти (QR) */}
      <section id="map" className="bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-extrabold">Як нас знайти</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
            <div className="aspect-[16/10] rounded-2xl bg-white/5 border border-white/10 grid place-items-center overflow-hidden">
              <div className="flex flex-col items-center gap-4">
                <img src="/qr-avkom.png" alt="Avkom QR код" className="w-32 h-32"/>
                <span className="text-xs text-white/60">Скануйте QR-код для навігації</span>
              </div>
            </div>
            <div className="grid gap-3 text-sm">
              <Step>Поверніть з вул. Липинського на Богданівську</Step>
              <Step>Рухайтесь до буд. 44 (територія авторинку)</Step>
              <Step>Телефонуйте — зорієнтуємо при в’їзді</Step>
              <div className="mt-2 flex flex-wrap gap-2">
                <a href={mapUrl} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-white text-black font-semibold inline-block">Відкрити маршрут у Google Maps</a>
                <a href={whatsapp} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border border-green-500/40 inline-block">WhatsApp</a>
                <a href={telegram} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border border-sky-500/40 inline-block">Telegram</a>
                <a href={viber} className="px-4 py-2 rounded-xl border border-purple-500/40 inline-block">Viber</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Контакти (повний блок) */}
      <section id="contacts" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-extrabold">Контакти</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-white/10 p-6">
            <h3 className="font-bold text-lg">Avkom Автозапчастини</h3>
            <p className="text-white/70 mt-2">м. Львів, вул. Богданівська, 44</p>
            <p className="text-white/70">Пн–Пт 8:30–18:00, Сб 9:00–15:00</p>
            <div className="mt-4 grid gap-2">
              <a href={`tel:${phones.main}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-semibold w-max">📞 {phones.main}</a>
              <a href={`tel:${phones.alt}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 w-max">📞 {phones.alt}</a>
              <a href={`mailto:${email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 w-max">✉️ {email}</a>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-green-500/40 w-max">💬 WhatsApp</a>
              <a href={telegram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-sky-500/40 w-max">💬 Telegram</a>
              <a href={viber} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-purple-500/40 w-max">💬 Viber</a>
              <a href={instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-pink-500/40 w-max">📷 Instagram</a>
              <a href={facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-500/40 w-max">📘 Facebook</a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 p-6">
            <h3 className="font-bold text-lg">Оплата та доставка</h3>
            <ul className="mt-3 grid gap-2 text-white/70 text-sm list-disc pl-5">
              <li>Оплата карткою, готівкою, безготівково (ФОП)</li>
              <li>Відправка Новою Поштою у день замовлення (до 16:00)</li>
              <li>Самовивіз зі складу: вул. Богданівська, 44</li>
              <li>Повернення/обмін згідно з Законом України «Про захист прав споживачів»</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-white/60">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div>© {new Date().getFullYear()} Avkom Автозапчастини. Усі права захищено.</div>
            <div className="text-xs">Політика конфіденційності • Публічна оферта</div>
          </div>
        </div>
      </footer>

      {/* Тести */}
      <DevTests phones={phones} />
    </div>
  );
}

function Dot(){
  return <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/70" aria-hidden="true"/>;
}

function Badge({children}){
  return <div className="px-3 py-1 rounded-xl bg-white/10 border border-white/10 w-max">{children}</div>;
}

function Cat({title, items, desc}){
  return (
    <div className="rounded-3xl border border-white/10 p-6 bg-white/5">
      <h3 className="font-bold text-lg">{title}</h3>
      <div className="mt-1 text-white/60 text-sm">{desc}</div>
      <ul className="mt-3 grid gap-2 text-white/70 text-sm list-disc pl-5">
        {items.map((it)=> <li key={it}>{it}</li>)}
      </ul>
    </div>
  );
}

function Svc({title, items}){
  return (
    <div className="rounded-3xl border border-white/10 p-6 bg-white/5">
      <h3 className="font-bold text-lg">{title}</h3>
      <ul className="mt-3 grid gap-2 text-white/70 text-sm list-disc pl-5">
        {items.map((it)=> <li key={it}>{it}</li>)}
      </ul>
    </div>
  );
}

function Step({children}){
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 w-5 h-5 rounded-xl bg-white/10 grid place-items-center border border-white/10">→</div>
      <div className="text-white/80">{children}</div>
    </div>
  );
}

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
    <form className="rounded-3xl border border-white/10 p-6 grid gap-4 max-w-3xl">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid gap-1">
          <label className="text-sm text-white/70">Ім’я</label>
          <input value={name} onChange={e=>setName(e.target.value)} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 outline-none" placeholder="Ваше ім’я"/>
        </div>
        <div className="grid gap-1">
          <label className="text-sm text-white/70">Телефон</label>
          <input value={phone} onChange={e=>setPhone(e.target.value)} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 outline-none" placeholder="+380…"/>
        </div>
      </div>
      <div className="grid gap-1">
        <label className="text-sm text-white/70">Що потрібно? (VIN/марка/модель/рік, двигун)</label>
        <textarea value={text} onChange={e=>setText(e.target.value)} rows={4} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 outline-none" placeholder="Наприклад: BMW X5 F15 2016, 3.0d, потрібно масло 5W-30 і фільтри"/>
      </div>
      <div className="flex flex-wrap gap-3">
        <a href={whatsMsg} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-white text-black font-semibold">Надіслати у WhatsApp</a>
        <a href={tgMsg} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border border-white/20">Поділитися у Telegram</a>
        <a href={`mailto:${email}?subject=${encodeURIComponent("Запит на підбір запчастин")}&body=${encodeURIComponent("Ім’я: "+name+"\nТелефон: "+phone+"\nПотрібно: "+text)}`} className="px-4 py-2 rounded-xl border border-white/20">Надіслати на Email</a>
      </div>
      <p className="text-xs text-white/50">* Реальну адресу сайту та @нік у Telegram можна підставити пізніше. Форма не зберігає дані на сервері (демо).</p>
    </form>
  );
}

// ---------------- Simple Runtime Tests ----------------
function DevTests({phones}){
  const cases = [
    { name: "WhatsApp URL формування", got: buildWhatsUrl(phones.main), expect: "https://wa.me/380978436304" },
    { name: "Viber URL формування",   got: buildViberUrl(phones.main),  expect: "viber://chat?number=%2B380978436304" },
    { name: "Telegram-direct (з номером)", got: buildTelegramDirect(phones.main), expect: "https://t.me/+380978436304" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 pb-10">
      <div className="mt-8 rounded-2xl border border-white/10 p-4 text-xs text-white/70">
        <div className="font-semibold mb-2">DEV TESTS</div>
        <ul className="grid gap-1">
          {cases.map((c)=>{
            const ok = c.got === c.expect;
            return (
              <li key={c.name} className={ok ? "text-green-400" : "text-red-400"}>
                {ok ? "PASS" : "FAIL"} — {c.name}: <span className="text-white">{c.got}</span> (очікувалось: {c.expect})
              </li>
            );
          })}
        </ul>
        <div className="mt-2 text-white/50">* Якщо перейдемо на @username у Telegram — очікування тесту зміниться.</div>
      </div>
    </div>
  );
}

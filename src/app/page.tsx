"use client"; 

import { useState } from 'react';
import RegistrationForm from '../components/form';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#05000a] text-purple-50 font-sans selection:bg-purple-500/30 overflow-x-hidden relative">
      {/* Анимированный фоновый градиент */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-fuchsia-900/10 blur-[150px]"></div>
        <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[80%] h-[30%] rounded-full bg-indigo-900/10 blur-[100px]"></div>
      </div>

      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-[#05000a]/70 backdrop-blur-xl border-b border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* ЛОГОТИП + НАЗВАНИЕ */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img src="/logo.png" alt="Tech Vision Logo" className="h-9 sm:h-10 md:h-12 w-auto object-contain" />
            <div className="font-extrabold text-lg sm:text-2xl tracking-tighter text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              TechVision
            </div>
          </div>
          
          {/* ДЕСКТОПНОЕ МЕНЮ */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-purple-200/70">
            <a href="#about" className="hover:text-purple-300 transition-colors">О хакатоне</a>
            <a href="#benefits" className="hover:text-purple-300 transition-colors">Почему мы</a>
            <a href="#tracks" className="hover:text-purple-300 transition-colors">Треки</a>
            <a href="#location" className="hover:text-purple-300 transition-colors">Локация</a>
            <a href="#timeline" className="hover:text-purple-300 transition-colors">Таймлайн</a>
          </div>

          {/* КНОПКА "ПОДАТЬ ЗАЯВКУ" ДЛЯ ДЕСКТОПА */}
          <a href="#register" className="relative group overflow-hidden rounded-full p-[1px] hidden md:block">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
            <div className="relative bg-[#05000a] px-6 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-300 group-hover:bg-opacity-0">
              Подать заявку
            </div>
          </a>

          {/* КНОПКА ГАМБУРГЕРА (МОБИЛЬНАЯ) */}
          <button 
            className="md:hidden text-purple-200 hover:text-white p-2 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* МОБИЛЬНОЕ ВЫПАДАЮЩЕЕ МЕНЮ */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#05000a]/95 backdrop-blur-xl border-b border-purple-900/30 py-6 px-4 flex flex-col gap-5 shadow-2xl animate-fadeIn">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-purple-100 hover:text-purple-400 font-semibold text-lg text-center transition-colors">О хакатоне</a>
            <a href="#benefits" onClick={() => setIsMenuOpen(false)} className="text-purple-100 hover:text-purple-400 font-semibold text-lg text-center transition-colors">Почему мы</a>
            <a href="#tracks" onClick={() => setIsMenuOpen(false)} className="text-purple-100 hover:text-purple-400 font-semibold text-lg text-center transition-colors">Треки</a>
            <a href="#location" onClick={() => setIsMenuOpen(false)} className="text-purple-100 hover:text-purple-400 font-semibold text-lg text-center transition-colors">Локация</a>
            <a href="#timeline" onClick={() => setIsMenuOpen(false)} className="text-purple-100 hover:text-purple-400 font-semibold text-lg text-center transition-colors">Таймлайн</a>
            <a href="#register" onClick={() => setIsMenuOpen(false)} className="mt-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold py-3.5 px-6 rounded-xl text-center text-lg shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              Подать заявку
            </a>
          </div>
        )}
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 md:pt-40 pb-20 md:pb-32 space-y-24 md:space-y-40">
        
        {/* HERO СЕКЦИЯ */}
        <section className="flex flex-col items-center text-center relative">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] sm:text-xs font-semibold text-purple-300 tracking-widest uppercase mb-8 md:mb-10 shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping shrink-0"></span>
            <span>Онлайн отбор + Оффлайн Финал в Астане</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white mb-6 md:mb-8 leading-[1.1]">
            Создай будущее <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 drop-shadow-[0_0_40px_rgba(217,70,239,0.3)]">
              своими руками
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-purple-100/70 max-w-3xl font-light mb-10 md:mb-12 leading-relaxed px-2">
            Республиканский молодежный хакатон. Свобода технологического творчества для решения глобальных вызовов: от экологии и умных городов до финтеха, медиа и социальных проектов. Участников ждут денежный призовой фонд, мерч и ценные призы от партнеров.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
            <a href="#register" className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold py-3.5 md:py-4 px-8 md:px-10 rounded-2xl hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:-translate-y-1 transition-all duration-300 text-center text-base md:text-lg">
              Регистрация команды
            </a>
            <a href="#about" className="group bg-[#0f0518] border border-purple-900/50 text-purple-200 font-semibold py-3.5 md:py-4 px-8 md:px-10 rounded-2xl hover:bg-purple-900/30 transition-all duration-300 text-center text-base md:text-lg flex justify-center items-center gap-3">
              Узнать подробнее
              <svg className="w-5 h-5 text-purple-400 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </a>
          </div>
        </section>

        {/* О ХАКАТОНЕ */}
        <section id="about" className="scroll-mt-32">
          <div className="bg-[#0b0316] border border-purple-900/40 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-10 md:mb-12 relative z-10">Что такое <span className="text-purple-400">Tech Vision?</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative z-10">
              <div>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-900/30 rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-purple-400">
                  <span className="text-lg md:text-xl font-black">1</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Суть проекта</h3>
                <p className="text-purple-200/70 leading-relaxed text-sm">
                  Масштабный гибридный хакатон для создания работающих цифровых продуктов (MVP). Вы сами выбираете актуальную проблему и создаете её решение. У нас полная свобода в выборе стека технологий, архитектуры и бизнес-модели.
                </p>
              </div>
              <div>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-fuchsia-900/30 rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-fuchsia-400">
                  <span className="text-lg md:text-xl font-black">2</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Для кого?</h3>
                <p className="text-purple-200/70 leading-relaxed text-sm">
                  Для школьников и студентов, которые хотят решать реальные вызовы и создавать технологичные продукты. Участие возможно в составе команды. Собирайте единомышленников и регистрируйтесь: в процессе создания MVP каждому найдется задача — от написания чистого кода до проработки бизнес-логики.
                </p>
              </div>
              <div>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-indigo-400">
                  <span className="text-lg md:text-xl font-black">3</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Гранд-финал</h3>
                <p className="text-purple-200/70 leading-relaxed text-sm">
                  По итогам онлайн-этапа жюри отберет по 6–7 сильнейших команд из каждого трека (всего 18–21 команда). Финалисты отправятся в Астану на базу Назарбаев Университета, чтобы вживую защитить свои проекты перед инвесторами и топовыми экспертами индустрии.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ПОЧЕМУ МЫ (BENEFITS) */}
        <section id="benefits" className="scroll-mt-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 md:mb-6">Почему <span className="text-fuchsia-400">мы?</span></h2>
            <p className="text-base md:text-lg text-purple-200/60 max-w-2xl mx-auto px-4">Мы делаем хакатон, где главное — это ваши идеи, код и люди вокруг.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-[#080112] border border-purple-900/30 p-6 md:p-8 rounded-[2rem] md:rounded-3xl hover:border-purple-500/50 transition-colors group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-900/30 rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Свобода технологий</h3>
              <p className="text-sm md:text-base text-purple-200/70 leading-relaxed">Никаких жестких кейсов. Вы сами выбираете стек, архитектуру и подход для решения актуальных проблемных зон.</p>
            </div>

            <div className="bg-[#080112] border border-purple-900/30 p-6 md:p-8 rounded-[2rem] md:rounded-3xl hover:border-purple-500/50 transition-colors group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-fuchsia-900/30 rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-fuchsia-400 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Топ-жюри и Нетворкинг</h3>
              <p className="text-sm md:text-base text-purple-200/70 leading-relaxed">На оффлайн-финале вас ждут мощный нетворкинг и оценка проектов от топ-специалистов из IT-индустрии, крупного бизнеса и венчурных фондов. Шанс зарейзить инвестиции или получить приглашение на работу.</p>
            </div>

            <div className="bg-[#080112] border border-purple-900/30 p-6 md:p-8 rounded-[2rem] md:rounded-3xl hover:border-purple-500/50 transition-colors group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Призы</h3>
              <p className="text-sm md:text-base text-purple-200/70 leading-relaxed">Общий призовой фонд хакатона — 500 000+ тенге, который будет полностью распределен между лучшими проектов финального этапа. Но это еще не всё! На протяжении всего хакатона мы будем проводить интерактивы и розыгрыши. Вы сможете выиграть крутой фирменный мерч Tech Vision, а также ценные сертификаты на профильные онлайн-курсы и обучение от наших партнеров.</p>
            </div>

            <div className="bg-[#080112] border border-purple-900/30 p-6 md:p-8 rounded-[2rem] md:rounded-3xl hover:border-purple-500/50 transition-colors group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-emerald-400 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Рабочая атмосфера</h3>
              <p className="text-sm md:text-base text-purple-200/70 leading-relaxed">Для финалистов на площадке в Назарбаев Университете будет развернута комфортная рабочая зона с высокоскоростным Wi-Fi для финальных штрихов перед питчем, а также предусмотрен кофе-брейк.</p>
            </div>
          </div>
        </section>

        {/* НАПРАВЛЕНИЯ (ТРЕКИ) */}
        <section id="tracks" className="scroll-mt-32">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 md:mb-6">Проблемные <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-600">Зоны</span></h2>
            <p className="text-base md:text-lg text-purple-200/60 max-w-2xl mx-auto px-4">Выберите одну из трех глобальных проблемных зон для вашего проекта.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Smart City & GreenTech",
                items: ["Eco-Monitoring", "Smart Energy", "Urban Mobility", "Waste Management", "Public Safety"],
                color: "from-emerald-500 to-teal-600",
                bg: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] border-teal-900/30"
              },
              {
                title: "Social & Human Capital",
                items: ["EdTech Solutions", "Mental Health & Well-being", "Digital Heritage", "Community Engagement", "Civic Rights & Literacy"],
                color: "from-purple-500 to-fuchsia-600",
                bg: "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] border-purple-900/30"
              },
              {
                title: "Digital Economy & Future Tech",
                items: ["FinTech & Literacy", "Local Commerce", "Creative Content & Media", "Gamification", "Career Start"],
                color: "from-blue-500 to-indigo-600",
                bg: "hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] border-indigo-900/30"
              }
            ].map((track, i) => (
              <div key={i} className={`group bg-[#080112] border ${track.bg} p-8 md:p-10 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden`}>
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${track.color}`}></div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">{track.title}</h3>
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-purple-200/70">
                  {track.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ЛОКАЦИЯ ФИНАЛА */}
        <section id="location" className="scroll-mt-32">
          <div className="bg-[#0b0316] border border-purple-900/40 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-10">
            <div className="w-full md:w-1/2 z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Гранд-финал в <span className="text-indigo-400">Астане</span></h2>
              <p className="text-base md:text-lg text-purple-200/70 leading-relaxed mb-6">
                27 июля сильнейшие команды соберутся на очную защиту проектов (питчинг) перед экспертами и жюри на базе Назарбаев Университета.
              </p>
              <ul className="space-y-3 text-purple-200/50 text-xs sm:text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Современный зал со сценой и большим экраном
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Комфортная рабочая зона для команды
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Высокоскоростной Wi-Fi и кофе-брейк
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 relative z-10">
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 group bg-[#11051f] flex items-center justify-center h-48 sm:h-64 md:h-80 w-full">
                <img 
                  src="/nu-campus.jpg" 
                  alt="Кампус НУ" 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-700 absolute inset-0 z-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ТАЙМЛАЙН */}
        <section id="timeline" className="scroll-mt-32">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 md:mb-6">Этапы <span className="text-purple-400">Хакатона</span></h2>
          </div>
          
          <div className="max-w-4xl mx-auto relative px-2 sm:px-0">
            <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-fuchsia-500/0 md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {[
                { date: "17 июля 2026", title: "Публикация проблемных зон и старт", desc: "Участники получают доступ к платформе. Старт онлайн-разработки цифровых решений.", color: "text-purple-400", dot: "bg-purple-500" },
                { date: "21 июля (до 23:59)", title: "Дедлайн подачи проектов", desc: "Завершение приема решений. Команды отправляют питч-дек, краткую документацию и одно доказательство работы MVP на выбор (live-ссылку, исходный код или демо-видео).", color: "text-fuchsia-400", dot: "bg-fuchsia-500" },
                { date: "22-23 июля", title: "Онлайн-отбор", desc: "Экспертная оценка жюри и технический фильтр. Фокус на жизнеспособности и работоспособности кода.", color: "text-purple-300", dot: "bg-purple-700" },
                { date: "24 июля", title: "Объявление финалистов", desc: "Публикация списка команд, прошедших в очный финальный этап.", color: "text-purple-300", dot: "bg-purple-700" },
                { date: "27 июля", title: "Гранд-финал (Астана, НУ)", desc: "Очная защита. Регламент: 5 минут на питч и демо + 2 минуты на сессию вопросов от экспертного жюри.", color: "text-indigo-400", dot: "bg-indigo-500", glow: "shadow-[0_0_20px_rgba(99,102,241,0.5)]" }
              ].map((item, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group pl-12 md:pl-0">
                  <div className={`w-full md:w-[45%] text-left ${idx % 2 === 0 ? 'md:text-right' : 'md:order-3'}`}>
                    <div className={`text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 group-hover:${item.color} transition-colors`}>{item.title}</div>
                    <p className="text-sm md:text-base text-purple-200/60 leading-relaxed">{item.desc}</p>
                  </div>
                  
                  <div className="absolute left-0 md:relative md:left-auto md:w-[10%] flex justify-center order-first md:order-2 z-10 top-1.5 md:top-auto w-[38px] md:w-auto">
                    <div className={`w-3 h-3 rounded-full ${item.dot} ${item.glow || ''} outline outline-4 outline-[#05000a] group-hover:scale-150 transition-transform duration-300`}></div>
                  </div>

                  <div className={`w-full md:w-[45%] text-left mt-3 md:mt-0 ${idx % 2 === 0 ? 'md:order-3' : 'md:text-right md:order-1'}`}>
                    <div className={`text-sm md:text-lg font-mono font-semibold ${item.color} bg-purple-900/10 border border-purple-500/20 px-3 py-1.5 md:px-4 md:py-2 rounded-xl inline-block backdrop-blur-sm`}>
                      {item.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* СЕКЦИЯ РЕГИСТРАЦИИ */}
        <section id="register" className="scroll-mt-32 max-w-4xl mx-auto w-full">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 md:mb-6">Регистрация <span className="text-fuchsia-400">Команды</span></h2>
            <p className="text-purple-200/60 text-base md:text-lg px-4">Состав команды: от 2 до 4 человек. Внимательно заполните данные.</p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 rounded-[2rem] md:rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-[#07010f] border border-purple-900/50 rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-14 shadow-2xl">
              <RegistrationForm />
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-purple-900/30 bg-[#030008] py-8 md:py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs md:text-sm text-purple-200/40">
          <p className="text-center md:text-left mb-4 md:mb-0">© 2026 Tech Vision. Создаем цифровое будущее.</p>
          <a href="https://instagram.com/techvisonn" target="_blank" rel="noreferrer" className="hover:text-purple-300 transition-colors font-semibold">
            @techvisonn
          </a>
        </div>
      </footer>
    </div>
  );
}
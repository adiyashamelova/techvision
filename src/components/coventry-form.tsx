'use client';

import { useState } from 'react';

export default function CoventryRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText('4400 4300 8522 5453'); 
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const formData = new FormData(e.currentTarget);
      // Принудительно вшиваем промокод в отправку
      formData.set('promoCode', 'COVENTRY50');

      const response = await fetch('/api/coventry-register', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Успешно! Перенаправляем их сразу на гугл-форму Coventry
        window.location.href = 'https://forms.gle/ntvJd1yMrgkJg1bMA';
      } else {
        const data = await response.json();
        setError(data.error || 'Произошла ошибка при регистрации. Попробуйте позже.');
      }
    } catch (err) {
      setError('Ошибка сети. Проверьте подключение к интернету.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full bg-[#0a0212] border border-purple-900/50 rounded-xl px-4 py-3 text-purple-100 placeholder-purple-900/80 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm";
  const labelClass = "block text-sm font-medium text-purple-200/70 mb-2";
  const sectionClass = "mb-10";
  const sectionTitleClass = "text-lg font-semibold text-white mb-5 border-b border-purple-900/30 pb-3";

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Блок 1 */}
      <div className={sectionClass}>
        <h3 className={sectionTitleClass}>1. Проект</h3>
        <div className="space-y-5">
          <div>
            <label htmlFor="teamName" className={labelClass}>Название команды</label>
            <input type="text" id="teamName" name="teamName" required placeholder="Например: Code Wizards" className={inputClass} />
          </div>

          <div>
            <label htmlFor="track" className={labelClass}>Направление</label>
            <select id="track" name="track" required defaultValue="" className={`${inputClass} appearance-none cursor-pointer`}>
              <option value="" disabled>Выберите трек разработки</option>
              <option value="Smart City & GreenTech">Smart City & GreenTech</option>
              <option value="Social & Human Capital">Social & Human Capital</option>
              <option value="Digital Economy & Future Tech">Digital Economy & Future Tech</option>
            </select>
          </div>
          
          {/* Промокод скрыт от глаз пользователей, но он отправится в базу */}
          <input type="hidden" name="promoCode" value="COVENTRY50" />
        </div>
      </div>

      {/* Блок 2 */}
      <div className={sectionClass}>
        <h3 className={sectionTitleClass}>2. Состав команды</h3>
        
        <div className="mb-6">
          <h4 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Капитан
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="captainName" required placeholder="ФИО" className={inputClass} />
            <input type="text" name="captainTg" required placeholder="Telegram (@username)" className={inputClass} />
            <input type="email" name="captainEmail" required placeholder="Email" className={inputClass} />
            <input type="tel" name="captainPhone" required placeholder="Номер телефона" className={inputClass} />
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-purple-200/70 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-900/80"></span> Участник 2
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="member2Name" required placeholder="ФИО" className={inputClass} />
            <input type="text" name="member2Tg" required placeholder="Telegram (@username)" className={inputClass} />
          </div>
        </div>
      </div>

      {/* Блок 3 */}
      <div className={sectionClass}>
        <h3 className={sectionTitleClass}>3. Дополнительные участники (Опционально)</h3>
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="member3Name" placeholder="ФИО (Участник 3)" className={inputClass} />
            <input type="text" name="member3Tg" placeholder="Telegram (@username)" className={inputClass} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="member4Name" placeholder="ФИО (Участник 4)" className={inputClass} />
            <input type="text" name="member4Tg" placeholder="Telegram (@username)" className={inputClass} />
          </div>
        </div>
      </div>

      {/* Блок 4 */}
      <div className={sectionClass}>
        <h3 className={sectionTitleClass}>4. Регистрационный взнос</h3>
        
        <div className="bg-purple-900/10 p-6 rounded-2xl border border-purple-500/20 mb-5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 gap-4">
            <div>
              {/* ОБНОВЛЕННЫЙ БЛОК ВЫРАВНИВАНИЯ ЦЕНЫ */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-2">
                <span className="line-through text-purple-200/30 text-sm md:text-base font-normal">
                  5000 тенге
                </span>
                <span className="text-green-400 font-semibold text-lg md:text-xl">
                  2500 тенге
                </span>
                <span className="text-fuchsia-400 text-xs md:text-sm font-medium bg-fuchsia-500/10 px-2.5 py-0.5 rounded-full border border-fuchsia-500/20 tracking-wide">
                  Специальная цена Coventry
                </span>
              </div>
              <p className="text-sm text-purple-200/80">Получатель: <span className="font-semibold text-white">ADIYA SHAMELOVA (Kaspi Gold)</span></p>
            </div>
            
            <div className="bg-[#0a0212] border border-purple-500/30 rounded-xl p-1.5 flex items-center w-full md:w-auto">
              <span className="text-white font-mono tracking-widest px-4 py-2 text-sm sm:text-base">
                4400 4300 8522 5453
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="bg-purple-600 hover:bg-purple-500 text-white rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors flex items-center gap-2 ml-auto"
              >
                {copied ? 'Скопировано' : 'Копировать'}
              </button>
            </div>
          </div>
          
          <ul className="text-sm text-purple-200/70 leading-relaxed space-y-2 list-disc list-inside">
            <li>Сделайте перевод по номеру карты в приложении вашего банка.</li>
            <li>В поле «Сообщение» обязательно укажите <span className="text-white font-medium">название вашей команды</span>.</li>
          </ul>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-900/20 border border-red-900/50 rounded-xl text-red-400 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-white hover:bg-neutral-200 text-black font-bold py-4 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 text-base shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
      >
        {isSubmitting ? 'Отправка заявки...' : 'Зарегистрироваться'}
      </button>
    </form>
  );
}

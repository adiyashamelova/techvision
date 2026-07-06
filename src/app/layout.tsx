import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

// Инициализируем шрифт с поддержкой латиницы и кириллицы
const inter = Inter({ subsets: ['latin', 'cyrillic'] });

// Настройки метаданных сайта для SEO и вкладок браузера
export const metadata: Metadata = {
  title: 'Регистрация на Tech Vision',
  description: 'Республиканский молодежный хакатон в гибридном формате',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      {/* Применяем шрифт и задаем темную тему по умолчанию */}
      <body className={`${inter.className} bg-slate-900 text-white min-h-screen`}>
        {/* Оборачиваем весь контент в main для семантики */}
        <main className="w-full h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
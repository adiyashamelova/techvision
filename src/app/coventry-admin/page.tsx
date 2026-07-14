'use client';

import { useState } from 'react';

export default function CoventryAdmin() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`/api/coventry-admin?password=${password}`);
      if (res.ok) {
        const json = await res.json();
        setData(json);
        setIsAuthenticated(true);
      } else {
        setError('Неверный пароль доступа!');
      }
    } catch (err) {
      setError('Ошибка сети при авторизации');
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#03000a] text-white flex items-center justify-center p-4 font-sans antialiased">
        <div className="max-w-md w-full bg-[#0d041e]/40 p-8 rounded-3xl border border-purple-900/30 backdrop-blur-xl text-center">
          <h1 className="text-2xl font-semibold mb-6 text-purple-400 tracking-tight">Вход в Админ-панель</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Введите пароль доступа"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#0a0212] border border-purple-900/50 rounded-xl px-4 py-3 text-purple-100 focus:outline-none focus:border-purple-500 font-normal"
              required
            />
            {error && <p className="text-red-400 text-sm font-normal">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-3 rounded-xl transition tracking-wide text-sm"
            >
              {loading ? 'Вход...' : 'Войти'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#03000a] text-white p-6 sm:p-10 font-sans antialiased">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-900/30 pb-5">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent tracking-tight">
              База Данных Coventry University Kazakhstan
            </h1>
            <p className="text-purple-300/50 text-sm mt-1 font-normal tracking-wide">
              Зарегистрированные команды (промокод COVENTRY50)
            </p>
          </div>
          <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-xl border border-green-500/20 text-sm font-medium tracking-wide self-start sm:self-center">
            Всего: {data.length} команд(ы)
          </span>
        </div>

        <div className="overflow-x-auto bg-[#0d041e]/20 border border-purple-900/20 rounded-2xl">
          <table className="min-w-full divide-y divide-purple-950/40">
            <thead className="bg-[#0a0212]">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-purple-300/40 uppercase tracking-wider">Команда / Трек</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-purple-300/40 uppercase tracking-wider">Капитан</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-purple-300/40 uppercase tracking-wider">Контакты</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-purple-300/40 uppercase tracking-wider">Состав</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-950/20 bg-[#0d041e]/10">
              {data.map((item, index) => {
                const captain = item.participants?.find((p: any) => p.role === 'captain');
                const members = item.participants?.filter((p: any) => p.role === 'member') || [];

                return (
                  <tr key={index} className="hover:bg-purple-950/10 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-purple-100 tracking-tight">{item.team_name || '—'}</div>
                      <div className="text-xs text-purple-400/80 mt-1 font-normal">{item.track || '—'}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-purple-100 font-medium tracking-tight">{captain?.name || '—'}</div>
                      <div className="text-xs text-purple-300/40 mt-1 font-normal tracking-wide">{captain?.telegram || '—'}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-purple-200/80 font-normal">{captain?.email || '—'}</div>
                      <div className="text-xs text-purple-300/40 mt-1 font-mono tracking-wider">{captain?.phone || '—'}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-xs text-purple-200/70 space-y-1 font-normal leading-relaxed">
                        {members.map((m: any, idx: number) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <span className="text-purple-500">•</span>
                            <span>{m.name}</span>
                            {m.telegram && <span className="text-purple-300/30">({m.telegram})</span>}
                          </div>
                        ))}
                        {members.length === 0 && <div className="text-purple-300/20">—</div>}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

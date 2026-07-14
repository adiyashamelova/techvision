import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // 1. Извлекаем базовые текстовые данные
    const teamName = formData.get('teamName')?.toString();
    const track = formData.get('track')?.toString();
    const promoCode = 'COVENTRY50'; // Жестко прописываем промокод Coventry

    // Расчет стоимости взноса на бэкенде (для Coventry всегда 2500)
    const fee = 2500;

    // Капитан (Обязательный участник)
    const captain = {
      role: 'captain',
      name: formData.get('captainName')?.toString(),
      telegram: formData.get('captainTg')?.toString(),
      email: formData.get('captainEmail')?.toString(),
      phone: formData.get('captainPhone')?.toString(),
    };

    // Участник 2 (Обязательный участник)
    const member2 = {
      role: 'member',
      name: formData.get('member2Name')?.toString(),
      telegram: formData.get('member2Tg')?.toString(),
    };

    // Участник 3 (Опциональный)
    const member3Name = formData.get('member3Name')?.toString();
    const member3 = member3Name ? {
      role: 'member',
      name: member3Name,
      telegram: formData.get('member3Tg')?.toString(),
    } : null;

    // Участник 4 (Опциональный)
    const member4Name = formData.get('member4Name')?.toString();
    const member4 = member4Name ? {
      role: 'member',
      name: member4Name,
      telegram: formData.get('member4Tg')?.toString(),
    } : null;

    // Собираем всех непустых участников в один массив (от 2 до 4 человек)
    const participants = [captain, member2, member3, member4].filter(Boolean);

    // Базовая валидация
    if (!teamName || !track) {
      return NextResponse.json(
        { error: 'Заполнены не все обязательные поля' },
        { status: 400 }
      );
    }

    // 2. Сохраняем данные в таблицу coventry_registrations
    const { error: dbError } = await supabase
      .from('coventry_registrations')
      .insert([
        {
          team_name: teamName,
          track: track,
          participants: participants, 
          promo_code: promoCode, // Сохраняем промокод Coventry
          fee: fee,              // Сохраняем итоговую сумму 2500
        }
      ]);

    if (dbError) {
      console.error('Ошибка БД:', dbError);
      throw new Error('Не удалось сохранить данные команды в базу');
    }

    // 3. Успешный ответ клиенту
    return NextResponse.json(
      { success: true, message: 'Регистрация успешно завершена' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Ошибка API регистрации:', error);
    return NextResponse.json(
      { error: error.message || 'Произошла внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}

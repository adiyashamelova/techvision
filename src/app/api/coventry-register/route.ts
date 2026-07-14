import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Инициализируем Supabase клиент напрямую по переменным окружения
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Динамически вытаскиваем все данные из пришедшей формы
    const dataToInsert: Record<string, any> = {};
    formData.forEach((value, key) => {
      dataToInsert[key] = value;
    });

    // На всякий случай жестко перезаписываем промокод, чтобы не было ошибок
    dataToInsert['promoCode'] = 'COVENTRY50';

    // Записываем данные в ТВОЮ НОВУЮ ТАБЛИЦУ coventry_registrations
    const { error } = await supabase
      .from('coventry_registrations')
      .insert([dataToInsert]);

    if (error) {
      console.error('Supabase Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Server error:', err);
    return NextResponse.json({ error: err.message || 'Ошибка сервера' }, { status: 500 });
  }
}

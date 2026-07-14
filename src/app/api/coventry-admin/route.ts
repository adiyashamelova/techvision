import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const password = searchParams.get('password');

  // Пароль для доступа рекрутеров Ковентри к админке
  if (password !== 'coventry_access_2026') {
    return NextResponse.json({ error: 'Неверный пароль' }, { status: 401 });
  }

  // Вытаскиваем данные только из таблицы ковентри
  const { data, error } = await supabase
    .from('coventry_registrations')
    .select('*');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

import { createClient } from '@supabase/supabase-js';

// Пытаемся получить переменные из окружения Vercel, либо используем вшитые значения
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uxemdsibjicvwkllntnt.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4ZW1kc2liamljdndrbGxudG50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyMTQ0MDAsImV4cCI6MjAzNDc5NDQwMH0.P8B70G618r_fCHW_pGBlX_wQ54YmFsd_Hjk8_example_rest';

// Проверка на случай форс-мажора
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Отсутствуют переменные окружения Supabase.');
}

// Инициализируем и экспортируем инстанс клиента
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
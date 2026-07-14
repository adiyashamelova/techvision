import CoventryRegistrationForm from '@/components/coventry-form';

export default function CoventryPage() {
  return (
    <main className="min-h-screen bg-[#03000a] text-white py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full space-y-8 bg-[#0d041e]/40 p-8 rounded-3xl border border-purple-900/30 backdrop-blur-xl">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-400 bg-clip-text text-transparent sm:text-4xl">
            Регистрация Coventry
          </h1>
          <p className="mt-2 text-sm text-purple-300/60">
            Специальная форма для абитуриентов Coventry University
          </p>
        </div>
        <CoventryRegistrationForm />
      </div>
    </main>
  );
}

import { LoginForm } from '@/components/login-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to manage Raymond Mukonda’s portfolio projects.',
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <main className="flex min-h-[70svh] items-center justify-center bg-slate-100 px-5 py-12">
      <section className="grid w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-xl md:grid-cols-2">
        <div className="flex flex-col justify-between bg-blue-700 p-8 text-white sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-100">
            Raymond Mukonda
          </p>
          <div className="my-12">
            <p className="mb-3 text-sm font-medium text-blue-100">Portfolio workspace</p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
              Welcome back.
            </h1>
            <p className="mt-4 max-w-xs leading-7 text-blue-100">
              Sign in to manage your projects and portfolio content.
            </p>
          </div>
          <p className="text-sm text-blue-100">Owner access</p>
        </div>
        <div className="p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-slate-900">Sign in</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Enter your account details to continue.
          </p>
          <div className="mt-8">
            <LoginForm />
          </div>
        </div>
      </section>
    </main>
  );
}

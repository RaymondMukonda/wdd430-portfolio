import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login', // custom login page
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      // Protect all routes under /dashboard
      const isProtected = nextUrl.pathname.startsWith('/dashboard');

      if (isProtected) {
        if (isLoggedIn) return true;
        return false; // redirects to /login
      }

      // Redirect logged-in users away from /login
      if (isLoggedIn && nextUrl.pathname === '/login') {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }

      return true;
    },
  },
  providers: [], // providers will be added in auth.ts
} satisfies NextAuthConfig;


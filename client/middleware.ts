import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ["/sign-in", "/sign-up","/",'/((?!.+\\.[\\w]+$|_next).*)', '/(api|trpc)(.*)'],
});

export const config = {
  matcher: ["/sign-in", "/sign-up","/",'/((?!.+\\.[\\w]+$|_next).*)', '/(api|trpc)(.*)'],
};

// middleware.js
import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/auth/signin' // Redirect to the sign-in page if not authenticated
  }
})

export const config = {
  matcher: ['/protected-route/:path*', '/dashboard/:path*'] // Add any routes you want to protect here
}

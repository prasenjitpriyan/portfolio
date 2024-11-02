import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-3">
      <SignIn />
    </div>
  )
}

export default SignInPage

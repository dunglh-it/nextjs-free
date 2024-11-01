// 'use client'

import LoginForm from '@/app/(auth)/login/login-form'

export default function LoginPage() {
  // const [email, setEmail] = useState('duthanhduoc@gmail.com')
  return (
    <div>
      <h1 className="text-xl font-semibold text-center">Đăng nhập</h1>
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </div>
  )
}

import LoginForm from '../../components/LoginForm';

export const metadata = {
  title: 'Login | LaunchFlow.ai',
  description: 'Sign in to your LaunchFlow.ai account to continue building your business.'
};

export default function LoginPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <LoginForm />
    </main>
  );
}

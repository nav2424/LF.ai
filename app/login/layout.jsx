// app/login/layout.jsx

export const metadata = {
  title: 'Login - LaunchFlow.ai',
  description: 'Login to access your LaunchFlow dashboard',
};

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

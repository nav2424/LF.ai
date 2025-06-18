export const metadata = {
  title: 'Login – LaunchFlow',
  description: 'Log in to your LaunchFlow dashboard.',
};

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
        {children}
      </body>
    </html>
  );
}

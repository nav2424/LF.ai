// app/login/layout.jsx

export const metadata = {
  title: "Login - LaunchFlow.ai",
  description: "Access your dashboard securely.",
};

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

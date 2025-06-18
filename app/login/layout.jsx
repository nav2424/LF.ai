// app/login/layout.jsx
export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background: '#f9fafb'
        }}>
          {children}
        </div>
      </body>
    </html>
  );
}

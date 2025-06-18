// app/layout.jsx

export const metadata = {
  title: 'LaunchFlow.ai',
  description: 'AI-powered startup builder',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}

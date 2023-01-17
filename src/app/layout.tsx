import "./globals.scss";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return (
    <html lang="nl-BE">
      <head />
      <body className="bg-green-500 p-12">{children}</body>
    </html>
  );
}

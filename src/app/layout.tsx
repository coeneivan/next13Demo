import "../style/globals.scss";

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
      <body className="bg-red-500">{children}</body>
    </html>
  );
}

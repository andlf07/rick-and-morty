import { Providers } from '@/components';

export const metadata = {
  title: 'Rick and Morty project, for aibomarket test',
  description: 'Aibomarket test',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import { Providers } from '@/components';

export const metadata = {
  title: 'Rick and Morty project, for aibomarket test',
  description: 'Aibomarket test',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Providers>
  );
}

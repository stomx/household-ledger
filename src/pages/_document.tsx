import { Html, Head, Main, NextScript } from 'next/document';
import Footer from '@/components/layouts/partials/footer';
import Header from '@/components/layouts/partials/header';

export default function Document() {
  return (
    <Html lang='ko' className='w-full h-full'>
      <Head />
      <body className='flex flex-col items-center w-full h-full'>
        <Header />
        <main className='w-full max-w-7xl'>
          <Main />
        </main>
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}

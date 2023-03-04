import { Html, Head, Main, NextScript } from 'next/document';
import Footer from '@/components/layouts/partials/footer';
import Header from '@/components/layouts/partials/header';
import LimitWidthContainer from '@/components/layouts/partials/container';

export default function Document() {
  return (
    <Html lang='ko' className='w-full h-full'>
      <Head />
      <body className='flex flex-col items-center w-full h-full bg-gray-100'>
        <Header />
        <main className='flex flex-col items-center justify-center w-full h-full py-4'>
          <LimitWidthContainer className='w-full h-full min-h-[calc(100vh-3rem)] max-w-7xl'>
            <Main />
          </LimitWidthContainer>
        </main>
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}

import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>우리가족 가계부</title>
        <meta name='description' content='우리가족 입맛에 맞는 가계부' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1 className='text-blue-500'>Hello World</h1>
      </main>
    </>
  );
}

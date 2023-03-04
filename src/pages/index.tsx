import Head from 'next/head';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

export default function Home() {
  return (
    <>
      <Head>
        <title>우리가족 가계부</title>
        <meta name='description' content='우리가족 입맛에 맞는 가계부' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col justify-center gap-4 contents-wrap'>
        <div className='flex items-center justify-between page-header'>
          <div className='page-header-info-wrap'>
            <h2 className='text-xl'>거래내역</h2>
          </div>
          <div className='flex items-center page-header-functions-wrap'>
            <button className='page-header-functions-wrap__button'>추가</button>
          </div>
        </div>
        <div className='p-4 text-xs bg-white border rounded-md transaction-list-wrap'>
          <ol className='flex flex-col justify-center divide-y transaction-list'>
            <li className='px-2 py-3 transaction-item'>
              <ul className='flex items-center w-full gap-5 text-sm text-center'>
                <li className='w-3/24'>날짜</li>
                <li className='w-2/24'>주체</li>
                <li className='w-3/24'>왼쪽</li>
                <li className='w-3/24'>오른쪽</li>
                <li className='w-9/24'>내역</li>
                <li className='w-2/24'>금액</li>
                <li className='w-2/24'>총 지출액</li>
              </ul>
            </li>
            <li className='px-2 py-3 transaction-item'>
              <ul className='flex items-center w-full gap-5'>
                <li className='text-center bg-gray-100 w-3/24'>
                  {dayjs().format('YYYY-MM-DD ddd')}
                </li>
                <li className='text-center bg-gray-100 w-2/24'>나</li>
                <li className='bg-gray-100 w-3/24'>왼쪽</li>
                <li className='bg-gray-100 w-3/24'>오른쪽</li>
                <li className='bg-gray-100 w-9/24'>내역</li>
                <li className='text-right bg-gray-100 w-2/24'>금액</li>
                <li className='text-right bg-gray-100 w-2/24'>총 지출액</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

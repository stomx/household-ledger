import LimitWidthContainer from '@/components/layouts/partials/container';
import Link from 'next/link';
const Header = () => {
  return (
    <header className='flex justify-center w-full bg-gray-300'>
      <LimitWidthContainer className='flex items-center justify-between h-12 gap-3 flex-nowrap'>
        <div className='flex gap-3 links'>
          <Link href='/' prefetch>
            <h1>우리가족 가계부</h1>
          </Link>
        </div>
        <div className='flex gap-3 functions'>
          <Link href='/login' prefetch>
            로그인
          </Link>
          <Link href='/signup' prefetch>
            회원가입
          </Link>
        </div>
      </LimitWidthContainer>
    </header>
  );
};

export default Header;

import Link from 'next/link';
import { BiPlus } from 'react-icons/bi'
import Enter from "./enter";

export default function Home() {
  return (
    <>
      Home
      <Link href='/postings/upload'>
        <span className='w-10 h-10  bg-lime-800 flex justify-center items-center absolute bottom-5 right-5 rounded-md'><BiPlus size="24" color="white" /></span>
      </Link>
    </>
  );
}

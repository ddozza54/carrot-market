import Link from 'next/link';
import { BiPlus } from 'react-icons/bi'
import Head from 'next/head';
import useUser from '@libs/client/useUser';
import useSWR from 'swr';
import Item from '@components/item';
import { Posting } from '@prisma/client';

interface PostingsResponse {
  ok: boolean,
  postings: Posting[];
}

export default function Home() {
  const { user, isLoading } = useUser();
  const { data } = useSWR<PostingsResponse>('/api/postings');
  console.log(data)
  return (
    <>
      <Link href='/postings/upload'>
        <span className='w-10 h-10  bg-lime-800 flex justify-center items-center absolute bottom-5 right-5 rounded-md'><BiPlus size="24" color="white" /></span>
      </Link>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col space-y-5 divide-y">
        {data?.postings?.map((posting) => (
          <Item
            id={posting.id}
            key={posting.id}
            title={posting.title}
            hearts={1}
            comments={1}
          />
        ))}

      </div>
    </>
  );
}

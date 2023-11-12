import HeartIcon from '@/public/HeartIcon';
import useMutation from '@libs/client/useMutation';
import { Posting, User } from '@prisma/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';

interface PostingWithUser extends Posting {
    user: User;
}

interface PostingDetailResponse {
    ok: boolean,
    posting: PostingWithUser;
}

export default function PostingDetail() {
    const router = useRouter();
    const { data } = useSWR<PostingDetailResponse>(
        router.query.id ? `/api/tweet/${router.query.id}` : null)
    const [toggleFav] = useMutation(`/api/tweet/${router.query.id}/fav`)
    const onFavClick = () => {
        toggleFav({})
    }
    return (
        <div className='w-full '>
            <h2>{data?.posting.title}</h2>
            <p>{data?.posting.description}</p>

            <div className='flex border-2'>
                <div className='w-16 h-16 bg-lime-200 rounded-full' />
                <div className='flex flex-col'>
                    <span>{data?.posting?.user?.name}</span>
                    <Link href={`/users/profiles/${data?.posting?.user.id}`}>View Profile</Link>
                </div>
            </div>
            <button onClick={onFavClick}>
                <HeartIcon width={30} height={30} />
            </button>
        </div>
    );
}


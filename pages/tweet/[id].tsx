import useMutation from '@libs/client/useMutation';
import { Posting, User } from '@prisma/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'
import { BiArrowBack } from 'react-icons/bi'
import Head from 'next/head';

interface PostingWithUser extends Posting {
    user: User;
    _count: {
        favs: number;
    }
}

interface PostingDetailResponse {
    ok: boolean,
    isLiked: boolean,
    realatedPosting: Posting;
    posting: PostingWithUser;
}

export default function PostingDetail() {
    const router = useRouter();
    const { mutate } = useSWRConfig();
    const { data, mutate: boundMutate } = useSWR<PostingDetailResponse>(
        router.query.id ? `/api/tweet/${router.query.id}` : null);
    const [toggleFav] = useMutation(`/api/tweet/${router.query.id}/fav`)
    const onFavClick = () => {
        if (!data) return;
        boundMutate((prev) => prev && { ...prev, isLiked: !prev.isLiked }, false);
        toggleFav({})
    }
    return (
        <>
            <Head>
                <title>{data?.posting.title}</title>
            </Head>
            <div className='w-full '>

                <div>
                    <BiArrowBack size={30} />
                    <div>

                    </div>
                </div>


                <h2>{data?.posting.title}</h2>
                <p>{data?.posting.description}</p>

                <div className='flex border-2'>
                    <div className='w-16 h-16 bg-lime-200 rounded-full' />
                    <div className='flex flex-col'>
                        <span>{data?.posting?.user?.name}</span>
                        <Link href={`/users/profiles/${data?.posting?.user.id}`}>View Profile</Link>
                    </div>
                </div>
                <button onClick={onFavClick}
                    className={`text-lg font-bold ${data?.isLiked ? "text-amber-400" : "text-gray-400"}`}>
                    {data?.isLiked ? <BsSuitHeartFill /> : <BsSuitHeart />}
                </button>
            </div>
        </>
    );
}


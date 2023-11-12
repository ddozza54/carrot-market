import useMutation from '@libs/client/useMutation';
import { Posting, User } from '@prisma/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'
import { BiArrowBack } from 'react-icons/bi'
import { FiRepeat, FiShare } from 'react-icons/fi'
import { FaRegComment } from 'react-icons/fa6'
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
    const ICON_SIZE = 30;
    return (
        <>
            <Head>
                <title>{data?.posting.title}</title>
            </Head>
            <div className='w-full p-3'>

                <div className='pb-3'>
                    <BiArrowBack size={30} />
                </div>

                <div className='flex space-x-2 space-y-2'  >
                    <div className='w-16 h-16 bg-lime-200 rounded-full' />
                    <div className='flex flex-col'>
                        <span className='font-semibold text-lime-600'>{data?.posting?.user?.name.toUpperCase()}</span>
                        <Link href={`/users/profiles/${data?.posting?.user.id}`}>
                            <span className='text-zinc-400'>View Profile</span>
                        </Link>
                    </div>
                </div>

                <div className='p-4'>

                    <h2 className='font-bold text-2xl'>{data?.posting.title}</h2>
                    <p className='py-6'>{data?.posting.description}</p>

                    <div className='flex justify-between items-center w-1/3'>
                        <button onClick={onFavClick}
                            className={`flex items-center space-x-1 text-lg font-bold ${data?.isLiked ? "text-amber-400" : "text-gray-400"}`}>
                            {data?.isLiked ? <BsSuitHeartFill /> : <BsSuitHeart />}
                            <span className='text-lg font-bold text-gray-400'>{data?.posting?._count?.favs || 0}</span>
                        </button>
                        <button
                            className={`text-lg font-bold text-gray-400`}>
                            <FaRegComment />
                        </button>
                        <div className='text-lg font-bold text-gray-400'>
                            <FiRepeat />
                        </div>
                        <div className='text-lg font-bold text-gray-400'>
                            <FiShare />
                        </div>
                    </div>

                    <span className='text-'>답글 3개 & 좋아요 {data?.posting?._count?.favs || 0}개</span>
                </div>

                <div className='flex space-x-2 pb-3'>
                    <div className='w-8 h-8 bg-lime-700 rounded-full' />
                    <div className='flex flex-col'>
                        <span className='text-sm text-zinc-600'>가짜 유저</span>
                        <span>오우! 정말 멋진 SNS 에요!</span>
                    </div>
                </div>

                <div className='flex space-x-2'>
                    <div className='w-8 h-8 bg-lime-500 rounded-full' />
                    <div className='flex flex-col'>
                        <span className='text-sm text-zinc-600'>가짜 유저2</span>
                        <span>지금은 새벽 3시가 다 되어가는군!</span>
                    </div>
                </div>
            </div>

        </>
    );
}


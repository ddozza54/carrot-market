import HeartIcon from '@/public/HeartIcon';
import { User } from '@prisma/client';
import Link from 'next/link';
import { FiMoreHorizontal, FiShare, FiRepeat } from 'react-icons/fi'
import { FaRegComment } from 'react-icons/fa';

interface ItemProps {
    title: string;
    hearts: number;
    id: number;
    image?: string
    comments?: number;
    description: string;
    userName?: string | "Anonymous";
    createAt: Date;
}

export default function Item({ title, hearts, id, createAt, image, description, userName }: ItemProps) {
    const [year, month, date] = createAt.toString().slice(0, 10).split("-");
    const ICON_SIZE = 30;
    return (
        <>
            <div className='grid grid-cols-6 grid-rows-2 m-3 border-2'>
                <div className='gird-span-1 grid-rows-1'>
                    <div className='w-16 h-16 rounded-full bg-lime-200 '></div>
                </div>
                <div className='col-start-2 col-end-7 gird-row-1  px-3 pb-2'>
                    <div className='flex justify-between'>
                        <h4 className='text-lg font-bold'>{userName && userName.toUpperCase()}</h4>
                        <div className='flex items-center space-x-3'>
                            <span className='text-zinc-500'>{`${year}/${month}/${date}`}</span>
                            <FiMoreHorizontal size={ICON_SIZE} />
                        </div>
                    </div>
                    <Link href={`tweet/${id}`}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </Link>
                </div>
                <div className='gird-span-3 gird-row-2'></div>
                <div className='col-start-2 col-end-7 gird-row-2 flex flex-col justify-end'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <HeartIcon width={30} height={30} />
                            <span className='text-zinc-600 font-bold text-lg'>{hearts}</span>
                        </div>
                        <div className='flex items-center'>
                            <FaRegComment size={ICON_SIZE} />
                            <span className='text-zinc-600 font-bold text-lg'>{hearts}</span>
                        </div>
                        <div className='flex items-center'>
                            <FiRepeat size={ICON_SIZE} />
                            <span className='text-zinc-600 font-bold text-lg'>{hearts}</span>
                        </div>
                        <FiShare size={ICON_SIZE} />
                    </div>
                </div>
            </div>
        </>
    );
}


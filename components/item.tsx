import Link from 'next/link';
import { BsSuitHeart } from 'react-icons/bs'
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

export default function Item({ title, hearts, id, createAt, image, description, userName, comments }: ItemProps) {
    const [year, month, date] = createAt.toString().slice(0, 10).split("-");
    const ICON_SIZE = 20;
    return (
        <>
            <div className='grid grid-cols-6  m-3 border-bottom-2 py-4'>
                <div className='gird-span-1 row-start-1 row-end-3 flex justify-end '>
                    <div className='w-16 h-16 mr-3 rounded-full bg-lime-200 '></div>
                </div>
                <div className='col-start-2 col-end-7 gird-row-1  px-3 pb-2'>
                    <div className='flex justify-between'>
                        <h4 className='text-md font-bold text-lime-600'>{userName && userName.toUpperCase()}</h4>
                        <div className='flex items-center space-x-3'>
                            <span className='text-zinc-500'>{`${year}/${month}/${date}`}</span>
                            <FiMoreHorizontal size={ICON_SIZE} />
                        </div>
                    </div>
                    <Link href={`tweet/${id}`}>
                        <h3 className='font-semibold text-xl'>{title}</h3>
                        <p>{description}</p>
                    </Link>
                </div>
                <div className='col-start-2 col-end-7 gird-row-2 flex flex-col justify-end'>
                    <div className='flex items-center justify-between px-3'>
                        <div className='flex items-center'>
                            <BsSuitHeart size={ICON_SIZE} />
                            <span className='ml-1 text-zinc-600 font-bold text-lg'>{hearts}</span>
                        </div>
                        <div className='flex items-center'>
                            <Link href={`/tweet/${id}`}>
                                <FaRegComment size={ICON_SIZE} />
                            </Link>
                            <span className='ml-1 text-zinc-600 font-bold text-lg'>{comments}</span>
                        </div>
                        <div onClick={() => alert("준비중인 서비스 입니다.")} className='flex items-center'>
                            <FiRepeat size={ICON_SIZE} />
                            <span className='ml-1 text-zinc-600 font-bold text-lg'>retweet Count</span>
                        </div>
                        <div onClick={() => alert("준비중인 서비스 입니다.")}>
                            <FiShare size={ICON_SIZE} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


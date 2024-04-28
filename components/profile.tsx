import Link from 'next/link';

interface ProfileProps {
    name?: string;
    id?: number;
}

export default function Profile({ name = '알 수 없는 사용자', id }: ProfileProps) {
    return (
        <div className='flex space-x-2 space-y-2'  >
            <div className='w-16 h-16 bg-lime-200 rounded-full' />
            <div className='flex flex-col'>
                <span className='font-semibold text-lime-600'>{name?.toUpperCase()}</span>
                {id && <Link href={`/users/profiles/${String(id)}`}>
                    <span className='text-zinc-400'>View Profile</span>
                </Link>}
            </div>
        </div>
    )
}
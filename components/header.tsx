import Icon from '@/public/Icon';
import Link from 'next/link';
import React from 'react';

export default function Header() {
    return (
        <div className='flex items-center justify-center w-full p-2 bg-lime-600 
        hover:cursor-pointer'>
            <Link href='/'>
                <Icon />
            </Link>
        </div>
    );
}


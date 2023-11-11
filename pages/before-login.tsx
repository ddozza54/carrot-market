import Button from '@components/button';
import { cls } from '@libs/client/utils';
import Link from 'next/link';
import React from 'react';

export default function beforeLogin() {
    return (
        <div className="mt-16 px-4">
            <h3 className="text-3xl text-center py-10">친구들의
                <span className='text-lime-500'>사진</span>
                과 <span className='text-lime-500'>글</span>을 보려면 가입하세요.</h3>
            <div className="mt-8">
                <div className="relative">
                    <button onClick={() => { alert("준비중인 서비스 입니다. 로그인 하세요.") }} className='w-full bg-lime-500 hover:bg-lime-600 text-white  px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 py-3 text-base focus:ring-lime-500 focus:outline-none'>
                        Ddoing 앱 다운로드</button>
                    <div className="absolute w-full border-t border-gray-300" />
                    <div className='w-full flex justify-center pt-8'>
                        <Link href='/log-in' >
                            <span className='text-lime-600 font-bold'>로그인</span>
                        </Link>
                        <span> 또는 </span>
                        <Link href='/create-account' >
                            <span className='text-lime-600 font-bold'>가입</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


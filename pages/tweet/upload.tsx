import Button from '@components/button';
import Input from '@components/input';
import TextArea from '@components/textarea';
import useMutation from '@libs/client/useMutation';
import useUser from '@libs/client/useUser';
import { Posting } from '@prisma/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface UploadPostingForm {
    title: string;
    description: string;
}

interface UploadPostingMutation {
    ok: boolean;
    posting: Posting;
}
export default function Upload() {
    const router = useRouter();
    const { user, isLoading } = useUser();
    const { register, handleSubmit } = useForm<UploadPostingForm>();
    const [uploadPosting, { loading, data }] = useMutation<UploadPostingMutation>('/api/tweet')
    const onValid = (data: UploadPostingForm) => {
        if (loading) return;
        uploadPosting(data);
    }
    useEffect(() => {
        if (data?.ok) {
            router.push(`/tweet/${data.posting.id}`)
        }
    }, [data, router])
    return (
        <div className='px-3'>
            <h2 className='font-bold text-3xl py-8'>Create Posting</h2>
            <div className='flex items-center pb-4'>
                <div className='w-10 h-10 rounded-full bg-lime-400'></div>
                <span className='pl-2 font-bold text-lime-800'>{user?.name.toUpperCase()}</span>
            </div>
            <form onSubmit={handleSubmit(onValid)}>
                <Input
                    register={register("title", { required: true, })}
                    required
                    kind='text'
                    type='text'
                    placeholder='title'
                    name='title' />
                <TextArea
                    register={register("description", { required: true })}
                    name='description'
                />
                <Button text={loading ? "Loading..." : "Posting"} />
            </form>

        </div>
    );
}


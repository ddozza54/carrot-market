import Button from '@components/button';
import Input from '@components/input';
import TextArea from '@components/textarea';
import useMutation from '@libs/client/useMutation';
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
        <div>
            <h2 className='font-bold'>Posting</h2>
            <div>
                <label className="w-full cursor-pointer text-gray-600 hover:border-lime-500 hover:text-lime-500 flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
                    <svg
                        className="h-12 w-12"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <input className="hidden" type="file" />
                </label>
            </div>
            <form onSubmit={handleSubmit(onValid)}>
                <Input
                    register={register("title", { required: true, })}
                    required
                    kind='text'
                    type='text'
                    placeholder='title'
                    label='Title'
                    name='title' />
                <TextArea
                    register={register("description", { required: true })}
                    name='description'
                    label='Description' />
                <Button text={loading ? "Loading..." : "Posting"} />
            </form>

        </div>
    );
}


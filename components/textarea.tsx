import { UseFormRegisterReturn } from 'react-hook-form';

interface TextAreaProps {
    label?: string;
    name?: string;
    register: UseFormRegisterReturn;
    [key: string]: any;
}

export default function TextArea({
    label,
    name,
    register,
    ...rest
}: TextAreaProps) {
    return (
        <div>
            {label ? (
                <label
                    htmlFor={name}
                    className="mb-1 block text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
            ) : null}
            <textarea
                id={name}
                placeholder="What's on your mind"
                {...register}
                className="mt-1 p-2 shadow-sm w-full border-2 focus:ring-lime-500 rounded-md border-gray-200 focus:border-lime-500 "
                rows={4}
                {...rest}
            />
        </div>
    );
}
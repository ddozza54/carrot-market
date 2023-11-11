import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@components/button";
import Input from "@components/input";
import useMutation from "@libs/client/useMutation";
import { cls } from "@libs/client/utils";
import { useRouter } from 'next/router';
import Link from 'next/link';

interface EnterForm {
  email?: string;
  phone?: string;
  password?: string;
  passwordCheck: string;
  userName: string;
}

interface TokenForm {
  token: string;
}

interface MutationResult {
  ok: boolean;
}

const CreateAccount: NextPage = () => {
  const [enter, { loading, data, error }] =
    useMutation<MutationResult>("/api/users/create-account");
  // const [confirmToken, { loading: tokenLoading, data: tokenData }] =
  //   useMutation<MutationResult>("/api/users/confirm");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<EnterForm>();
  const { register: tokenRegister, handleSubmit: tokenHandleSubmit } =
    useForm<TokenForm>();
  const onValid = (validForm: EnterForm) => {
    if (loading) return;
    const agreeCreating = confirm("회원가입 하시겠습니까?");
    agreeCreating ? enter(validForm) : null;
  };
  // const onTokenValid = (validForm: TokenForm) => {
  //   if (tokenLoading) return;
  //   confirmToken(validForm);
  // };
  const router = useRouter();
  useEffect(() => {
    if (data?.ok) {
      router.push("/log-in");
    }
  }, [data, router])

  // console.log(tokenData)
  return (
    <div className="mt-16 px-4">
      <h3 className="text-3xl font-bold text-center">Create Account</h3>
      <div className="mt-12">
        <div className="flex flex-col items-center">
        </div>
        <form
          onSubmit={handleSubmit(onValid)}
          className="flex flex-col mt-8 space-y-4"
        >
          <Input
            register={register("userName", { required: true })}
            name='userName'
            placeholder='userName'
            type='text'
            kind='text'
            required
          />

          <Input
            register={register("email", {
              required: true,
            })}
            name="email"
            placeholder="Email address"
            type="email"
            required
          />
          <Input
            register={register("phone", {
              required: true,
              minLength: {
                value: 10,
                message: "올바른 핸드폰 번호를 입력하세요"
              }
            })}
            name="phone"
            type="number"
            kind="phone"
            placeholder='Phone Number'
            error={errors.phone?.message}
            required
          />
          <Input
            register={register("password", { required: true })}
            name='password'
            placeholder='Password'
            type='password'
            kind='text'
            required
          />
          {/* <Input
            register={register("passwordCheck", {
              required: true,
            })}
            name='password Confirm'
            placeholder='Password Confirm'
            type='password'
            kind='text'
            required
          /> */}

          <Button text={loading ? "Loading" : "Create Account"} />

        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute w-full border-t border-gray-300" />
            <div className='w-full flex justify-center pt-8'>
              <span>계정이 있으신가요?</span>
              <Link href='/log-in' >
                <span className='text-lime-600 font-bold'>로그인하기</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateAccount;
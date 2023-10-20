import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

export default function Forms() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const onValid = (data: LoginForm) => {
    console.log("im valid");
  };
  const onInvaild = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid, onInvaild)}>
        <input
          {...register("username", {
            required: "Username is required",
            minLength: {
              message: "The username should be longer than 5 chars.",
              value: 5,
            },
          })}
          type="text"
          placeholder="Username"
        />
        <input
          {...register("password", {
            required: true,
          })}
          type="password"
          placeholder="password"
        />
        <input
          {...register("email", {
            required: true,
          })}
          type="text"
          placeholder="E-mail"
        />
      </form>
    </div>
  );
}

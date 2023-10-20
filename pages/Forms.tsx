import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange",
  });
  const onValid = (data: LoginForm) => {
    console.log("im valid");
  };
  const onInvaild = (errors: FieldErrors) => {
    console.log(errors);
  };
  console.log(errors);
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
            validate: {
              notGmail: (value) =>
                // !value.includes("@gmail.com") ? "" : "Gmail is not allowed",
                !value.includes("@gmail.com") || "Gmail is not allowed",
            },
          })}
          type="text"
          placeholder="E-mail"
          className={!!errors.email ? "border-red-300" : ""}
        />
        <span>Error: {errors.email?.message}</span>
      </form>
    </div>
  );
}

import { useForm } from "react-hook-form";

export default function Forms() {
  const { register, handleSubmit } = useForm();
  const onValid = () => {
    console.log("im valid");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...(register("username"),
          {
            required: true,
          })}
          type="text"
          placeholder="Username"
        />
      </form>
    </div>
  );
}

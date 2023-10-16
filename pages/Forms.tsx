import { useForm } from "react-hook-form";

export default function Forms() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input
          {...register("username")}
          type="text"
          placeholder="Username"
          required
        />
      </form>
    </div>
  );
}

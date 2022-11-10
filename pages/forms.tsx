import React from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  email: string;
  password: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<LoginForm>({
    mode: "onChange",
  });
  const onValid = (data: LoginForm) => {
    console.log(data);
    resetField("password");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "아이디는 필수 입력값입니다.",
          minLength: {
            value: 5,
            message: "5자 이상 입력해야 합니다.",
          },
        })}
        type="text"
        placeholder="username"
      />
      <input
        {...register("email", {
          required: "이메일은 필수 입력값입니다.",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") ? "" : "gmail은 안댐",
          },
        })}
        type="email"
        placeholder="email"
        className={`${Boolean(errors.email) ? "border-red-500" : ""}`}
      />
      {errors.email?.message}

      <input
        {...register("password", { required: "비밀번호는 필수 입력값입니다." })}
        type="password"
        placeholder="password"
      />
      <input type="submit" value="create Account" />
    </form>
  );
}

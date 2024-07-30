// import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';

const SignUp = () => {
  const loginSchema = z.object({
    username: z
      .string()
      .min(7, {
        message: 'User name must be at least 8 characters',
      })
      .nonempty({
        message: 'User name is required',
      }),

    email: z
      .string()
      .email({
        message: 'Invalid email address',
      })
      .nonempty({
        message: 'Email is required',
      }),

    password: z
      .string()
      .nonempty({
        message: 'Password is required',
      })
      .min(7, {
        message: 'Password must be at least 8 characters',
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });
  async function submitHandler(data: z.infer<typeof loginSchema>) {
    console.log(data);
    alert('Valid data');
  }
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="absolute top-[50%] translate-y-[-50%] lg:left-[calc(50%+150px)] left-[50%] translate-x-[-50%] lg:translate-x-0    bg-white flex flex-col lg:p-8 p-6 lg:gap-3 gap-2 rounded-xl "
    >
      <h1 className="text-2xl font-bold">Create an Account</h1>

      <p className="text-[13px] text-black text-opacity-50">
        Enter your information to create an account
      </p>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="email"
          className="text-[13px] text-black text-opacity-50"
        >
          User Name
        </label>
        <input
          id="email"
          type="username"
          placeholder="sample"
          {...register('username')}
          className={`px-3 py-3 bg-black bg-opacity-[0.12] rounded-sm w-[280px] text-[13px] placeholder:font-thin placeholder:text-black placeholder:text-opacity-50 border border-solid ${
            errors.username ? 'border-red-500 bg-red-500' : 'border-none'
          } `}
        />
        {errors.username && (
          <p className="text-xs text-red-500 ">{errors.username.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="email"
          className="text-[13px] text-black text-opacity-50"
        >
          Email Address
        </label>
        <input
          id="email"
          type="text"
          placeholder="sample123@gmail.com"
          {...register('email')}
          className={`px-3 py-3 bg-black bg-opacity-[0.12] rounded-sm w-[280px] text-[13px] placeholder:font-thin placeholder:text-black placeholder:text-opacity-50 border border-solid ${
            errors.email ? 'border-red-500 bg-red-500' : 'border-none'
          } `}
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="password"
          className="text-[13px] text-black text-opacity-50 "
        >
          Password
        </label>
        <input
          type="text"
          id="password"
          placeholder="sample451"
          {...register('password')}
          className={`px-3 py-3 bg-black bg-opacity-[0.12] rounded-sm w-[280px] text-[13px] placeholder:font-thin placeholder:text-black placeholder:text-opacity-50 border border-solid ${
            errors.password ? 'border-red-500 bg-red-500' : 'border-none'
          } `}
        />
        {errors.password && (
          <p className="text-xs text-red-500 ">{errors.password.message}</p>
        )}
      </div>

      <button className="w-full py-2 text-center text-white bg-[var(--customGreen)] rounded-sm text-[14px] font-medium">
        {isSubmitting ? 'Signing Up...' : 'Sign Up'}
      </button>
      <p className="text-[13px] text-black text-opacity-50">
        Already have an account ?{' '}
        <Link to={'/signin'} className="text-[var(--customGreen)] font-bold">
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default SignUp;

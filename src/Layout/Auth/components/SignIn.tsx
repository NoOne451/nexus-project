import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';

const SignIn = () => {
  const loginSchema = z.object({
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
      .min(8, {
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
      className="absolute top-[50%] translate-y-[-50%] lg:left-[calc(50%+150px)] left-[50%] translate-x-[-50%] lg:translate-x-0    bg-white flex flex-col lg:p-8 p-6 lg:gap-4 gap-3 rounded-xl "
    >
      <h1 className="text-2xl font-bold">Welcome Back</h1>

      <p className="text-[13px] text-black text-opacity-50">
        Sign in with email address and password
      </p>
      <div className="flex flex-col gap-2">
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
      <div className="flex flex-col gap-2">
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
          }`}
        />
        {errors.password && (
          <p className="text-xs text-red-500">{errors.password.message}</p>
        )}
      </div>

      <div className="flex justify-between w-full">
        <div className="flex items-center gap-3">
          <div className="checkbox-wrapper-12">
            <div className="cbx">
              <input id="cbx-12" type="checkbox" />
              <label htmlFor="cbx-12" />
              <svg width={10} height={10} viewBox="0 0 15 14" fill="none">
                <path d="M2 8.36364L6.23077 12L13 2" />
              </svg>
            </div>
            {/* Gooey*/}
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="goo-12">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation={4}
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                    result="goo-12"
                  />
                  <feBlend in="SourceGraphic" in2="goo-12" />
                </filter>
              </defs>
            </svg>
          </div>

          <p className="text-[13px] font-medium">Remember me</p>
        </div>
        <div className="text-[13px] text-black text-opacity-50">
          Forgot Password?
        </div>
      </div>
      <button className="w-full py-2 text-center text-white bg-[var(--customGreen)] rounded-sm text-[14px] font-medium">
        {isSubmitting ? 'Signing In...' : 'Sign In'}
      </button>
      <p className="text-[13px] text-black text-opacity-50">
        Don't have an account ?{' '}
        <Link to="/signup" className="text-[var(--customGreen)] font-bold">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default SignIn;

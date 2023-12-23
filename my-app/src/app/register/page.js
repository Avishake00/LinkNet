import LoginGoogle from "@/components/buttons/LoginGoogle";
import Link from "next/link";
import React from "react";

const registerpage = () => {
  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="md:p-6 shadow-md max-w-screen-md w-full bg-gray-100">
        <div className="py-7">
          <h2 className="text-3xl font-bold  text-center">Join LinkNet</h2>
          <h3 className="text-center text-slate-500 text-sm">Sign up for free!</h3>
        </div>
        <form action="/" method="post">
          <div className="mb-4">
            <input
              type="text"
              id="username"
              placeholder="Email"
              name="username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-violet-700 focus:border-2"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              placeholder="LinkNet/username"
              name="username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-violet-700 focus:border-2"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-violet-700 focus:border-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-200 text-slate-400 font-semibold border py-2 rounded-full hover:bg-violet-600 hover:text-gray-100 focus:outline-none focus:shadow-outline-blue"
          >
            Create account
          </button>
        </form>
        <p className="text-gray-600 mt-8 text-center">
          By clicking <a className="font-semibold">Create account</a>, you agree to Linktree's
          <Link className="underline mx-1" href={'/terms'}>Terms and Conditions</Link> and confirm
          you have read our
          <Link className="mx-1 underline" href={'/privacy'}>Privacy Notice</Link>. You may receive offers, news and updates from us.
        </p>
        <p className="text-center text-sm py-4">OR</p>
        <hr className="my-3" />
        <LoginGoogle />
        <p className="text-center text-gray-400 py-4">
         Already have an account?
          <Link className="text-violet-700 px-1 underline" href={'/Login'}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default registerpage;

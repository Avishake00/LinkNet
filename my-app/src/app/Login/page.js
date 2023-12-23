import LoginGoogle from "@/components/buttons/LoginGoogle";
import Link from "next/link";
import React from "react";
const LoginPage = () => {
	return (
		<div className="bg-white h-screen flex justify-center items-center">
			<div className="md:p-6 shadow-md max-w-screen-md w-full bg-gray-100">
                <div className="py-7">

				<h2 className="text-3xl font-bold  text-center">Welcome Back</h2>
                <h3 className="text-center text-slate-500 text-sm">Login to your LinkNet</h3>
                </div>
				<form action="/" method="post">
					<div className="mb-4">
						<input
							type="text"
							id="username"
							placeholder="Email or username"
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
                        <span>
                        <Link className="text-sm text-violet-700 px-2" href={"/login/forgotpassword"}>Forgot Password</Link>
                        <Link className="text-sm text-violet-700 px-2" href={"/login/forgotusername"}>Forgot Username</Link>
                    </span>
					</div>
                    

					<button
						type="submit"
						className="w-full bg-gray-200 text-slate-400 font-semibold border py-2 rounded-full hover:bg-violet-600 hover:text-gray-100 focus:outline-none focus:shadow-outline-blue"
					>
						Login
					</button>
				</form>
				<p className="text-center text-sm py-4">OR</p>
				<hr className="my-3" />
				<LoginGoogle/>

                <p className="text-center text-gray-400 py-4">
                    Don't have an acoount ?
                    <Link  className="text-violet-700 px-2"  href={'/register'}>Sing up</Link>
                </p>
			</div>
		</div>
	);
};

export default LoginPage;

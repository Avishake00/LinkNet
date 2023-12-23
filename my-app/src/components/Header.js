import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLink } from "react-icons/fa6";

const Header = () => {
	return (
		<header className="bg-white  border-b flex justify-between p-4">
			<div className="flex gap-3">
				<Link className="text-2xl" href="/">
					<span className="flex">
						LinkNet
						<FaLink className="text-center text-blue-500 m-1" />
					</span>
				</Link>

				<nav className="flex gap-3 px-2 items-center text-slate-500 text-sm">
					<Link href="/About">About</Link>
					<Link href="/Pricing">Pricing</Link>
					<Link href="/Contact">Contact</Link>
				</nav>
			</div>

			<nav className="flex gap-3 px-6 items-center text-slate-500 text-sm">
				<Link href="/Login">Sing in</Link>
				<Link href="/register">Register</Link>
			</nav>
		</header>
	);
};

export default Header;

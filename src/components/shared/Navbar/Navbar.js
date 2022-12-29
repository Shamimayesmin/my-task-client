import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Navbar = () => {
	const [dark, setDark] = useState(false);
	const { user, logOut } = useContext(AuthContext);
	const navegate = useNavigate();

	const handleLogOut = () => {
		logOut()
		.then(() => {})
		.catch((err) => console.error(err));
		navegate("/login");
	};


	// dark and light generate
	const handleDark = () => {
		setDark(!dark);
		localStorage.setItem("dark-mood", !dark);
	};

	useEffect(() => {
		const localDark = JSON.parse(localStorage.getItem("dark-mood"));
		console.log(localDark);
		setDark(localDark);
	}, []);

	useEffect(() => {
		if (dark) {
			document.querySelector("html").setAttribute("data-theme", "dark");
		} else {
			document.querySelector("html").setAttribute("data-theme", "mytheme");
		}
	}, [dark]);

	return (
		<header aria-label="Site Header" className="bg-base-100">
			<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="md:flex md:items-center md:gap-12">
						<a className="block text-teal-600" href="/">
							<span className="sr-only">Home</span>
							<h3 className="text-3xl">Todo app</h3>
						</a>
					</div>

					<div className="hidden md:block">
						<nav aria-label="Site Nav">
							<ul className="flex items-center gap-6 text-sm">
								<li>
									<Link
										className="hover:bg-teal-500 p-1 rounded-md hover:text-neutral"
										to="/"
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										className="hover:bg-teal-500 p-1 rounded-md hover:text-neutral"
										to="/add"
									>
										Add Task
									</Link>
								</li>

								<li>
									<Link
										className="hover:bg-teal-500 p-1 rounded-md hover:text-neutral"
										to="/mytask"
									>
										My Task
									</Link>
								</li>

								<li>
									<Link
										className="hover:bg-teal-500 p-1 rounded-md hover:text-neutral"
										to="/complete"
									>
										Complete Task
									</Link>
								</li>
								<li>
									<Link
										className="hover:bg-teal-500 p-1 rounded-md hover:text-neutral"
										to="/media"
									>
										Media
									</Link>
								</li>
							</ul>
						</nav>
					</div>

					<div className="flex items-center gap-4">
						<div className="sm:flex sm:gap-4">
							{user? (
								<button
									className="hover:bg-teal-600 rounded-xl"
									onClick={handleLogOut}
								>
									Sign Out
								</button>
							) : (
								<Link
									className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
									to="/login"
								>
									Login
								</Link>
							)}

							{/* <div className="hidden sm:flex">
								<Link
									className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
									to="/register"
								>
									Register
								</Link>
							</div> */}
						</div>

						<div className="block md:hidden">
							<button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
						{/* mood */}
						<label className="swap swap-rotate">
							{/* <!-- this hidden checkbox controls the state --> */}
							<input type="checkbox" onClick={handleDark} />

							{/* <!-- sun icon --> */}
							<svg
								className="swap-on fill-current w-10 h-10"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
							</svg>

							{/* <!-- moon icon --> */}
							<svg
								className="swap-off fill-current w-10 h-10"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
							</svg>
						</label>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;

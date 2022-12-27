import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Login = () => {

    const { login ,googleSignIn} = useContext(AuthContext);

	// const location = useLocation();
	// const navigate = useNavigate();
	// const from = location.state?.from?.pathname || "/";

	
	const handleLogin = (event) => {
		event.preventDefault();

		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
        console.log(email, password);

		login(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				form.reset();
				

				const currentUser = {
					email: user.email,
				};

				console.log(currentUser);
			
			})
			.catch((error) => console.log(error));
	};

    const handleGoogleLogIn = () =>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user)

            const currentUser = {
                email: user.email,
            };
            console.log(currentUser);
            
        })
        .catch(err => console.error(err))
    }
	return (
		
		<div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-lg">
				<h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
					Login
				</h1>

				
				<form onSubmit={handleLogin} action="" className="mt-6 mb-0 space-y-4 rounded-lg p-10 shadow-2xl h-full">
					

					<div>
						<label htmlFor="email" className="text-sm font-medium">
							Email
						</label>

						<div className="relative mt-1">
							<input
								type="email"
								id="email"
								className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
								placeholder="Enter email"
							/>

							
						</div>
					</div>

					<div>
						<label htmlFor="password" className="text-sm font-medium">
							Password
						</label>

						<div className="relative mt-1">
							<input
								type="password"
								id="password"
								className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
								placeholder="Enter password"
							/>

							
						</div>
					</div>

					<button
						type="submit"
						className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
					>
						Login
					</button>

					<p className="text-center text-sm text-gray-500">
						No account?
						<Link className="underline" to='/register'>
							Sign up
						</Link>
					</p>
				</form>
                <button
                onClick={handleGoogleLogIn}
						type="submit"
						className="block w-full mx-auto rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white"
					>
					Google
				</button>
			</div>
		</div>
	);
};

export default Login;

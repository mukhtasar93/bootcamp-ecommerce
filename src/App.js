// import "./App.css";
import Product from "./components/Product";
// import { Menu, Transition } from "@headlessui/react";
// import { Fragment, useEffect, useRef, useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/solid";

const product = () => {
	const productDetail = [];
	for (let i = 1; i <= 12; i++) {
		productDetail.push(<Product />);
	}
	return <div className="flex flex-wrap">{productDetail}</div>;
};

function App() {
	return (
		<div className="container mx-auto">
			<div className="flex justify-between border-b border-grey-600 py-2 text-sm bg-white dark:bg-black">
				<div className="flex gap-8 ">
					<a href="" className="text-lime-500 hover:text-lime-600">
						Chat with us
					</a>
					<p>+62 811 2222 444</p>
					<p>info@gmail.com</p>
				</div>
				<div className="">
					<ul className="flex gap-8 text-lime-500 ">
						<li>
							<a className="hover:text-lime-600" href="">
								About
							</a>
						</li>
						<li>
							<a className="hover:text-lime-600" href="">
								Blog
							</a>
						</li>
						<li>
							<a className="hover:text-lime-600" href="">
								Career
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="flex justify-between my-4">
				<div className="">
					<h1 className="text-2xl font-bold">MyShop</h1>
				</div>
				<div className="flex">
					<input type="text" className="placeholder:italic placeholder:text-slate-500 w-96 px-2 py-1 border rounded-xl bg-gray-50 shadow-md shadow-gray-100" placeholder="search here..."></input>
					{/* <i className="bi bi-search"></i> */}
				</div>
				<div className="flex gap-4">
					<a href="" className="hover:tetx-green-200">
						<i className="bi bi-person"></i>
					</a>
					<a href="">
						<i className="bi bi-cart"></i>
					</a>
				</div>
			</div>

			<div className="flex justify-center my-4 bg-gray-50 py-2">
				<div className="">
					<ul className="flex gap-40 font-semibold">
						<li>
							<a href="">
								Iphone <i className="bi bi-chevron-down text-xs"></i>
							</a>
						</li>
						<li>
							<a href="">
								Samsung <i className="bi bi-chevron-down text-xs"></i>
							</a>
						</li>
						<li>
							<a href="">
								Oppo <i className="bi bi-chevron-down text-xs"></i>
							</a>
						</li>
						<li>
							<a href="">
								Realmi <i className="bi bi-chevron-down text-xs"></i>
							</a>
						</li>
						<li>
							<a href="">
								Redmi <i className="bi bi-chevron-down text-xs"></i>
							</a>
						</li>
						<li>
							<a href="">
								Xiomi <i className="bi bi-chevron-down text-xs"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="flex my-2 py-2">
				<div className="border-r pr-8">
					<div className="">
						<div className="font-semibold my-2 py-2">
							<h2>Categories</h2>
						</div>
						<div className="flex justify-between text-xs my-2">
							<p className="text-xs">Iphone</p>
							<p className="text-green-500 font-bold bg-lime-300 rounded-xl px-2">320</p>
						</div>
						<div className="flex justify-between text-xs my-2">
							<p className="text-xs">Samsung</p>
							<p className="text-green-500 font-bold bg-lime-300 rounded-xl px-2">112</p>
						</div>
						<div className="flex justify-between text-xs my-2">
							<p className="text-xs">Oppo</p>
							<p className="text-green-500 font-bold bg-lime-300 rounded-xl px-2">80</p>
						</div>
						<div className="flex justify-between text-xs my-2">
							<p className="text-xs">Vivo</p>
							<p className="text-green-500 font-bold bg-lime-300 rounded-xl px-2">50</p>
						</div>
					</div>
					<div className="">
						<div className="font-semibold my-2 py-2 mt-6">
							<h2>Order By</h2>
						</div>
						<div className="flex text-xs my-2">
							<input className="mx-2" type="checkbox" value="Termurah"></input>
							<label for="order1">Termurah</label>
						</div>
						<div className="flex text-xs my-2">
							<input className="mx-2" type="checkbox" value="Terlaris"></input>
							<label for="order1">Terlaris</label>
						</div>
						<div className="flex text-xs my-2">
							<input className="mx-2" type="checkbox" value="Termahal"></input>
							<label for="order1">Termahal</label>
						</div>
					</div>
					<div className="">
						<div className="font-semibold my-2 py-2 mt-6">
							<h2>Rating</h2>
						</div>
						<div className="flex text-xs my-2">
							<input className="text-lime-600 mx-2" type="checkbox" value="Termurah"></input>
							<i className="bi bi-star mr-1 text-yellow-500"></i>
							<i className="bi bi-star mr-1 text-yellow-500"></i>
							<i className="bi bi-star mr-1 text-yellow-500"></i>
							<i className="bi bi-star mr-1 text-yellow-500"></i>
							<i className="bi bi-star mr-1 text-yellow-500"></i>
						</div>
						<div className="flex text-xs my-2">
							<input className="mx-2" type="checkbox" value="Termurah"></input>
							<i className="bi bi-star mr-1 text-yellow-500"></i>
							<i className="bi bi-star mr-1 text-yellow-500"></i>
							<i className="bi bi-star mr-1 text-yellow-500"></i>
							<i className="bi bi-star mr-1 text-yellow-500"></i>
							<i className="bi bi-star mr-1"></i>
						</div>
						<div className="flex text-xs my-2">
							<input className="mx-2" type="checkbox" value="Termurah"></input>
							<i className="bi bi-star mr-1 text-yellow-500"></i>
							<i className="bi bi-star mr-1 text-yellow-500"></i>
							<i className="bi bi-star mr-1 text-yellow-500"></i>
							<i className="bi bi-star mr-1"></i>
							<i className="bi bi-star mr-1"></i>
						</div>
						<div className="flex text-xs my-2">
							<input className="mx-2" type="checkbox" value="Termurah"></input>
							<i className="bi bi-star mr-1 text-yellow-500"></i>
							<i className="bi bi-star mr-1 text-yellow-500"></i>
							<i className="bi bi-star mr-1"></i>
							<i className="bi bi-star mr-1"></i>
							<i className="bi bi-star mr-1"></i>
						</div>
						<div className="flex text-xs my-2">
							<input className="mx-2" type="checkbox" value="Termurah"></input>
							<i className="bi bi-star mr-1 text-yellow-500"></i>
							<i className="bi bi-star mr-1"></i>
							<i className="bi bi-star mr-1"></i>
							<i className="bi bi-star mr-1"></i>
							<i className="bi bi-star mr-1"></i>
						</div>
					</div>
					<div className="">
						<div className="font-semibold my-2 py-2 mt-6">
							<h2>Price</h2>
						</div>
						<div className=""></div>
						<div className="flex justify-between font-semibold mb-1">
							<p className="text-xs">Min</p>
							<p className="text-xs">Max</p>
						</div>
						<div className="flex justify-between font-semibold gap-4 mb-6">
							<input type="text" className="text-xs w-20 bg-gray-50 rounded-lg py-2 shadow-md px-2" placeholder="min . ."></input>
							<p className="text-sm">-</p>
							<input type="text" className="text-xs w-20 bg-gray-50 rounded-lg py-2 shadow-md px-2" placeholder="max . ."></input>
						</div>
						<div className="flex justify-between font-semibold gap-4">
							<button className="flex text-sm text-white font-bold bg-lime-600 border-solid border-2 border-lime-800 rounded-lg px-4 py-1 hover:bg-lime-700">Apply</button>
							<a className="text-sm text-red-500 font-semibold " href="">
								Reset
							</a>
						</div>
					</div>
				</div>
				<div className="flex justify-between mx-4 py-2">{product()}</div>
			</div>
			<div className="flex justify-center">
				<button className="mb-8  text-sm text-white font-semibold bg-lime-500 border border-solid border-2 border-lime-600 rounded-xl px-4 py-2 hover:bg-lime-600 shadow-md hover:shadow-lime-500/50">
					Show More Product <i className="bi bi-chevron-down mx-2"></i>{" "}
				</button>
			</div>

			<div className="flex justify-between border-t border-grey-600 py-2">
				<div className="">
					<h3 className="font-bold my-4 font-semibold">Get in touch</h3>
					<ul className="text-sm text-lime-500 my-4">
						<li className="my-4">
							<a href="">About Us</a>
						</li>
						<li className="my-4">
							<a href="">Blogs</a>
						</li>
						<li className="my-4">
							<a href="">Careers</a>
						</li>
						<li className="my-4">
							<a href="">Press Realeses</a>
						</li>
					</ul>
				</div>
				<div className="">
					<h3 className="font-bold my-4 font-semibold">Connections</h3>
					<ul className="text-sm text-lime-500 my-4">
						<li className="my-4">
							<a href="">Facebook</a>
						</li>
						<li className="my-4">
							<a href="">Instagram</a>
						</li>
						<li className="my-4">
							<a href="">Youtube</a>
						</li>
						<li className="my-4">
							<a href="">Linkedin</a>
						</li>
					</ul>
				</div>
				<div className="">
					<h3 className="font-bold my-4 font-semibold">Earnings</h3>
					<ul className="text-sm text-lime-500 my-4">
						<li className="my-4">
							<a href="">Become an Affiliate</a>
						</li>
						<li className="my-4">
							<a href="">Advertise Your Product</a>
						</li>
						<li className="my-4">
							<a href="">Sell on Market</a>
						</li>
					</ul>
				</div>
				<div className="">
					<h3 className="font-bold my-4 ">Accounts</h3>
					<ul className="text-sm text-lime-500 my-4">
						<li className="my-4">
							<a href="">Your Accounts</a>
						</li>
						<li className="my-4">
							<a href="">Return Center</a>
						</li>
						<li className="my-4">
							<a href="">100% Purchase Protenction</a>
						</li>
						<li className="my-4">
							<a href="">Chat with us</a>
						</li>
						<li className="my-4">
							<a href="">Help</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="flex justify-between my-4 border-t justify-center">
				<div className="justify-center">
					<p className="text-sm my-4 justify-center">
						Copyright &copy; 2022 :
						<a href="" className="text-lime-600 hover:text-lime-700">
							&nbsp;Mukhtasar
						</a>
						<span> - All Right Reserved</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;

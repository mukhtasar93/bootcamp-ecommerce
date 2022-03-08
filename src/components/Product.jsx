const Product = () => {
	return (
		<div className="">
			<div className="border rounded-lg p-2 m-4 shadow-lg">
				<div className="">
					<img className="border rounded-lg h-40 w-48" src="images/a52.JPG" alt="sg-a52"></img>
					<h2 className="font-semibold text-sm my-2">Samsung Galaxy A52</h2>
					<p className="text-xs my-2">Awesome camera</p>
				</div>
				<div className="flex justify-between">
					<h2 className="font-semibold text-sm my-1">5.500.000,-</h2>
					<button className="flex text-sm text-white font-bold bg-lime-500 border border-solid border-2 border-lime-600 rounded-xl px-2 py-1 hover:bg-lime-600">Buy Now</button>
				</div>
				<p className="text-xs line-through">6.200.000,-</p>
			</div>
		</div>
	);
};

export default Product;

import './App.css'
import Home from './pages/home'

function App() {
	return (
		<div className=" app max-w-7xl m-auto px-8 grid  grid-cols-layout  grid-rows-layout h-screen">

			<div class="col-span-3 bg-green-500 sticky top-0 ">
			</div>

			<div class="scale-1 row-span-2 ">
				
				<div className='fixed top-16 bg-slate-500  w-16 h-screen'>
				</div>

			</div>

			<div class="row-span-2 col-span-2 pb-72"> <Home/></div>
			 
		</div>
	)
}

export default App

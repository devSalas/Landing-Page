import './App.css'
import Home from './pages/home'
import Videos from './pages/Videos'
import {Route} from 'wouter'
import TabBar from './components/TabBar'


function App() {
	return (
		<div className="app max-w-7xl m-auto md:pt-20 md:pl-20">

			<TabBar />
			<div class="row-span-2 col-span-2 pb-72">
				<Route path='/' component={Home} />
				<Route path='/videos' component={Videos} />

			</div>

		</div>
	)
}

export default App

import './App.css'
import Home from './pages/home'
import View from './pages/View'
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
				<Route path='/view' component={View} />

			</div>

		</div>
	)
}

export default App
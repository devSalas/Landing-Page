import './App.css'
import Home from './pages/home'
import View from './pages/View'
import Videos from './pages/Videos'
import { Route } from 'wouter'
import TabBar from './components/TabBar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="app max-w-7xl m-auto md:pt-20 md:pl-20">

				<TabBar />
				<div className="row-span-2 col-span-2 pb-72">

					<Route path='/' component={Home} />
					<Route path='/video/:id' component={Videos} />
					<Route path='/view' component={View} />

				</div>

			</div>
		</QueryClientProvider>
	)
}

export default App
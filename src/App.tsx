import 'normalize.css'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TheHeader from '@/components/TheHeader/TheHeader'
import Home from '@pages/Home/Home'
import Programs from '@pages/Programs/Programs'
import NotFound from '@pages/NotFound/NotFound'
import TheFooter from '@components/TheFooter/TheFooter'

function App() {
	return (
		<Router>
			<TheHeader />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/programs" element={<Programs />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<TheFooter />
		</Router>
	)
}

export default App

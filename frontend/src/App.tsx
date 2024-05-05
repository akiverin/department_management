import 'normalize.css'
import './App.css'
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation
} from 'react-router-dom'
import TheHeader from '@/components/TheHeader/TheHeader'
import Home from '@pages/Home/Home'
import Programs from '@pages/Programs/Programs'
import NotFound from '@pages/NotFound/NotFound'
import TheFooter from '@components/TheFooter/TheFooter'
import Science from '@pages/Science/Science'
import React, { useLayoutEffect } from 'react'
const Wrapper = ({ children }: { children: React.ReactNode }) => {
	const location = useLocation()
	useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0)
	}, [location.pathname])
	return children
}

function App() {
	return (
		<Router>
			<Wrapper>
				<TheHeader />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/programs" element={<Programs />} />
					<Route path="/science" element={<Science />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<TheFooter />
			</Wrapper>
		</Router>
	)
}

export default App

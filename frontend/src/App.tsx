import 'normalize.css'
import './App.css'
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
	Navigate
} from 'react-router-dom'
import TheHeader from '@/components/TheHeader/TheHeader'
import Home from '@pages/Home/Home'
import Programs from '@pages/Programs/Programs'
import NotFound from '@pages/NotFound/NotFound'
import TheFooter from '@components/TheFooter/TheFooter'
import Science from '@pages/Science/Science'
import React, { useLayoutEffect, useState } from 'react'
import TheDialog from './components/TheDialog/TheDialog'
import AuthDialog from './components/AuthDialog/AuthDialog'
import Profile from './pages/Profile/Profile'
import { useQuery } from '@tanstack/react-query'
import Privacy from './pages/Privacy/Privacy'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
	const location = useLocation()
	useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0)
	}, [location.pathname])
	return children
}

function App() {
	const [isOpenAuth, setIsOpenAuth] = useState(false)
	const showAuth = () => {
		setIsOpenAuth(true)
	}
	const { data: authUser } = useQuery({
		queryKey: ['authUser'],
		queryFn: async () => {
			try {
				const res = await fetch('api/auth/me')
				const data = await res.json()
				if (!res.ok) {
					throw new Error(data.error || 'Что-то пошло не так')
				}
				console.log('authUser – ', data)
				return data
			} catch (error) {
				throw new Error(
					error instanceof Error ? error.message : 'An unknown error occurred'
				)
			}
		},
		retry: false
	})
	return (
		<Router>
			<Wrapper>
				<TheHeader showAuth={showAuth} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/programs" element={<Programs />} />
					<Route path="/science" element={<Science />} />
					<Route
						path="/profile"
						element={authUser ? <Profile /> : <Navigate to="/"></Navigate>}
					/>
					<Route path="*" element={<NotFound />} />
					<Route path="/privacy" element={<Privacy />} />
				</Routes>
				<TheFooter />
				<TheDialog isOpen={isOpenAuth} onClose={() => setIsOpenAuth(false)}>
					<AuthDialog close={() => setIsOpenAuth(false)} />
				</TheDialog>
			</Wrapper>
		</Router>
	)
}

export default App

import React, { useState, FormEvent } from 'react'
import './AuthDialog.scss'
import TheButton from '../TheButton/TheButton'

interface User {
	email?: string
	username: string
	fullName?: string
	password: string
}

const AuthDialog: React.FC = () => {
	const [isLogin, setIsLogin] = useState(true)
	const [user, setUser] = useState<User>({ username: '', password: '' })

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		const url = isLogin ? '/api/auth/login' : '/api/auth/signup'
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		const data = await response.json()
		console.log(response.status, data)
	}

	const toggleMode = () => {
		setIsLogin(!isLogin)
		setUser(
			isLogin
				? { ...user, username: '', password: '' }
				: { ...user, username: '', password: '', email: '', fullName: '' }
		)
	}

	return (
		<>
			<form className="auth-form" onSubmit={handleSubmit}>
				<h2 className="auth-form__title">
					{isLogin ? 'Авторизация' : 'Регистрация'}
				</h2>
				{!isLogin && (
					<div className="auth-form__field">
						<label className="auth-form__label" htmlFor="email">
							Email
						</label>
						<input
							className="auth-form__input"
							type="email"
							name="email"
							id="email"
							value={user.email}
							onChange={handleInputChange}
						/>
					</div>
				)}
				<div className="auth-form__field">
					<label className="auth-form__label" htmlFor="username">
						Имя пользователя
					</label>
					<input
						className="auth-form__input"
						type="text"
						name="username"
						id="username"
						value={user.username}
						onChange={handleInputChange}
					/>
				</div>
				{!isLogin && (
					<div className="auth-form__field">
						<label className="auth-form__label" htmlFor="fullName">
							Полное имя
						</label>
						<input
							className="auth-form__input"
							type="text"
							name="fullName"
							id="fullName"
							onChange={handleInputChange}
						/>
					</div>
				)}
				<div className="auth-form__field">
					<label className="auth-form__label" htmlFor="password">
						Пароль
					</label>
					<input
						className="auth-form__input"
						type="password"
						name="password"
						id="password"
						value={user.password}
						onChange={handleInputChange}
					/>
				</div>
				<div className="auth-form__action">
					<TheButton onClick={() => handleSubmit} accent type="submit">
						{isLogin ? 'Войти' : 'Зарегистрироваться'}
					</TheButton>
				</div>
			</form>
			<div className="auth-detail">
				<p className="auth-detail__text">
					{isLogin ? 'Если у вас нет аккаунта? ' : 'У меня уже есть аккаунт.'}
				</p>
				<button className="auth-detail__button" onClick={toggleMode}>
					{isLogin ? 'Зарегистрируйтесь' : 'Войти в аккаунт'}
				</button>
			</div>
		</>
	)
}

export default AuthDialog

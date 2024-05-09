import React, { useState, FormEvent } from 'react'
import './AuthDialog.scss'
import TheButton from '../TheButton/TheButton'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

interface User {
	email?: string
	username: string
	fullName?: string
	password: string
}

interface Props {
	close: () => void
}

const AuthDialog: React.FC<Props> = ({ close }) => {
	const [isLogin, setIsLogin] = useState(true)
	const [user, setUser] = useState<User>({ username: '', password: '' })

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const queryClient = useQueryClient()
	const navigate = useNavigate()

	const {
		mutate: auth,
		isError,
		isPending,
		error
	} = useMutation({
		mutationFn: async () => {
			try {
				const url = isLogin ? '/api/auth/login' : '/api/auth/signup'
				const res = await fetch(url, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(user)
				})
				const data = await res.json()
				if (data.error) throw new Error(data.error)
				return data
			} catch (error) {
				throw new Error(
					error instanceof Error ? error.message : 'An unknown error occurred'
				)
			}
		},
		onSuccess: () => {
			toast.success(isLogin ? 'Вы вошли в аккаунт' : 'Аккаунт успешно создан')
			queryClient.invalidateQueries({ queryKey: ['authUser'] })
			navigate('/profile')
			close()
		},
		onError: error => {
			toast.error(
				error instanceof Error ? error.message : 'An unknown error occurred'
			)
		}
	})

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		auth()
	}

	const toggleMode = () => {
		setIsLogin(!isLogin)
		setUser(
			isLogin
				? { ...user, username: '', password: '' }
				: { ...user, username: '', password: '', email: '', fullName: '' }
		)
	}

	const navigatePrivacy = (e: React.MouseEvent) => {
		e.preventDefault()
		close()
		navigate('/privacy')
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
				{isError && <p className="auth-form__error">{error.message}</p>}
				<div className="auth-form__action">
					{!isLogin && (
						<p className="auth-form__privacy">
							Нажимая на кнопку «Зарегистрироваться», вы даете{' '}
							<button
								className="auth-form__privacy-button"
								onClick={navigatePrivacy}
							>
								согласие
							</button>{' '}
							на обработку персональных данных.
						</p>
					)}
					<TheButton onClick={() => handleSubmit} accent mini type="submit">
						{isPending
							? 'Загрузка...'
							: isLogin
								? 'Войти'
								: 'Зарегистрироваться'}
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
			<Toaster
				containerStyle={{
					fontSize: '1.4rem'
				}}
			/>
		</>
	)
}

export default AuthDialog

import './TheButton.css'
import { Link } from 'react-router-dom'
import React from 'react'

function TheButton({
	children,
	to,
	href,
	onClick,
	shadow,
	accent,
	border,
	mini,
	full,
	dark,
	light,
	gray,
	type
}: ButtonProps) {
	const buttonClass =
		'button' +
		(shadow ? ' button--shadow' : '') +
		(accent ? ' button--accent' : '') +
		(mini ? ' button--mini' : '') +
		(border ? ' button--border' : '') +
		(full ? ' button--full' : '') +
		(dark ? ' button--dark' : '') +
		(light ? ' button--light' : '') +
		(gray ? ' button--gray' : '')
	return onClick ? (
		<button onClick={onClick} className={buttonClass} type={type}>
			{children}
		</button>
	) : to ? (
		<Link to={to} className={buttonClass}>
			{children}
		</Link>
	) : (
		<a href={href} className={buttonClass}>
			{children}
		</a>
	)
}

type ButtonProps = {
	children: React.ReactNode
	to?: string | object
	onClick?: () => void
	href?: string
	shadow?: boolean
	accent?: boolean
	border?: boolean
	mini?: boolean
	full?: boolean
	dark?: boolean
	light?: boolean
	gray?: boolean
	type?: 'submit' | 'reset' | undefined
}

export default TheButton

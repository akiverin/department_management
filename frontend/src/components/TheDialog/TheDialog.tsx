import React, { useEffect, useRef } from 'react'
import './TheDialog.scss'
function TheDialog({ isOpen, onClose, children, className }: DialogProps) {
	const dialogRef = useRef<HTMLDialogElement | null>(null)
	useEffect(() => {
		if (isOpen) {
			dialogRef.current?.showModal()
			document.body.classList.add('scroll-lock')
		} else {
			dialogRef.current?.close()
			document.body.classList.remove('scroll-lock')
		}
	}, [isOpen])
	return (
		<dialog
			className={className ? 'dialog ' + className : 'dialog'}
			ref={dialogRef}
			onCancel={onClose}
			aria-label="Модальное окно"
		>
			<div className="dialog__head">
				<button className="dialog__close" onClick={onClose}>
					&#x2715;
				</button>
			</div>
			<div className="dialog__body">{children}</div>
		</dialog>
	)
}

type DialogProps = {
	children: React.ReactNode
	isOpen: boolean
	onClose: () => void
	className?: string
}

export default TheDialog

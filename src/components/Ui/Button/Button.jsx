import styles from './button.module.scss';
const Button = ({ classNameCustom, text, action }) => {
	const handleAction = (e) => {
		action(e);
		console.log(e);
	};

	return (
		<button
			className={`${styles['button']} ${styles[`${classNameCustom}`]}`}
			onClick={handleAction}
		>
			{text}
		</button>
	);
};

export default Button;

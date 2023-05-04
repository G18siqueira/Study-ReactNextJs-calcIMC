import { useState } from 'react';
import { motion } from 'framer-motion';

import Button from '../../Ui/Button/Button';

import styles from './imcCalc.module.scss';

const ImcCalc = ({ calcImc }) => {
	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');
	const [erroMsg, setErrorMsg] = useState('');

	const clearForm = (e) => {
		e.preventDefault();
		setHeight('');
		setWeight('');
		setErrorMsg('');
	};

	const validDigits = (text) => {
		return text.replace(/[^0-9,]/g, '');
	};

	const handleHeightChange = (e) => {
		const updatedValue = validDigits(e.target.value);

		setHeight(updatedValue);
	};

	const handleWeightChange = (e) => {
		const updatedValue = validDigits(e.target.value);

		setWeight(updatedValue);
	};

	const motionProps = {
		initial: { opacity: 0, x: -100 },
		whileInView: { opacity: 1, x: 0 },
		viewport: { once: true },
		transition: {
			type: 'spring',
			bounce: 0.4,
			duration: 2,
			delay: 0.15,
		},
	};

	return (
		<motion.div {...motionProps} className={styles['imc-calc']}>
			<h2>Calculadora IMC</h2>

			<form id="imc-form" className={styles['form']}>
				<div className={styles['form-inputs']}>
					<div className={styles['form-control']}>
						<label htmlFor="height">Altura:</label>
						<input
							type="text"
							name="height"
							id="height"
							placeholder="Exemplo 1,75"
							onChange={(e) => handleHeightChange(e)}
							value={height}
						/>
					</div>
					<div className={styles['form-control']}>
						<label htmlFor="weight">Peso:</label>
						<input
							type="text"
							name="weight"
							id="weight"
							placeholder="Exemplo 70,5"
							onChange={(e) => handleWeightChange(e)}
							value={weight}
						/>
					</div>
					{erroMsg && <p>{erroMsg}</p>}
				</div>
				<div className={styles['form-action-control']}>
					<Button
						classNameCustom={'button-calc'}
						text={'Calcular'}
						action={(e) => calcImc(e, height, weight, setErrorMsg)}
					/>
					<Button
						classNameCustom={'button-clear'}
						text={'Limpar'}
						action={clearForm}
					/>
				</div>
			</form>
		</motion.div>
	);
};

export default ImcCalc;

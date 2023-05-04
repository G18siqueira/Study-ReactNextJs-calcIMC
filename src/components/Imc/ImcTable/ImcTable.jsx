import Button from '@/components/Ui/Button/Button';
import styles from './imcTable.module.scss';
import { motion } from 'framer-motion';

const ImcTable = ({ data, imc, info, infoClass, resetCalc }) => {
	const motionProps = {
		initial: { opacity: 0, y: -100 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true },
		transition: {
			type: 'spring',
			bounce: 0.4,
			duration: 2,
			delay: 0.15,
		},
	};
	return (
		<motion.div {...motionProps} className={styles['imc-table']}>
			<div className={styles['imc-table-intro']}>
				<p className={styles['number']}>
					Seu IMC:{' '}
					<span className={styles[`${infoClass}`]}>{imc}</span>
				</p>
				<p className={styles['info']}>
					Situação atual:{' '}
					<span className={styles[`${infoClass}`]}>{info}</span>
				</p>
			</div>
			<div className={styles['imc-table-content']}>
				<h3>Confira as classificações:</h3>
				<div className={styles['imc-table-header']}>
					<h4>IMC</h4>
					<h4>Classificação</h4>
					<h4>Obesidade</h4>
				</div>
				{data.map((item) => (
					<div className={styles['imc-table-data']}>
						<p>{item.classification}</p>
						<p>{item.info}</p>
						<p>{item.obesity}</p>
					</div>
				))}
			</div>
			<div className={styles['imc-table-btn']}>
				<Button
					classNameCustom={'button-back'}
					text={'Voltar'}
					action={resetCalc}
				/>
			</div>
		</motion.div>
	);
};

export default ImcTable;

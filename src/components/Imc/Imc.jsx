import ImcCalc from '@/components/Imc/ImcCalc/ImcCalc';
import ImcTable from '@/components/Imc/ImcTable/ImcTable';

import { data } from '@/data/data';
import { useState } from 'react';

import styles from './imc.module.scss';

const Imc = () => {
	const calcImc = (e, height, weight, setErrorMsg) => {
		e.preventDefault();

		if (!height || !weight) {
			setErrorMsg(
				'Por favor, preencha a altura e o peso para prosseguir.',
			);
			return;
		}

		const weightFloat = +weight.replace(',', '.');
		const heightFloat = +height.replace(',', '.');

		const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(
			1,
		);

		setImc(imcResult);

		data.map((item) => {
			if (imcResult >= item.min && imcResult <= item.max) {
				setInfo(item.info);
				setInfoClass(item.infoClass);
			}
		});

		if (!info) return;
	};

	const resetCalc = (e) => {
		e.preventDefault();

		setImc('');
		setInfo('');
		setInfoClass('');
	};

	const [imc, setImc] = useState('');
	const [info, setInfo] = useState('');
	const [infoClass, setInfoClass] = useState('');

	return (
		<section className={styles['imc']}>
			<div className={`container ${styles['imc-container']}`}>
				<div className={styles['imc-content']}>
					{!imc ? (
						<ImcCalc calcImc={calcImc} />
					) : (
						<ImcTable
							data={data}
							imc={imc}
							info={info}
							infoClass={infoClass}
							resetCalc={resetCalc}
						/>
					)}
				</div>
			</div>
		</section>
	);
};

export default Imc;

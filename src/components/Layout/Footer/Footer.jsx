import styles from './footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles['footer']}>
			<div className={`container ${styles['footer-container']}`}></div>
		</footer>
	);
};

export default Footer;

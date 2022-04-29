import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p className={styles.credits}>
				<strong>Burning Earth</strong>
			</p>
			<p className={styles.copyright}>copyright © 2022</p>
		</footer>
	);
}

import React from 'react';
import styles from './header.module.css';

export default function Header() {
	return <header className={styles.head}>
		<div className="logoContainer">
			<img src="/IMGs/_5315809a-b981-4f34-8ec7-a581b8980dfa.jpg" alt="Gavin Persad" />
		</div>
		<div className="linksContainer">
			<ul>
				<li>
					<a href="/">About Me</a>
				</li>
				<li>
					<a href="/about">Languages</a>
				</li>
				<li>
					<a href="/contact">Projects</a>
				</li>
				<li>
					<a href="/contact">Contact</a>
				</li>
				<li>
					<button>Dark/Light</button>
				</li>
			</ul>
		</div>
	</header>;
}

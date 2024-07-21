import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import equilibriumImage from '../../assets/equilibrium.jpg';
import avatarImage from '../../assets/avatar.png';
import styles from './Preview.module.css';

export default function Preview() {
	return (
		<article className={styles.preview}>
			<div className={styles.image}>
				<Carousel
					autoPlay
					infiniteLoop
					emulateTouch
					showStatus={false}
					showThumbs={false}
				>
					<img
						width="302"
						height="302"
						src={equilibriumImage}
						alt="Equilibrium"
					/>
					<img
						width="302"
						height="302"
						src={equilibriumImage}
						alt="Equilibrium"
					/>
					<img
						width="302"
						height="302"
						src={equilibriumImage}
						alt="Equilibrium"
					/>
				</Carousel>
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>
					<a href="#" className="btn btn--link">
						Equilibrium #3429
					</a>
				</h2>
				<p className={styles.desc}>
					Our Equilibrium collection promotes balance and calm.
				</p>
				<ul className={styles.statuses}>
					<li>
						<i className="icon-ethereum" aria-hidden="true"></i>
						<span>0.041 ETH</span>
					</li>
					<li>
						<i className="icon-clock" aria-hidden="true"></i>
						<span>3 days left</span>
					</li>
				</ul>
				<div className={styles.author}>
					<img
						width="33"
						height="33"
						src={avatarImage}
						alt="Jules Wyvern"
					/>
					<span className={styles.text}>
						Creation of&nbsp;
						<a href="#" className="btn btn--link">
							Jules Wyvern
						</a>
					</span>
				</div>
			</div>
		</article>
	);
}

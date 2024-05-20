import { useEffect, useState } from "react";
import "./hero-section.scss";

const countDownDate = new Date("May 25, 2024 09:00:00").getTime();

function HeroSection() {
	const [day, setDay] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	function set() {
		const now = new Date().getTime();
		const distance = countDownDate - now;
		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		setDay({ days, hours, minutes, seconds });
	}

	useEffect(() => {
		set();
		const interval = setInterval(() => {
			set();
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="hero-section" id="home">
			<div className="background"></div>

			<div className="content">
				<span className="title">TIME REMAINING</span>
				<div className="count-down">
					<div className="block">
						<div className="count">{day.days}</div>
						<span>DAYS</span>
					</div>
					<div className="block">
						<div className="count">{day.hours}</div>
						<span>HOURS</span>
					</div>
					<div className="block">
						<div className="count">{day.minutes}</div>
						<span>MINUTES</span>
					</div>
					<div className="block">
						<div className="count">{day.seconds}</div>
						<span>SECONDS</span>
					</div>
				</div>

				<div className="register">
					<a href="https://docs.google.com/forms/d/10DWKibvGYYw4FjoredoqhI2ofXDJ0MWzMVFd8b6kKEw/edit?usp=drivesdk">
						<button>Register Here</button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;

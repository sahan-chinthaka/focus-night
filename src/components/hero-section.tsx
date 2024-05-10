import "./hero-section.scss";

function HeroSection() {
	return (
		<div className="hero-section">
			<div className="background"></div>

			<div className="content">
				<span className="title">TIME REMAINNG</span>
				<div className="count-down">
					<div className="block">
						<div className="count">00</div>
						<span>DAYS</span>
					</div>
					<div className="block">
						<div className="count">00</div>
						<span>HOURS</span>
					</div>
					<div className="block">
						<div className="count">00</div>
						<span>MINUTES</span>
					</div>
					<div className="block">
						<div className="count">00</div>
						<span>SECONDS</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;

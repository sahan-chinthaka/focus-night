import "./notice.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

function Notice() {
	return (
		<div className="notice" id="notice">
			<p className="title">NOTICES</p>

			<Carousel responsive={responsive}>
				<div className="item">
					<img src="/notices/notice1.jpeg" alt="" />
				</div>
				<div className="item">
					<img src="/notices/notice1.jpeg" alt="" />
				</div>
				<div className="item">
					<img src="/notices/notice1.jpeg" alt="" />
				</div>
				<div className="item">
					<img src="/notices/notice1.jpeg" alt="" />
				</div>
			</Carousel>
		</div>
	);
}

export default Notice;

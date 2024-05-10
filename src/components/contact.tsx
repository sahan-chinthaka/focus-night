import "./contact.scss";

function Contact() {
	return (
		<div className="contact" id="contact">
			<p className="title">CONTACT</p>
			<div className="profiles">
				<div className="profile">
					<div className="profile-img">
						<img src="/president.jpg" alt="" />
					</div>
					<p className="name">Dinuka</p>
					<p className="post">President</p>
					<p className="number">CONTACT: 077-0162082</p>
				</div>
				<div className="profile">
					<div className="profile-img">
						<img src="/vice-president.jpg" alt="" />
					</div>
					<p className="name">Kaveesha</p>
					<p className="post">Vice President</p>
					<p className="number">CONTACT: 076-6365729</p>
				</div>
			</div>
		</div>
	);
}

export default Contact;

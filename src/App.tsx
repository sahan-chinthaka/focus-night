import "./App.css";
import Agenda from "./components/agenda";
import Contact from "./components/contact";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import NavBar from "./components/nav-bar";
import Notice from "./components/notice";

function App() {
	return (
		<>
			<NavBar />
			<HeroSection />
			<Notice />
			<Agenda />
			<Contact />
			<Footer />
		</>
	);
}

export default App;

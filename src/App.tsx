import "./App.css";
import Contact from "./components/contact";
import HeroSection from "./components/hero-section";
import NavBar from "./components/nav-bar";
import Notice from "./components/notice";

function App() {
	return (
		<>
			<NavBar />
			<HeroSection />
			<Notice />
			<Contact />
		</>
	);
}

export default App;

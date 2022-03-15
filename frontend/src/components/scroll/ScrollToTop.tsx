import { useEffect, useState } from "react";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollToTop = () => {
	const [backToTopButton, setBackToTopButton] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 200) setBackToTopButton(true);
			else setBackToTopButton(false);
		});
	}, []);
	if (!backToTopButton) return <></>;
	return (
		<div className="fixed bottom-12 right-10">
			<button onClick={() => window.scroll({ top: 0, behavior: "smooth" })}>
				<FontAwesomeIcon icon={faCircleArrowUp} size="4x" />
			</button>
		</div>
	);
};

export default ScrollToTop;

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = () => {
	const navigate = useNavigate();
	const backFunc = () => navigate(-1);

	return (
		<button
			onClick={backFunc}
			className="bg-slate-100 hover:bg-slate-50 px-3 py-2 rounded-md border-2 border-slate-900 ml-3 mt-3"
		>
			<FontAwesomeIcon icon={faArrowLeft} /> Go Back
		</button>
	);
};

export default BackButton;

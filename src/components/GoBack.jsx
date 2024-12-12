import { BsArrowLeft } from 'react-icons/bs'; // Import Bootstrap icons
import { useNavigate  } from 'react-router-dom';


function GoBack(){
    const navigate = useNavigate();

    return (
            <div className="fs-4 goBack">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate(-1);
                            }}
                            className="goBackLink"
                        >
                            <BsArrowLeft className="arrow" /> Go back to Art Shop
                        </a>
        </div>    
    )
}
export default GoBack;
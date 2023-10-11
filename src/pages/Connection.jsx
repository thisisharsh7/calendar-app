import { useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { GlobalInfo } from "../App";
import { handleCalendarEventsResponse } from "../service/api";



const Connection = () => {
    const { setIsLoggedIn, setCalendarDetails } = useContext(GlobalInfo);


    const googleLogin = useGoogleLogin({
        onSuccess: async (response) => {
            console.log(response, 'a');
            const accessToken = response.access_token;
            const data = await handleCalendarEventsResponse(accessToken);

            setCalendarDetails(data);
            setIsLoggedIn(true);
            console.log(data, 'd');


        },
        onError: async (error) => {
            alert('Unsuccessfull attempt.')
            console.log(error);
        },
    });





    return (
        <div className="w-full min-h-screen bg-black flex justify-center items-center">
            <button onClick={googleLogin} className="border-2 text-white hover:tracking-widest  px-3 font-medium rounded py-0.5 hover:scale-105 transition-all duration-200">Login with Google</button>
        </div>
    );
};

export default Connection;

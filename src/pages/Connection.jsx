
import { useNavigate } from 'react-router-dom';

const Connection = () => {
    const navigate = useNavigate();

    const connectWithGoogle = () => {
        // Implement logic to connect with Google Calendar here

        // For demonstration purposes, simulate successful connection
        // You would replace this with actual authentication and connection logic
        // Redirect to another page after successful connection
        navigate('/');
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={connectWithGoogle}>
                Connect with Google Calendar
            </button>
        </div>
    );
};

export default Connection;



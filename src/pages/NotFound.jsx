import { Link } from "react-router-dom"


const NotFound = () => {
    return (
        <div className="flex flex-col gap-2 items-center justify-center w-full h-[100dvh]">
            <p className="italic underline">Page not found</p>
            <Link to="/">
                <button className="border px-4 rounded py-1 text-gray-400">Home</button>
            </Link>
        </div>
    )
}

export default NotFound
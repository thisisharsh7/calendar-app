import { Navigate, Route, Routes } from "react-router-dom"
import Connection from "./pages/Connection"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound";
import { createContext, useState } from "react";

export const GlobalInfo = createContext();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [calendarDetails, setCalendarDetails] = useState([]);

  return (
    <GlobalInfo.Provider value={{ setIsLoggedIn, isLoggedIn, calendarDetails,setCalendarDetails }}>
      <Routes>
        <Route path="/loggedIn" element={
          isLoggedIn ? <Home /> : <Navigate to="/" />} exact
        />
        <Route path="/" element={isLoggedIn ? <Navigate to="/loggedIn" /> : <Connection />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </GlobalInfo.Provider>
  )
}

export default App
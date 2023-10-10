import { Navigate, Route, Routes } from "react-router-dom"
import Connection from "./pages/Connection"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound";

const App = () => {
  const register = false;
  return (
    <Routes>
      <Route path="/" element={
        register ? <Home /> : <Navigate to="/login" />} exact
      />
      <Route path="/login" element={
        register ? <Navigate to="/" /> : <Connection />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>

  )
}

export default App
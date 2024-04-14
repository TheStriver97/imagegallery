import {Route,Routes} from "react-router-dom"
import Home from './pages/Home'
import SignUp from "./pages/SignUp"
import { AuthProvider } from "./context/auth"
import PublicRoute from "./routes/PublicRoute"
export default function App() {
  return (
<AuthProvider>
<Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={
      <PublicRoute>
        <SignUp/>
      </PublicRoute>}/>
</Routes>
</AuthProvider>
  )
}
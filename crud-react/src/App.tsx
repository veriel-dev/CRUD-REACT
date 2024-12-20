import { BrowserRouter } from "react-router-dom"
import { RouterComponent } from "./routes"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "./context/auth/AuthProvider";
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <RouterComponent />
        </AuthProvider>
      </BrowserRouter>
      <ToastContainer position="bottom-right" theme="dark" />
    </>
  )
}

export default App

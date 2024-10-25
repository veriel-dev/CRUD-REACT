import { BrowserRouter } from "react-router-dom"
import { RouterComponent } from "./routes"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "./context/AuthProvider";
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <RouterComponent />
        </AuthProvider>
      </BrowserRouter>
      <ToastContainer position="top-center" theme="dark" />
    </>
  )
}

export default App

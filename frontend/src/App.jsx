import './App.css';
import Navbar from './navigation/Navbar';
import { AuthContextProvider } from "./utils/Auth";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
      </AuthContextProvider>
    </>
  );
}

export default App;

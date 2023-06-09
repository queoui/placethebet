import './App.css';
import Navbar from './navigation/Navbar';
// import { AuthContextProvider } from "./utils/Auth";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
      {/*<AuthContextProvider>*/}
        <Navbar />
      {/*</AuthContextProvider>*/}
      </RecoilRoot>
    </>
  );
}

export default App;

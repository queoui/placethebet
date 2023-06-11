import './App.css';
import Navbar from './navigation/Navbar';
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <Navbar />
      </RecoilRoot>
    </>
  );
}

export default App;

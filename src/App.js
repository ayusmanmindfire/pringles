import './App.css';
import { Navbar } from './components/Navbar';
import { LandingPage } from './pages/LandingPage';
import { PageOne } from './pages/PageOne';
import { PageThree } from './pages/PageThree';
import { PageTwo } from './pages/PageTwo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <PageOne/>
      <PageTwo/>
      <PageThree/>
    </div>
  );
}

export default App;

import './App.css';
import Layout from './Navigation/Layout';
import About from './Sections/About/About';
import Download from './Sections/Download/Download';
import Features from './Sections/Features/Features';
import Intro from './Sections/Intro/Intro';
import Society from './Sections/SocIety/Society';
import { useMediaQuery } from '@mui/material'
import TabLayout from './Navigation/TabLayout';
import MobMenu from './Navigation/MobMenu';

function App() {
  const matchesTablet = useMediaQuery('(min-width: 1239px)');
  const matchesMobile = useMediaQuery('(min-width: 768px)');
  const MenuType = () => {
    if(!matchesTablet && matchesMobile) return <TabLayout/>
    if(!matchesTablet && !matchesMobile) return <MobMenu/>
    return <Layout/>
  } 
  return (
    <div className="App">
      {
        MenuType()
      }
      <Intro/>
      <Download/>
      <div className="MainWrapper">
      <About/>
      <Features/>
      <Society/>  
      </div>
    </div>
  );
}

export default App;

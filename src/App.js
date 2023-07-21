
import './App.css';
import AboutSection from './Components/AboutSection';
import ContactSection from './Components/ContactSection';
import HomeSection from './Components/HomeSection';
import ProjectSection from './Components/ProjectSection';
import TechStack from './Components/TechStack';
import { BrowserRouter} from "react-router-dom";


function App() {
  return (
    <>
    {/*  <BrowserRouter>
       
      
       <Routes>
       <Route index element={<HomeSection />} />
       <Route path='about' element={<AboutSection />} />
       <Route path='projects' element={<ProjectSection />} />
       <Route path='contact' element={<ContactSection />} />
       </Routes>
       <TechStack></TechStack>
    </BrowserRouter> */}

    <BrowserRouter>
    <HomeSection></HomeSection>
    <TechStack></TechStack>
    <AboutSection></AboutSection>
    <ProjectSection></ProjectSection>
    <ContactSection></ContactSection>
    </BrowserRouter>

    </>
  );
}

export default App;

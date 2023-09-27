
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Expierience, Feedbacks, Hero, Navbar,Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
     <BrowserRouter> 
     <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover 
         bg-no-repear bg-center'>
         <Navbar />
         <Hero />
         </div>
         <About/>
         <Expierience/>
         <Tech/>
         <Works/>
         <Feedbacks/>
         <div className='relative z-0'>
         <Contact/>
         <StarsCanvas/>

         </div>
      </div>
     </BrowserRouter>
  )
}

export default App

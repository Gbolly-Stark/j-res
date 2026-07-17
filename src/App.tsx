import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured';
import About from './components/About';
import  Menu from './components/Menu'
import WhyChooseUs from './components/WhyChooseUs';
import Review from './components/Review';

import Contact from './components/Contact';
import Footer from './components/Footer';
const App = () => {
  return (
    <main className="relative inset-0">
      <Navbar />
      <Hero />
      <Featured />
      <About />
      <WhyChooseUs />
      <Menu />
      <Review />
      <Contact />
      <Footer />

    </main>
  )
}

export default App
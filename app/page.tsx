import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Projects />
      <ContactForm />
    </main>
  );
}

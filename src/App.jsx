import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GitHubProfile from './components/GitHubProfile';

function App() {
  return (
    <div className="App bg-gradient-to-br from-slate-900 to-black">
      <Navbar />
      <main className="space-y-1">
        <Home />
        <About />
        <Projects />
        <GitHubProfile />
        <Contact />
      </main>
    </div>
  );
}

export default App; 
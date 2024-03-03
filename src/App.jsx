import './App.css'
import Navbar from './components/Navbar/Navbar';
import Feature from './components/Feature/Feature';
import PostHeader from './components/PostHeader/PostHeader';
import Hero from './components/Hero/Hero';
import LoginPage from './components/Login Page/LoginPage';

function App() {

  return (
    <div>
      <LoginPage />
      <Navbar/>
      <Feature/>
      <PostHeader/>
      <Hero/>
    </div>
  )
}

export default App

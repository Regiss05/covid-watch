import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import CountryStats from './components/Pages/CountryStats';
import Header from './components/Header/Header';
import classes from './App.module.css';

function App() {
  return (
    <>
      <main>

        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countries/:name" element={<CountryStats />} />
            <Route path="*" element={<h1 className={classes.alertHeader}>Page not found!</h1>} />
          </Routes>
        </>
      </main>
    </>
  );
}

export default App;

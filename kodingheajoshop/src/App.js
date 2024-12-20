/* main-css-set */
import './css/main.scss';
import './css/reset.scss';
import './css/fonts.scss';
import {Route, Routes} from 'react-router-dom';
import Header from './component/include/Header';
import Footer from './component/include/Footer';
import Main from './component/Main';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
 
}

export default App;

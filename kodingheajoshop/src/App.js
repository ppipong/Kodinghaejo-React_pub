/* main-css-set */
import './css/main.scss';
import './css/reset.scss';
import './css/fonts.scss';
import './css/responsive-mo.scss';
import './css/responsive-tab.scss';
import {Route, Routes} from 'react-router-dom';
import Header from './component/include/Header';
import Footer from './component/include/Footer';
import Main from './component/page/Main';
import Page from './component/page/Page';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/" element={<Page />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
 
}

export default App;

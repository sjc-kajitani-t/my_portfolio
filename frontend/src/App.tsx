import { Button } from 'grommet';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { mockStart } from './mocks/api';
import { Home } from './views/Home';
import { Info } from './views/Info';

const NotFound = () => {
  return <h2>ページが見つかりません</h2>;
};

function App() {
  // APIモック起動
  mockStart();

  return (
    <>
      <BrowserRouter>
        <Link to="/home"><Button primary label="Home" /></Link>
        <Link to="/info"><Button primary label="Info" /></Link>

        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="info" element={<Info />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

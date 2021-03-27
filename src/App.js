import {Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";

import RenderRouter from "./route";

function App() {
  return (
    <Suspense>
    <div className="App">
          <BrowserRouter>
      <RenderRouter />
    </BrowserRouter>
    </div>
    </Suspense>
  );
}

export default App;

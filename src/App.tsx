import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainPage } from "./Components/MainPage";
import { Main } from "./Components/myApp2/Main/Main";

import Container from "./Components/myApp3/Container/Container";
import { TimeContainer } from "./Components/myApp12/TimeContainer/TimeContainer";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<div>No page is selected.</div>} />
          <Route path="one" element={<Main />} />
          <Route path="two" element={<Container />} />
          <Route path="three" element={<TimeContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Layout from './components/layout/Layout';
import Register from "./components/register/Register";
import Products from "./components/home/Products";
import TextSumm from "./components/textsum/TextSumm";
import ProductsCOntainer from "./components/textsum/productsContainer/ProductsCOntainer";
import LandDet from "./components/textsum/langDet/LandDet";
import Grammar from "./components/grammar/Grammar";


function App() {



  const Protect = ({ children }) => {
    if (localStorage.getItem("userAccessToken")) {
      window.history.back();
    }
    else {
      return children;
    }
  }


  const ProtectRoute = ({ children }) => {
    if (localStorage.getItem("userAccessToken")) {
      return children;
    } else {
      return <Navigate to={'/register'} />
    }
  }

  return <>


    <Routes>
      <Route path="" element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Protect>
          <Register />
        </Protect>} />
        <Route
          path="/products"
          element={<ProtectRoute >
            <ProductsCOntainer />
          </ProtectRoute>
          }
        >
          <Route path="" element={<Products />} />
          <Route path="text-summarization-tool" element={<TextSumm />} />
          <Route path="language-detector" element={<LandDet />} /> 
          <Route path="grammar-checker" element={<Grammar />} /> 


        </Route>

      </Route>


    </Routes>




  </>
}

export default App;

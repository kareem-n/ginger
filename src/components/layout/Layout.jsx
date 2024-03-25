import { Outlet  } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { ColorRing } from 'react-loader-spinner'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { setUser } from "../../redux/slices/GlobalStatesSlice";
import { useLocation } from "react-router-dom";
export default function Layout() {


  const { loading, user } = useSelector(state => state.global);

  const dispatch = useDispatch();
  const location = useLocation();



  const reloadHandle = () => {
    const tmp = localStorage.getItem("userAccessToken");
    if (tmp) dispatch(setUser(jwtDecode(tmp)));
  }

  useEffect(() => {

    reloadHandle();

    if (location.pathname.includes("register") && user) {
      window.history.back();
    }

  }, [])


  return (<>



  


    <Navbar />
    {
      loading && <div className="fixed flex items-center justify-center inset-0 bg-black bg-opacity-50 z-50">
        <ColorRing height={100} width={100} />
      </div>
    }



    <Outlet></Outlet>
    <Footer />


  </>
  )
}

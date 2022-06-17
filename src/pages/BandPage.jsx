import { useSelector } from "react-redux"
import BandSection from "../components/BandSection/BandSection"
import NavbarAdmin from "../components/Navbar/NavbarAdmin"


function BandPage() {

    // const userSelector = useSelector((state) => state.auth)

    // if(userSelector?.role !== "admin")
    // {
    // return <Navigate to="/" />
    // }

    return (
        <>
        <NavbarAdmin /> 

        <BandSection/>
        </>
        
    )
}

export default BandPage
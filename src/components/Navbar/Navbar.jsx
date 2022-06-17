// import { Link } from 'react-router-dom'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@chakra-ui/react';
import user_types from '../../redux/reducers/user/types';

function Navbar() {
const userSelector = useSelector((state) => state.auth)
const dispatch = useDispatch();

function btnlogout() {
  localStorage.removeItem("user_data")

  dispatch ({
    type: user_types.USER_LOGOUT
  })
  
}

  return (
    <nav>
      <div className="link-wrapper">
       <Link href="/"> Home</Link> 
       <Link href="/contact"> Contact</Link> 
      </div>
    
      <div className="link-wrapper"> 
        {userSelector.id
        ? 
      //   <Link  className="mx-3" href="/">
      //     Hello {userSelector.username} 
      //   </Link>
      //   : null}
      // {userSelector.id ? (
        <Button className='mx-3'  color='danger' onClick={btnlogout}>
          Logout
        </Button>
      : (
        <Link href="/LoginPage" style={{ textDecoration: "none" }}>
          Login
        </Link>
      )}
      </div>
    </nav>
    
  )
}

export default Navbar;
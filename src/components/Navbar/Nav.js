import { useEffect, useState } from 'react';
import './Nav.css'

const Nav = () => {
    const [show, handleShow] = useState(false);

    const navAnimation =()=>{
        if(window.scrollY > 300){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", navAnimation);
        return ()=>{
            window.removeEventListener("scroll", navAnimation)
        }
    }, [])
    return ( 
        <div className={`nav`}>
            <div className="nav_contents">
                <img className ="nav_logo"src="https://th.bing.com/th/id/R.05c96bba4090acafe115aad47e66572d?rik=ejgwaTp6m0Dv6g&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f05%2fNetflix-Logo.png&ehk=gJbypm3nuRFxW%2fGn3WbaXOcTVq6kNgynGml%2fdXD79fM%3d&risl=&pid=ImgRaw&r=0" alt="Netflix Logo" />

                <img className ="nav_avatar"src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bb3a8833850498.56ba69ac33f26.png" alt="Avatar" />
            </div>
        </div>
     );
}
 
export default Nav;
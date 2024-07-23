// import authService from './appwrite/auth'
import {Container, Logo} from './index';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { Auth } from '../store/auth';
import { Link } from 'react-router-dom';
 import {LogoutBtn} from './index';

function Header() {
    const authStatus = useRecoilValue(Auth);
    const navigate = useNavigate();
    const navItems = [
        {
            name: "Home",
            slug: '/',
            active: true
        },
        {
            name: "Login",
            slug: '/login',
            active: !authStatus.status
        },
        {
            name: "SignUp",
            slug: '/signup',
            active: !authStatus.status
        },
        {
            name: "All Posts",
            slug: '/all-posts',
            active: authStatus.status
        },
        {
            name: "Add Post",
            slug: '/add-post',
            active: authStatus.status
        }
    ]
    return (
        <>
            <header className="py-3 shadow bg-blue-300">
                <Container>
                    <nav className='flex'>
                        <div>
                            <Link to='/'><Logo width='10px'/></Link>
                        </div>
                        <ul className='flex ml-auto'>
                        {navItems.map((item)=>(
                            item.active? (
                                <li key={item.name}>
                                    <button onClick={()=>navigate(item.slug)} className='inline-bock pl-6 py-2 duration-200 md:hover:bg-white rounded-full text-white md:hover:text-black'>{item.name}</button>
                                </li>
                            ): null
                        ))}
                        {authStatus.status && <li><LogoutBtn/></li>}
                        </ul>
                    </nav>
                </Container>
            </header>
        </>
    )
}

export default Header;
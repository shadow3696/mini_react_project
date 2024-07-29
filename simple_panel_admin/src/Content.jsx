import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainContext } from './contexts/MainContext';
import Gallery from './gallery/Gallery';
import Posts from './posts/Posts';
import style from './style.module.css';
import Todos from './todos/Todos';
import Users from './users/Users';
import AddUser from './users/AddUser';
import EditDesc from './users/EditDesc';

const Content = () => {

    const { showMenu, setShowMenu } = useContext(MainContext);
    // const { isLogin, setIsLogin } = useState(true);

    const handleShowMenu = (event) => {
        event.stopPropagation();
        setShowMenu(!showMenu);
    };

    // if (isLogin) {
    return (
        <div className={style.content_section} onClick={() => { setShowMenu(false) }}>
            <i className={`${style.menu_button} fas fa-bars text-dark m-2 pointer d-md-none`}
                onClick={handleShowMenu}
            ></i>
                <Routes>
                    <Route path='/user' element={<Users />}/>
                    <Route path='/user/add' element={<AddUser />}>
                    <Route path=':userId' element={<EditDesc />} /> {/* if in /user/add and send a id go to /user/add/:id */}
                    </Route>
                    <Route path='/post' element={<Posts />}/>
                    <Route path='/gallery' element={<Gallery />}/>
                    <Route path='/todo' element={<Todos />} />
                    <Route path='*' element={<Users />}/>
                </Routes>
        </div>
    );
    // } else {
        // <Navigate to='/login'/>
    };
// };

export default Content;
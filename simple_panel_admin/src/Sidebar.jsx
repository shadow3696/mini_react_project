import React, { useContext } from 'react';
import { MainContext } from './contexts/MainContext';
import style from './style.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const { showMenu, setShowMenu } = useContext(MainContext);

    const isActive = ({ isActive }) => { return isActive ? "active_nav" : "" };

    return (
        <div className={`${style.sidebar_section} bg-secondary`} style={showMenu ? { right: 0 } : {}}>
            <ul className={`${style.sidebar_list} m-0 p-0`}>
                <li className={style.sidebar_avatar}>
                    <img src="/assets/images/user2.jpg" alt="" />
                </li>
                <NavLink to="/user" className={isActive}>
                    <li>
                        کاربران
                    </li>
                </NavLink>
                <NavLink to="/post" className={isActive}>
                    <li>
                        پست ها
                    </li>
                </NavLink>
                <NavLink to="/gallery" className={isActive}>
                    <li>
                        گالری
                    </li>
                </NavLink>
                <NavLink to="/todo" className={isActive}>
                    <li>
                        کارها
                    </li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Sidebar;
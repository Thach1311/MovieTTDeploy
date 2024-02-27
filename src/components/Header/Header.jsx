import classNames from 'classnames/bind';
import style from './Header.module.scss';
import { CiSearch } from 'react-icons/ci';
import { IoMdSunny } from 'react-icons/io';
import { IoMoonSharp } from 'react-icons/io5';
import { useState, createContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';
import { useMovieContext } from '../Middle/MovieProvider';
const cx = classNames.bind(style);
export const ShowTheme = createContext();

function Header() {
    const [isShow, setIsShow] = useState(false);
    const { setSelectedTheme } = useMovieContext();

    return (
        <ShowTheme.Provider value={isShow}>
            <div className={cx('header')}>
                <Link to="/" className={cx('logo')}>
                    <FaFilm className={cx('mr-[6px]')} />
                    TTPhim
                </Link>
                <div className={cx('search')}>
                    <input type="text" name="" id="" className={cx('search_input')} placeholder="Search"></input>
                    <CiSearch className={cx('search_icon')} />
                </div>
                <IoMoonSharp
                    onClick={() => {
                        setIsShow(true);
                        setSelectedTheme(true);
                    }}
                    style={isShow && { display: 'none' }}
                    className={cx('moon_icon')}
                />
                <IoMdSunny
                    onClick={() => {
                        setIsShow(false);
                        setSelectedTheme(false);
                    }}
                    style={isShow && { display: 'block' }}
                    className={cx('sun_icon')}
                />
            </div>
            <Outlet />
        </ShowTheme.Provider>
    );
}

export default Header;

import classNames from 'classnames/bind';
import styles from './ListMovie.module.scss';
import { IoIosPlayCircle } from 'react-icons/io';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import 'animate.css';
import { Outlet, Link } from 'react-router-dom';
import { useMovieContext } from '../Middle/MovieProvider';
import { GiPreviousButton } from 'react-icons/gi';
import { GiNextButton } from 'react-icons/gi';

const cx = classNames.bind(styles);

function ListMovie(props) {
    const [movieData, setMovieData] = useState([]);
    const { selectedTheme } = useMovieContext();
    const [indexPage, setIndexPage] = useState(1);
    // props.value.value.setPathSlug('thach')
    // console.log(props.value.value);

    useEffect(() => {
        const fetchData = () => {
            return axios
                .get(`https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${indexPage}`)
                .then((response) => {
                    const data = response.data.items;
                    setMovieData(data);
                })
                .catch((error) => {
                    console.error('Axios Error:', error);
                });
        };

        fetchData();
    }, [indexPage]);

    return (
        <div>
            <div
                className={cx('Movie')}
                style={selectedTheme ? { backgroundColor: 'white' } : { backgroundColor: '#1a1a1a' }}
            >
                 <h1 className={cx('headMovie', 'animate__animated animate__fadeInUp')}>PHIM ĐỀ CỬ</h1> 

                <div className={cx('listMovie')}>
                    {movieData.length > 0 &&
                        movieData.map((movies, key) => {
                            return (
                                <Link
                                    to={`/${movies.slug}`}
                                    className={cx('MovieForm', 'animate__animated animate__slideInUp')}
                                    key={key}
                                    onClick={() => props.value.value.setPathSlug(movies.slug)}
                                >
                                    <div className={cx('Movie_img')}>
                                        <img
                                            src={`https://img.ophim12.cc/uploads/movies/${movies.slug}-poster.jpg`}
                                            alt="imgForm"
                                        />
                                        <IoIosPlayCircle className={cx('btn_play')} />
                                    </div>

                                    <div className={cx('Movie_name')}>{movies.name}</div>
                                </Link>
                            );
                        })}
                </div>
                <div className={cx('pageListMovie')}>
                    <div
                        className={cx(
                            'text-white h-[30px] w-[40px] bg-[#ef8202] cursor-pointer rounded-[4px] hover:bg-[#f37a55]',
                        )}
                        onClick={() => {
                            indexPage > 1 ? setIndexPage(indexPage - 1) : setIndexPage(10);
                        }}
                    >
                        <GiPreviousButton />
                    </div>
                    <div
                        className={cx(
                            'text-white h-[30px] w-[40px] bg-[#ef8202] cursor-pointer rounded-[4px] hover:bg-[#ee4b4b]',
                        )}
                        onClick={() => setIndexPage(1)}
                        style={indexPage === 1 ? { backgroundColor: '#ee4b4b' } : { backgroundColor: '#ef9002ec' }}
                    >
                        1
                    </div>
                    <div
                        className={cx(
                            'text-white h-[30px] w-[40px] bg-[#ef8202] cursor-pointer rounded-[4px] hover:bg-[#ee4b4b]',
                        )}
                        onClick={() => setIndexPage(2)}
                        style={indexPage === 2 ? { backgroundColor: '#ee4b4b' } : { backgroundColor: '#ef9002ec' }}
                    >
                        2
                    </div>
                    <div
                        className={cx(
                            'text-white h-[30px] w-[40px] bg-[#ef8202] cursor-pointer rounded-[4px] hover:bg-[#ee4b4b]',
                        )}
                        onClick={() => setIndexPage(3)}
                        style={indexPage === 3 ? { backgroundColor: '#ee4b4b' } : { backgroundColor: '#ef9002ec' }}
                    >
                        3
                    </div>
                    <div
                        className={cx(
                            'text-white h-[30px] w-[40px] bg-[#ef8202] cursor-pointer rounded-[4px] hover:bg-[#ee4b4b]',
                        )}
                        onClick={() => setIndexPage(4)}
                        style={indexPage === 4 ? { backgroundColor: '#ee4b4b' } : { backgroundColor: '#ef9002ec' }}
                    >
                        4
                    </div>
                    <div
                        className={cx(
                            'text-white h-[30px] w-[40px] bg-[#ef8202] cursor-pointer rounded-[4px] hover:bg-[#ee4b4b]',
                        )}
                        onClick={() => setIndexPage(5)}
                        style={indexPage === 5 ? { backgroundColor: '#ee4b4b' } : { backgroundColor: '#ef9002ec' }}
                    >
                        5
                    </div>
                    <div
                        className={cx(
                            'text-white h-[30px] w-[40px] bg-[#ef8202] cursor-pointer rounded-[4px] hover:bg-[#ee4b4b]',
                        )}
                        onClick={() => setIndexPage(6)}
                        style={indexPage === 6 ? { backgroundColor: '#ee4b4b' } : { backgroundColor: '#ef9002ec' }}
                    >
                        6
                    </div>
                    <div
                        className={cx(
                            'text-white h-[30px] w-[40px] bg-[#ef8202] cursor-pointer rounded-[4px] hover:bg-[#ee4b4b]',
                        )}
                        onClick={() => setIndexPage(7)}
                        style={indexPage === 7 ? { backgroundColor: '#ee4b4b' } : { backgroundColor: '#ef9002ec' }}
                    >
                        7
                    </div>
                    <div
                        className={cx(
                            'text-white h-[30px] w-[40px] bg-[#ef8202] cursor-pointer rounded-[4px] hover:bg-[#ee4b4b]',
                        )}
                        onClick={() => setIndexPage(8)}
                        style={indexPage === 8 ? { backgroundColor: '#ee4b4b' } : { backgroundColor: '#ef9002ec' }}
                    >
                        8
                    </div>
                    <div
                        className={cx(
                            'text-white h-[30px] w-[40px] bg-[#ef8202] cursor-pointer rounded-[4px] hover:bg-[#ee4b4b]',
                        )}
                        onClick={() => setIndexPage(9)}
                        style={indexPage === 9 ? { backgroundColor: '#ee4b4b' } : { backgroundColor: '#ef9002ec' }}
                    >
                        9
                    </div>
                    <div
                        className={cx(
                            'text-white h-[30px] w-[40px] bg-[#ef8202] cursor-pointer rounded-[4px] hover:bg-[#ee4b4b]',
                        )}
                        onClick={() => setIndexPage(10)}
                        style={indexPage === 10 ? { backgroundColor: '#ee4b4b' } : { backgroundColor: '#ef9002ec' }}
                    >
                        10
                    </div>
                    <div
                        className={cx(
                            'text-white h-[30px] w-[40px] bg-[#ef8202] cursor-pointer rounded-[4px] hover:bg-[#f37a55]',
                        )}
                        onClick={() => {
                            indexPage < 10 ? setIndexPage(indexPage + 1) : setIndexPage(1);
                        }}
                    >
                        <GiNextButton />
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default ListMovie;

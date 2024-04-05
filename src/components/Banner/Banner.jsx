import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
// import { IoIosPlayCircle } from 'react-icons/io';
import 'animate.css';
import { FaYoutube } from 'react-icons/fa';
// import { FaCirclePlay } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
// import { useMovieContext } from '../Middle/MovieProvider';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
// import Episodes from '../Episodes/Episodes';

const cx = classNames.bind(styles);
function Banner(props) {
    const location = useLocation();
    const currentPath = location.pathname;
    const pathWithoutLeadingSlash = currentPath.startsWith('/movie/') ? currentPath.substring(1) : currentPath;
    const segments = pathWithoutLeadingSlash.split('/movie');
    const lastSegment = segments[segments.length - 1];

    const [movieData, setMovieData] = useState([]);

    // console.log(props.value.value.value.pathSlug);
    // const { selectedMovieSlug } = useMovieContext();

    useEffect(() => {
        const fetchAPI = () => {
            return axios
                .get(`https://ophim1.com/phim${lastSegment}`)
                .then((response) => {
                    const data = response.data.movie;
                    setMovieData(data);
                })
                .catch((error) => {
                    console.error('Axios Error:', error);
                });
        };
        fetchAPI();
    }, [lastSegment]);

    return (
        <>
            <div className={cx('Banner')}>
                <div className={cx('Banner_form')}>
                    <div className={cx('poster')}>
                        {movieData.trailer_url === '' && (
                            <img src={movieData.poster_url} alt="" style={{ width: '980px', height: '490px' }} />
                        )}
                        {movieData.trailer_url !== '' && movieData.trailer_url !== '' && (
                            <ReactPlayer
                                playing={true}
                                width="980px"
                                height="490px"
                                volume={0}
                                loop={true}
                                url={movieData.trailer_url}
                                alt=""
                            />
                        )}
                        {/* <IoIosPlayCircle className={cx('btn_play')} /> */}
                        <div className={cx('descriptionFilm', 'ml-[30px] mb-[30px]')}>
                            <div
                                className={cx(
                                    'text-[28px] font-[600]',
                                    'animate__animated animate__fadeInDown animate__slower',
                                )}
                            >
                                {movieData.name}
                            </div>
                            <div
                                className={cx(
                                    'text-[16px] font-[500] mb-[10px]',
                                    'animate__animated animate__fadeInDown animate__slower',
                                )}
                            >
                                {movieData.origin_name}
                            </div>
                            <div style={{ display: 'flex' }}>
                                <button
                                    className={cx(
                                        'text-[14px] font-[400] w-[85px] h-[33px] bg-[#31B0D5] ',
                                        'animate__animated animate__fadeInDown animate__slower',
                                    )}
                                >
                                    <FaYoutube className={cx('mr-[3px] text-[12px]')} />

                                    <Link target="_blank" to={movieData.trailer_url}>
                                        
                                        Trailer
                                    </Link>
                                </button>
                                {/* <button
                                    className={cx(
                                        'text-[14px] font-[400] w-[85px] h-[33px] bg-[#C9302C] ml-[10px] ',
                                        'animate__animated animate__fadeInDown animate__slower',
                                    )}
                                >
                                    <FaCirclePlay className={cx('mr-[3px] text-[12px]')} />
                                    <Link>Xem phim</Link>
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;

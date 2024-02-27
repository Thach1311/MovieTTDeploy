import classNames from 'classnames/bind';
import styles from './DescriptionFilm.module.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
// import { useMovieContext } from '../Middle/MovieProvider';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const cx = classNames.bind(styles);
function DescriptionFilm() {
    // const { selectedMovieSlug } = useMovieContext();
    const [movieData, setMovieData] = useState([]);
    // console.log(selectedMovieSlug);

    const location = useLocation();
    const currentPath = location.pathname;
    const pathWithoutLeadingSlash = currentPath.startsWith('/movie/') ? currentPath.substring(1) : currentPath;
    const segments = pathWithoutLeadingSlash.split('/movie');
    const lastSegment = segments[segments.length - 1];
    // console.log(lastSegment);

    useEffect(() => {
        Aos.init({ transition: 2000 });
    }, []);

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

    // console.log(movieData);

    return (
        <>
            <div data-aos="fade-down" className={cx('form_Description')}>
                <div className={cx('layout')}>
                    <div data-aos="fade-up" className={cx('description')}>
                        <div>
                            <span className={cx('text-white font-[500] text-[13px]')}>Đang phát: </span>
                            <span className={cx('text-red-600 font-[500] text-[13px]')}>
                                {movieData.episode_total} tập
                            </span>
                        </div>
                        <div>
                            <span className={cx('text-white font-[500] text-[13px]')}>Thể loại: </span>
                            <span className={cx('text-[13px] text-[#828282] hover:text-[#ff6901]')}>
                                {movieData.category &&
                                    movieData.category.map((cate,index) => {
                                        return <span key={index} id={cate.id}>{cate.name}, </span>;
                                    })}
                            </span>
                        </div>
                        <div>
                            <span className={cx('text-white font-[500] text-[13px]')}>Điểm Rottentomatoes: </span>
                            <span className={cx('text-[13px] text-[#828282] hover:text-[#ff6901]')}>
                                100% Tomatometer
                            </span>
                        </div>
                    </div>

                    <div data-aos="fade-up" className={cx('description')}>
                        <div>
                            <span className={cx('text-white font-[500] text-[13px]')}>Năm Phát Hành: </span>
                            <span className={cx('text-[13px] text-[#828282] hover:text-[#ff6901]')}>
                                {movieData.year}
                            </span>
                        </div>
                        <div>
                            <span className={cx('text-white font-[500] text-[13px]')}>Đạo diễn: </span>
                            <span className={cx('text-[13px] text-[#828282] hover:text-[#ff6901]')}>
                                {movieData.director}
                            </span>
                        </div>
                        <div>
                            <span className={cx('text-white font-[500] text-[13px]')}>Thời lượng: </span>
                            <span className={cx('text-[13px] text-[#828282] hover:text-[#ff6901]')}>
                                {movieData.time}
                            </span>
                        </div>
                    </div>

                    <div data-aos="fade-up" className={cx('description')}>
                        <div>
                            <span className={cx('text-white font-[500] text-[13px]')}>Quốc gia: </span>

                            <span className={cx('text-[13px] text-[#828282] hover:text-[#ff6901]')}>
                                {movieData.country &&
                                    movieData.country.map((country) => <span key={country.id}>{country.name}</span>)}
                            </span>
                        </div>
                        <div>
                            <span className={cx('text-white font-[500] text-[13px]')}>Điểm IMDb: </span>
                            <span
                                className={cx(
                                    'text-black w-[22px] h-[18px] bg-[#e3b71e] text-[13px] p-[2px] rounded-[2px] font-[700]',
                                )}
                            >
                                8.7
                            </span>
                        </div>
                        <div>
                            <span className={cx('text-white font-[500] text-[13px]')}>Diễn viên: </span>
                            <span className={cx('text-[13px] text-[#828282] hover:text-[#ff6901]')}>
                                {movieData.actor}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={cx('h-[1px] w-[950px] bg-[#3a3a3a] mt-[10px]')}></div>

                <div className={cx('main')}>
                    <h3
                        data-aos={'fade-left'}
                        className={cx('text-[15px] font-[700] text-[#ff9601] mt-[10px] mb-[10px]')}
                    >
                        Nội dung phim
                    </h3>
                    <div data-aos="fade-down" className={cx('text-[14px] text-[#828282]')}>
                        {movieData.content}
                    </div>
                </div>
            </div>
        </>
    );
}

export default DescriptionFilm;

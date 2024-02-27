import classNames from 'classnames/bind';
import styles from './Episodes.module.scss';
import { useEffect, useState } from 'react';
// import { useMovieContext } from '../Middle/MovieProvider';
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Episodes() {
    // const { selectedMovieSlug } = useMovieContext();
    const [movieData, setMovieData] = useState([]);

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
                    const data = response.data.episodes;
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
            <div className={cx('form')}>
                {movieData.map((server) =>
                    server.server_data.map((episode, index) => (
                        <Link to={episode.link_embed} target='_blank' key={index} className={cx('episodes')}>
                            Tập {index + 1}
                        </Link>
                    )),
                )}
            </div>
        </>
    );
}

export default Episodes;

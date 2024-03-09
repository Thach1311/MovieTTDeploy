import classNames from 'classnames/bind';
import styles from './ListMovieSearch.module.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
const cx = classNames.bind(styles);

function ListMovieSearch(props) {
    const [data, setMovieData] = useState([]);

    console.log(props.value);
    useEffect(() => {
        const fetchData = () => {
            return axios
                .get(`https://ophim1.com/phim/${props.value}`)
                .then((response) => {
                    const data = response.data.movie;
                    setMovieData(data);
                })
                .catch((error) => {
                    console.error('Axios Error:', error);
                });
        };

        fetchData([]);
    }, [props.value]);

    return (
        <>
            <div className={cx('MovieSearchForm')}>
                <div className={cx('Item_form')}>
                    <Link to={`/${props.value}`} onClick={() => props.value.value.setPathSlug(props.value)}>
                        <div className={cx('item')}>
                            <div className="image">
                                <img src={data.poster_url} alt="Không tìm thấy" />
                            </div>
                            <div className="name">{data.name}</div>
                        </div>
                    </Link>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
}

export default ListMovieSearch;

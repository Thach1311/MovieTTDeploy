import classNames from 'classnames/bind';
import styles from './FormFilm.module.scss';
import Banner from '../../components/Banner/Banner';
import Episodes from '../../components/Episodes/Episodes';
import DescriptionFilm from '../DescriptionFilm/DescriptionFilm';
import { useMovieContext } from '../Middle/MovieProvider';
const cx = classNames.bind(styles);
function FormFilm(props) {
    const { selectedTheme } = useMovieContext();
    return (
        <div
            className={cx('formFilm')}
            style={selectedTheme ? { backgroundColor: '#1a1a1a' } : { backgroundColor: '#fff' }}
        >
            <Banner value={props} />
            <Episodes />
            <DescriptionFilm />
        </div>
    );
}

export default FormFilm;

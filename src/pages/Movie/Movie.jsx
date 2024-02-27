import FormFilm from '../../components/FormFilm/FormFilm';
import Header from '../../components/Header/Header';

function Movie(props) {
    return (
        <>
            <Header></Header>
            <FormFilm value={props} />
        </>
    );
}

export default Movie;

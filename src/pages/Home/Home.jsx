import Header from '../../components/Header/Header';
import ListMovie from '../../components/ListMovie/ListMovie';

function Home(props) {
    return (
        <>
            <Header />
            <ListMovie value={props} />
        </>
    );
}

export default Home;

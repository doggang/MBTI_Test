import Loader from 'react-loader-spinner';
import Spinner from 'react-bootstrap/Spinner'

function Loading(){
    return(
        <loading>
            <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
            </Spinner>
        </loading>
    );
}

export default Loading;
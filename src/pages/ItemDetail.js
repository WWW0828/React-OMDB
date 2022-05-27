import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "reactstrap";
import './ItemDetail.css'
function ItemDetailPage(props) {
  // console.log(props.movie);
  if(props.movie.Poster === 'N/A') {
    return (
      <Row className='item-row'>
          <Col className='item-col-1'>
            <div className='item-poster-404'>
              <div>No poster found</div>
            </div>
          </Col>
          <Col className='item-col-2'>
            <Row className='info-row'>
              <div className='row-title'>Title: </div>
              <div className='row-content'>{props.movie.Title}</div>
            </Row>
            <Row className='info-row'>
              <div className='row-title'>Year: </div>
              <div className='row-content'>{props.movie.Year}</div>
            </Row>
            <Row className='info-row'>
              <div className='row-title'>Type: </div>
              <div className='row-content'>{props.movie.Type}</div>
            </Row>
          </Col>
        </Row>
    );
  }
  return (
    <Row className='item-row'>
        <Col className='item-col-1'>
          <img src={props.movie.Poster} alt='movie' className='item-poster'></img>
        </Col>
        <Col className='item-col-2'>
          <Row className='info-row'>
            <div className='row-title'>Title: </div>
            <div className='row-content'>{props.movie.Title}</div>
          </Row>
          <Row className='info-row'>
            <div className='row-title'>Year: </div>
            <div className='row-content'>{props.movie.Year}</div>
          </Row>
          <Row className='info-row'>
            <div className='row-title'>Type: </div>
            <div className='row-content'>{props.movie.Type}</div>
          </Row>
        </Col>
      </Row>
  );
}

export default ItemDetailPage;

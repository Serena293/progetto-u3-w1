import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class AllMovies extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };

  getAllMovies = async () => {
    try {
      let response = await fetch(this.props.source);
      if (response.ok) {
        let data = await response.json();
        this.setState({
          movies: data.Search,
          isLoading: false,
        });
      } else {
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };

  componentDidMount() {
    this.getAllMovies();
  }

  render() {
    const responsive = {
      xxl: { breakpoint: { max: 3000, min: 1400 }, items: 6 },
      xl: { breakpoint: { max: 1400, min: 1200 }, items: 5 },
      large: { breakpoint: { max: 1200, min: 992 }, items: 4 },
      medium: { breakpoint: { max: 992, min: 768 }, items: 3 },
      small: { breakpoint: { max: 768, min: 576 }, items: 2 },
      xs: { breakpoint: { max: 576, min: 0 }, items: 1 },
    };

    return (
      <Container fluid className="gallery ">
        <Row className="justify-content-center mt-3 mx-0">
          <Col>
            <h2 className="text-light text-left">{this.props.title}</h2>

            {this.state.isError && (
              <Alert variant="danger">Qualcosa è andato storto :(</Alert>
            )}

            {this.state.isLoading && (
              <div className="text-center">
                <Spinner animation="border" role="status" variant="success" >
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            )}

            <Carousel
              responsive={responsive}
              ssr
              keyBoardControl
              infinite
              transitionDuration={100}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              
            >
              {this.state.movies.map((movie) => (
                <div key={movie.imdbID}>
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    style={{ width: "100%"}}
                    
                  />
                  <p className="text-light">{movie.Title}</p>
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AllMovies;

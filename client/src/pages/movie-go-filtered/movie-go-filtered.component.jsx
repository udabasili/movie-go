import React from 'react';
import MovieModalWindow from '../../components/movie-modal/movie-modal.component';
import { movieApiLink, getTopMovies, getData } from '../../redux/utils/movie.utils';
import CardList from '../../components/card-list/card-list.compoment';
import '../movie-go/movie-go.styles.css';
import MovieGoNavbar from '../../components/navbar/navbar.component';
import {connect} from 'react-redux';
import { genres } from '../../data/genre.data';

class MovieGoFiltered extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredData: [],
      id: ' ',
      searchState: '',
      currentPage: 1,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.getPercentageScrolledDown = this.getScrollDownPercentage.bind(this);
  }

  componentDidMount() {
    const fullUrl = movieApiLink();
    getData(fullUrl)
      .then((data) => {
        this.setState({ data: data.results });
      })
      .catch((error) => {
        alert(error);
      });

    // activates the window scrolling down
    window.onscroll = this.handleScroll;
  }

	componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll);
	  }

	handleScroll() {
	  const percentageScrolled = this.getPercentageScrolledDown(window);
	  if (percentageScrolled > 0.7) {
	    const nextPage = this.state.currentPage + 1;
	    this.setState({ currentPage: nextPage });
	    const link = getTopMovies({ page: nextPage });
	    getData(link)
	      .then((newData) => {
	        newData.results.forEach((eachData) => {
	          this.setState({ data: [...this.state.data, eachData] });
	        });
	      });
	  }
	}


	getScrollDownPercentage = (window) => {
	  const pageHeight = window.document.documentElement.scrollHeight;
	  const { clientHeight } = window.document.documentElement;
	  const scrollPos = window.pageYOffset;
	  const currentPosition = scrollPos + clientHeight;
	  const percentageScrolled = currentPosition / pageHeight;
	  return percentageScrolled;
	}

	render() {
		let genre = this.props.match.params.genre
		let genreIndex = genres.findIndex(g => g.name.toLowerCase() === genre.toLowerCase())
		let genreFilms = genres[genreIndex];
		const filteredData = genreFilms ?
			this.state.data.filter((d, i) => d.genre_ids.includes(Number(genreFilms.id))) :
			this.state.data 
	  const { showModal } = this.props;
	  return (
		<div className="movie-go-app">
			{ showModal && <MovieModalWindow />}
			<MovieGoNavbar getGenre={this.setGenre} />
			{(!filteredData.length) ? 
			<div className="loader"> </div> : 
			<CardList movies={filteredData} />}
		</div>
	  );
	}
}


const mapStateToProps = (state) => ({
  showModal: state.ebay.showModal,
});

export default connect(mapStateToProps, null)(MovieGoFiltered);

import React from 'react';
import MovieModalWindow from '../../components/movie-modal/movie-modal.component';
import { movieApiLink, getTopMovies, getData } from '../../redux/utils/movie.utils';
import CardList from '../../components/card-list/card-list.compoment';
import './movie-go.styles.css';
import MovieGoNavbar from '../../components/navbar/navbar.component';
import {connect} from 'react-redux';

class MovieGo extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      data: [],
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
		  console.log(data);
		  
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
		const { showModal } = this.props;
		const { data } = this.state;
	  return (
		<div className="movie-go-app">
			{ showModal && <MovieModalWindow />}
			<MovieGoNavbar getGenre={this.setGenre} />
			{(!data.length) ? 
			<div className="loader"> </div>: 
			<CardList movies={data} />
			}
		</div>
	  );
	}
}


const mapStateToProps = (state) => ({
  showModal: state.ebay.showModal,
});

export default connect(mapStateToProps, null)(MovieGo);

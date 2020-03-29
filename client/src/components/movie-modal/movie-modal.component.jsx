import React from 'react';
import {connect} from 'react-redux';
import EbayItemsList from '../ebay/ebay-list/ebay-list.component';
import { pushToModal } from '../../redux/actions/moviego.actions';
import './movie-modal.styles.css';

class MovieModalWindow extends React.Component {
  render() {
    const { ebayCarts, youtube, pushToModal } = this.props;
    return (
      <React.Fragment>
        {
          ebayCarts.length ?
            <div id="movie-modal-section" className="movie-modal-section">
              <div className="modal-content-container">
                <span 
                  onClick={() => pushToModal()}
                  className="modal-close-button">
                    &times;
                  </span>
                <div className="modal-content">
                  <div className="ebay-sales-list-container">
                  { 
                    ebayCarts.length ?
                      <EbayItemsList ebayItems={ebayCarts} />:
                      <div className="modal-loader"/>
                  }
                  </div>
                  <div className="youtube-video">
                    <iframe
                      title="movie-youtube"
                      className="youtube-iframe"
                      src={youtube}
                      frameBorder="0"
                      allowFullScreen
                      control="true"
                    />
                  </div>
                </div>
              </div>
            </div>
            :<div className="loader"></div>
        }
      </React.Fragment>
      
    );
  }
}


const mapStateToProps = (state) => ({
  ebayCarts: state.ebay.ebayCarts,
  showModal: state.ebay.showModal,
  youtube: state.ebay.youtubeVideo
});

const mapDispatchToProps = (dispatch) => ({
  pushToModal: () => dispatch(pushToModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieModalWindow);

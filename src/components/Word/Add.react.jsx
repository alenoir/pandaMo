import React from 'react'
import Router from 'react-router';
import WordAction from '../../actions/WordAction.jsx'
import WordStore from '../../stores/WordStore.jsx'
import WordForm from './WordForm.react.jsx'
//import youtube from 'youtube-node'

import mui from 'material-ui'

let ThemeManager = new mui.Styles.ThemeManager();
let Card = mui.Card,
    CardHeader = mui.CardHeader,
    CardMedia = mui.CardMedia,
    CardTitle = mui.CardTitle;

class WordAdd extends React.Component {
  mixins : [Router.Navigation]

  constructor(props) {
    super(props);

    this.getYoutubeUrl = this.getYoutubeUrl.bind(this)
    this.constructYoutubeUrl = this.constructYoutubeUrl.bind(this)
    this._handleWordSubmit = this._handleWordSubmit.bind(this)
    this._handleWordDataChange = this._handleWordDataChange.bind(this)

    this.state = {
      youtubeUrl: "",
      title: ""
    };
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  //

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <Card>
              <WordForm onWordSubmit={this._handleWordSubmit} onWordDataChange={this._handleWordDataChange}></WordForm>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="col-md-12">
            <CardHeader
              title={this.state.title} />
            <CardMedia>
              <iframe width="420" height="315" src={this.state.youtubeUrl} frameborder="0" allowfullscreen></iframe>
            </CardMedia>
          </Card>
        </div>
      </div>
    );
  }

  getYoutubeUrl() {
    return this.constructYoutubeUrl(this.state.youtubeId, this.state.startTime, this.state.endTime);
  }

  constructYoutubeUrl(id, start=0, end=10) {
    var youtubeUrl = "https://www.youtube.com/v/" + id + "?start=" + start + "&end=" + end + "&autoplay=1&version=3";
    return youtubeUrl;
  }

  _handleWordSubmit(word) {
    WordAction.create(word);
    Router.run(routes, '/');
  }

  _handleWordDataChange(word) {
    var youtubeUrl = this.constructYoutubeUrl(word.youtubeId, word.startTime, word.endTime);
    this.setState({youtubeUrl: youtubeUrl});
    this.setState({title: word.title});
  }
}

export default WordAdd

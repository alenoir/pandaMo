import React from 'react'
import WordAction from '../../actions/WordAction.jsx'
import WordStore from '../../stores/WordStore.jsx'
//import youtube from 'youtube-node'

import mui from 'material-ui'

let ThemeManager = new mui.Styles.ThemeManager();
let TextField = mui.TextField,
    RaisedButton = mui.RaisedButton;

class WordForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleDataChanged = this.handleDataChanged.bind(this)
    this._handleChangeUrlVideo = this._handleChangeUrlVideo.bind(this)
    this._handleChangeTitle = this._handleChangeTitle.bind(this)
    this._handleChangeStartVideo = this._handleChangeStartVideo.bind(this)
    this._handleChangeEndVideo = this._handleChangeEndVideo.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)

    this.state = {
      youtubeUrl: "",
      youtubeId: "",
      startTime: null,
      endTime: null,
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

      <form id="word-form" className="col-md-12">
        <TextField
          fullWidth="true"
          defaultValue={this.state.youtubeUrl}
          hintText="https://www.youtube.com/watch?v=e3TRTFI3yJA"
          floatingLabelText="Url Youtube"
          onChange={this._handleChangeUrlVideo} />
        <div className="row">
          <div className="col-md-6">
            <TextField
              fullWidth="true"
              defaultValue={this.state.startTime}
              floatingLabelText="Start time"
              onChange={this._handleChangeStartVideo} />
          </div>
          <div className="col-md-6">
            <TextField
              fullWidth="true"
              defaultValue={this.state.endTime}
              floatingLabelText="End time"
              onChange={this._handleChangeEndVideo} />
          </div>
        </div>

        <TextField
          fullWidth="true"
          hintText="Title"
          defaultValue={this.state.title}
          floatingLabelText="Title"
          onChange={this._handleChangeTitle} />

        <RaisedButton onClick={this._handleSubmit} label="Save" primary={true} />

      </form>
    );
  }

  handleDataChanged() {
    this.props.onWordDataChange({
      youtubeId: this.state.youtubeId,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      title: this.state.title
    });
  }

  _handleChangeUrlVideo(e) {
    var urlVideo = e.target.value

    var rePattern = new RegExp(/(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((?:\w|-|_){11})(?:(?:\?|\&)index=((?:\d){1,3}))?(?:(?:\?|\&)list=((?:\w|-|_){24}))?(?:\S+)?$/);
    var arrMatches = urlVideo.match(rePattern);

    var youtubeId = arrMatches[1];

    this.setState({youtubeId: youtubeId}, function() {
      this.handleDataChanged();
    });
   }

  _handleChangeTitle(e) {
    this.setState({title: e.target.value}, function() {
      this.handleDataChanged();
    });
  }
  _handleChangeStartVideo(e) {
    var startTime = e.target.value
    this.setState({startTime: startTime}, function() {
      this.handleDataChanged();
    });
  }

  _handleChangeEndVideo(e) {
    var endTime = e.target.value
    this.setState({endTime: endTime}, function() {
      this.handleDataChanged();
    });
  }

  _handleSubmit() {
    this.props.onWordSubmit({
      youtubeId: this.state.youtubeId,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      title: this.state.title
    });

    this.setState({
      youtubeUrl: "",
      youtubeId: "",
      startTime: null,
      endTime: null,
      title: ""
    });
  }
}

export default WordForm

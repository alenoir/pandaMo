import React from 'react'

import mui from 'material-ui'

let ThemeManager = new mui.Styles.ThemeManager();
let Card = mui.Card,
    CardMedia = mui.CardMedia,
    CardHeader = mui.CardHeader,
    CardTitle = mui.CardTitle;

var ReactPropTypes = React.PropTypes;

class WordListItem extends React.Component {
    constructor(props) {
        super(props);
        //set the state as a property on the class
        this.state = {
          word: props.word
        };
    }

    componentWillMount() {
        //executes when the component is about to mount onto DOM
    }

    componentWillUnmount() {
        //executes when the component is about to unmount from DOM
    }

    render() {
      var word = this.state.word;
      return (
        <li className="col-md-4">
          <Card>
            <CardTitle title={word.get('title')}/>
            <CardMedia>
              <iframe width="420" height="315" src={this.constructYoutubeUrl(word.get('youtubeId'), word.get('startTime'), word.get('endTime'))} frameBorder="0" allowfullscreen></iframe>
            </CardMedia>

          </Card>
        </li>
      );
    }

    constructYoutubeUrl(id, start=0, end=10) {
      var youtubeUrl = "https://www.youtube.com/v/" + id + "?start=" + start + "&end=" + end + "";
      return youtubeUrl;
    }
}

export default WordListItem

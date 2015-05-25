/**
 * This file is provided by Facebook for testing and evaluation purposes
 * only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React from 'react'
import {Parse} from 'parse'
import WordList from './WordList.react.jsx'
import Login from './Login.react.jsx'
import ProfileActions from '../actions/ProfileActions.jsx'
import ProfileStore from '../stores/ProfileStore.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    //set the state as a property on the class
    this.state = {
      user: Parse.User.current()
    };
  }

  componentWillMount() {
    ProfileStore.addChangeListener(this.profileChange.bind(this));
  }

  componentWillUnmount() {
    ProfileStore.removeChangeListener(this.profileChange.bind(this));
  }

  profileChange() {
    this.setState({
      user: Parse.User.current()
    });
  }

  logout() {
    Parse.User.logOut()
    ProfileActions.logout()
  }

  render() {
    if (this.state.user) {
      return (
        <div>
          <button onClick={this.logout}>
            Logout
          </button>

          <WordList></WordList>
        </div>
      );
    } else {
      return (
        <Login />
      );
    }
  }
}

export default App

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

class Login extends React.Component {
  constructor(props) {
    super(props);
    //set the state as a property on the class
    this.state = {};
  }

  componentWillMount() {
      //executes when the component is about to mount onto DOM
  }

  componentWillUnmount() {
      //executes when the component is about to unmount from DOM
  }

  customMethod() {
    //force a re-render by changing the state
    this.setState({})
  }

  render() {
    return (
      <div className="login">
        Login button
      </div>
    );
  }
}

export default Login

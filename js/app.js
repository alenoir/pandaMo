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

// This file bootstraps the entire application.

var App = require('./components/App.react');
var React = require('react');
var Parse = require('parse').Parse;

window.React = React; // export for http://fb.me/react-devtools

Parse.initialize("MqUfuZFItBwGT01dFImQZjZPQMgCNty8qqrvqeMd", "Hxu5mvSHC22Ba5bvQNaIGZFHRQvSnwWQ4ICFt5BO");

React.render(
    <App />,
    document.getElementById('react')
);

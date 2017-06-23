import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    render() {
        var createReactClass = require('create-react-class');

        var i = 1;
        var myInnerStyle = {
            fontSize: 20,
            color: '#0000FF',
        };
        var list = [<li>foo</li>, <li>bar</li>,];

        // HelloMessage Component
        var HelloMessage = createReactClass({
            getDefaultProps: function () {
                return {
                    name: "World"
                };
            },
            render: function () {
                return <h1>Hello {this.props.name}!</h1>;
            }
        });

        // WebSite Component
        var WebSite = createReactClass({
            getInitialState: function () {
                return {
                    name: "React Tutorial",
                    site: "https://facebook.github.io/react/tutorial/tutorial.html"
                };
            },
            render: function () {
                return (
                    <div>
                        <Name name={this.state.name}/>
                        <Link site={this.state.site}/>
                    </div>
                );
            }
        });

        var Name = createReactClass({
            render: function () {
                return (
                    <h1>{this.props.name}</h1>
                );
            }
        });

        var Link = createReactClass({
            render: function () {
                return (
                    <a href={this.props.site}>
                        {this.props.site}
                    </a>
                );
            }
        });

        var LikeButton = createReactClass({
            getInitialState: function () {
                return {liked: false};
            },
            handleClick: function (event) {
                this.setState({liked: !this.state.liked});
            },
            render: function () {
                var text = this.state.liked ? '赞' : '踩';
                return (
                    <p onClick={this.handleClick}>
                        {text}
                    </p>
                );
            }
        });

        var MyTitle = createReactClass({
            propTypes: {
                title: PropTypes.string.isRequired,
            },
            render: function () {
                return <h1>{this.props.title}</h1>;
            }
        });

        var Counter = createReactClass({
            getInitialState: function () {
                return {
                    count: 0
                };
            },
            handleClick: function () {
                this.setState(function (state) {
                    return {
                        count: state.count + 1
                    }
                });
            },
            render: function () {
                return (
                    <div onClick={this.handleClick}>
                        Click! count: {this.state.count}
                    </div>
                );
            }
        });

        var Hello = createReactClass({
            getInitialState: function () {
                return {
                    opacity: 0.1,
                    direct: -1
                };
            },
            componentDidMount: function () {
                this.timer = setInterval(function () {
                    var opacity = this.state.opacity;
                    var direct = this.state.direct;
                    if (opacity < .1 || opacity > .9) {
                        direct *= -1;
                    }
                    opacity = opacity + direct * .05;
                    this.setState({
                        opacity: opacity,
                        direct: direct
                    });
                }.bind(this), 100);
            },
            render: function () {
                return (
                    <div style={{opacity: this.state.opacity}}>
                        Hello {this.props.name}
                    </div>
                );
            }
        });

        var Content = createReactClass({
            render: function () {
                return (
                    <div>
                        <input type="text" value={this.props.value} onChange={this.props.handleChange} />
                        <div>{this.props.value}</div>
                    </div>
                );
            }
        });
        var InputShow = createReactClass({
            getInitialState: function () {
                return {
                    value: 'Nothing to say!'
                };
            },
            handleChange: function (event) {
                this.setState({
                    value: event.target.value
                });
            },
            render: function () {
                var value = this.state.value;
                return (
                    <div>
                        <Content value={value} handleChange={this.handleChange} />
                    </div>
                );
            }
        });

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>React lol</h2>
                </div>
                <p data-custAttribute="someValue">Amazing JavaScript Library</p>
                <div style={myInnerStyle}>
                    1 + 1 = {1 + 1}
                </div>
                <div>
                    {/* JSX 注释：conditional */}
                    i = 1 ? {i === 1 ? 'True' : 'False'}
                </div>
                <ul>
                    {list}
                </ul>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <HelloMessage />
                    <WebSite />
                    <LikeButton/>
                </p>
                <div>
                    <MyTitle title="123"/>
                    <Counter />
                    <Hello />
                    <InputShow />
                </div>
            </div>
        );
    }
}

export default App;

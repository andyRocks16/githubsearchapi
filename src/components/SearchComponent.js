import React from 'react';
import ReactDOM from 'react-dom';
import ResultComponent from './ResultComponent.js';

export default class SearchComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noofpages: 1
        }
    }

    searchGithub() {
        var query = ReactDOM.findDOMNode(this.refs.searchQuery).value;
        this.setState({ searchQuery: query }, function () {
            this.search();
        });
    }
    search() {
        this.props.fetchData('https://api.github.com/search/repositories?q=' + this.state.searchQuery + "&page=" + this.state.noofpages);
    }

    gotonext() {
        this.setState({ noofpages: this.state.noofpages + 1 }, function () {
            this.search();
        });
    }

    gotoprevious() {
         this.setState({ noofpages: this.state.noofpages - 1 }, function () {
            this.search();
        });
    }

    sortData(){
        var sortQuery = ReactDOM.findDOMNode(this.refs.sortQuery).value;
        this.props.sortData(sortQuery, this.props.items);
    }

    render() {
        return (
            <div>
                <div>
                    <form>
                        <div className="form-group col-7 offset-2 formInput">
                            <input type="text" className="form-control" ref="searchQuery" id="searchQuery" placeholder="SEARCH....." />
                        </div>
                        <button type="button" className="btn btn-default" onClick={this.searchGithub.bind(this)}>Search</button>
                    </form>
                </div>
                <hr />
                <div>
                    <form >
                        <div className="form-group col-7 offset-2 formInput">
                            <select className="form-control" ref="sortQuery" >
                                <option value="">SORT BY</option>
                                <option value="WATCH">WATCH</option>
                                <option value="FORKS">FORKS</option>
                                <option value="NAME">NAME</option>
                                <option value="LANG">LANGUAGE</option>
                                <option value="OI">OPEN ISSUES</option>                                
                            </select>
                        </div>
                        <button type="button" className="btn btn-default" onClick={this.sortData.bind(this)}>Sort</button>
                    </form>
                </div>

                <hr />

                <div className="results">
                    <ResultComponent {...this.props} />
                </div>
                <div>
                    <h4 className="float-right"><a onClick={this.gotonext.bind(this)}>NEXT</a></h4>
                    <h4 className="float-left"><a onClick={this.gotoprevious.bind(this)}>PREVIOUS</a></h4>
                </div>
            </div>
        )
    }
}
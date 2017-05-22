import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class ResultComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    fetchContributors(url) {
        this.props.fetchContributors(url);
    }

    render() {
        var results;
        var $this = this;
        /*if (typeof this.props.items == "undefined") {
            results = <div>
                <center>
                    <h1>
                        NO DATA TO DISPLAY
                        </h1>
                </center>
            </div>
        }
        else */
        if (typeof this.props.items !== "undefined" && (this.props.items.length > 0 || this.props.items.length == undefined)) {
            results = this.props.items.map(function (item) {
                return (
                    <div key={item.id}>
                        <div >
                            <Link to={`/details/${item.id}`}>
                                <h3 className="results" onClick={$this.fetchContributors.bind($this,item.contributors_url)}>{item.full_name}</h3>
                            </Link>
                            <div>
                                <p>{item.description}</p>
                                <pre>WATCHERS: {item.watchers_count}   ISSUES: {item.open_issues_count}  FORKS: {item.forks_count}  LANGUAGE: {item.language}</pre>
                            </div>
                        </div>
                        <hr />
                    </div>
                )
            })
        }
        return (
            <div>
                {results}
            </div>
        )
    }
}
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class DetailsComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var id = this.props.params.item;
        var displayItem = null;
        var contributors = null;
        if (typeof this.props.items !== "undefined" && (this.props.items.length > 0 || this.props.items.length == undefined)) {
            this.props.items.map(function (item) {
                if (item.id == id) {

                    displayItem = item;
                }
            });

            if (typeof this.props.contributors !== "undefined" && (this.props.contributors.length > 0 || this.props.contributors.length == undefined)) {
                contributors = this.props.contributors.map(function (item) {
                    return (<div className="bg-info results contributors ">
                        <img src={item.avatar_url} className="img-circle" width="30" height="23" />
                        <p>{item.login}</p>
                    </div>)
                });
            }
            return (
                <center>
                    <div>
                        {(displayItem != null) ?
                            <div>
                                <div>
                                    <div>
                                        <img src={displayItem.owner.avatar_url} className="img-circle" width="304" height="236" />
                                    </div>
                                    <h3 className="results">{displayItem.full_name}</h3>
                                    <div>
                                        <p>{displayItem.description}</p>
                                        <pre>WATCHERS: {displayItem.watchers_count}   ISSUES: {displayItem.open_issues_count}  FORKS: {displayItem.forks_count}  LANGUAGE: {displayItem.language}  SIZE: {displayItem.size}  URL: <a href={displayItem.html_url} target="_blank">{displayItem.html_url}</a> </pre>
                                        <div className="bg-info">
                                            {
                                                contributors
                                            }
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            : null}
                        <Link to={`/`}>
                            <button className="btn btn-warning">BACK</button>
                        </Link>
                    </div>
                </center>
            )
        }
    }
}  
import React from "react";


class GitHubRep extends React.Component
{
    constructor(props)
    {
        super(props)
        console.log(this.props)
    }
    render()
    {
        return(
            <React.Fragment>
                <div className="card">
                    <div className="card-header bg-light text-white">
                        <h3>GitHub Repos</h3>

                    </div>
                    <div className="card-body">
                        <ul className="list-group"> 
                        {
                            this.props.repose.map((repo)=>
                            {
                                return(
                                    <li className="list-group-item">
                                        <a href={repo.html_url}>{repo.name}</a>
                                        <span className="badge badge-danger mx-5">{repo.stargazers_count}start</span>
                                        <span className="badge badge-success mx-5">{repo.watchers_count}watch</span>

                                    </li>
                                )
                            })
                        }

                        </ul>
                        

                    </div>

                </div>
            </React.Fragment>
        )
    }
}
 export default GitHubRep;
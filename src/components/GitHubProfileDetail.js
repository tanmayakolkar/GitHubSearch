import React  from "react";


class GitHubProfileDetail extends React.Component
{
    render()
    {
        let{followers,following,public_repos,public_gists,login,id,email,blog,created_at,html_url}=this.props.profile
        return(
            <React.Fragment>
                <div className="card">
                    <div className="card-header bg-light">
                        <span className="badge badge-primary">{followers}Follower</span>
                        <span className="badge badge-success">repose</span>
                        <span className="badge badge-warning">Gists</span>
                        <span className="badge badge-danger">Following</span>

                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                User Name:{login}
                            </li>
                            <li className="list-group-item">
                                id:{id}
                            </li>
                            <li className="list-group-item">
                                public_gists:{public_gists}
                            </li>
                            <li className="list-group-item">
                                public_repos:{public_repos}
                            </li>
                            <li className="list-group-item">
                                followers:{followers}
                            </li>
                            <li className="list-group-item">
                                following:{following}
                            </li>
                             
                        </ul>

                    </div>

                </div>
            </React.Fragment>
        )
    }
}
export default GitHubProfileDetail
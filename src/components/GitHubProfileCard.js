import React from "react";
class GitHubProfileCard  extends React.Component
{
    constructor(props)
    {
        super(props)
       
    }
    render()
    {

        let {login,avatar_url,html_url,bio}=this.props.profile
        return(
        

            <React.Fragment>
            
             <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <h1>card</h1>
                                   <img  src={avatar_url} alt=""  className="img-fluid"/>
                                
                                   
                                <div className="card-body">
                                    <p>{login}</p>
                                    <p>{bio}</p>
                                    <a href={html_url} target="_blank" className="btn btn-sm btn-primary" >click</a>
                                    
                                </div>
                            </div>
                    </div>
                </div>
            </div>
                </section>
            </React.Fragment>
        )
    }
}
export default GitHubProfileCard
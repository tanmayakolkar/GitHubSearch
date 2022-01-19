import React from "react";
import GitHubProfileCard from "./GitHubProfileCard";
import GitHubProfileDetail from "./GitHubProfileDetail";


class GitHubProfile extends React.Component
{
    constructor(props)
    {
        super(props)
        console.log("hello")
        console.log(this.props)
        
    }
    render()
    {
        return(
            <React.Fragment>
                <section>
                   <div className="container">
                       <div className="row">
                           <div className="col-md-3">
                               {

                                   Object.keys(this.props).length !==0 ?
                                     <GitHubProfileCard profile={this.props.profile}/>:null
                               }
                         </div>
                           <div className="col-md-9">
                               {
                                   Object.keys(this.props).length!==0 ?
                                     <GitHubProfileDetail profile={this.props.profile}/>:null
                               }
                               
                            </div>

                       </div>

                   </div>
                </section>
            </React.Fragment>
        )
    }
}
export default GitHubProfile
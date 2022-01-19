import React from "react";
import GitHubProfile from "./GitHubProfile";
import Axios from "axios";
import { clientId, clientSecrate } from "./GitHubCredantial";
import GitHubRep from "./GitHubRep";



class GitHubApi extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            username:"",
            profile:null,
            repose:null
        }
    }

    updateInput=(event)=>
    {
        this.setState(

            {
                ...this.state,
                username:event.target.value
            }
        )
    }
     searchUser=(event)=>
     {
         event.preventDefault();
         this.searchProfile()
         this.searchRepo()
     }
     searchProfile=()=>
     {
         Axios.get(`https://api.github.com/users/${this.state.username}?clientId=${clientId}&clientsecrate=${clientSecrate}`).
         then((response)=>
         {
             this.setState(
                 {
                     profile:response.data

                 }
                 
             )
           
            

         }).
         catch((error)=>
         {
              console.log(error)
              console.log("this line is  use for message")
         })
         
     }
     searchRepo=()=>
     {
        Axios.get(`https://api.github.com/users/${this.state.username}/repos?clientId=${clientId}&clientsecrate=${clientSecrate}`).
        then((response)=>
        {
            this.setState(
                {
                    repose:response.data

                }
                
            )
            console.log(this.state.repose)
           

        }).
        catch((error)=>
        {
             console.log(error)
        })

     }
    render()
    {
       
        return(
            
            <React.Fragment>
                  <pre>{JSON.stringify(this.state)}</pre>
                <section>
                   <div className="container mt-4"> 
                      <div className="row">
                          <div className="col">
                              <div className="card">
                                  <div className="card-header bg-primary text-white ">
                                      <p>GitHub User Search</p>
                                    </div>
                                    <div className="card-body">
                                        <form className="form-inline" onSubmit={this.searchUser}>
                                            <div className="form-group">

                                            <input
                                            value={this.state.username}
                                            onChange={this.updateInput}
                                             type="text" size="40"  className="form-control" placeholder="username"/>
                                            </div>
                                            <div>
                                                <input type="submit" value="search" className="btn btn-sm btn-primary"/>
                                            </div>
                                        </form>

                                    </div>
                            </div>
                        </div>
                    </div>
                    </div>                    
                </section>

                <section>
                  <div className="container mt-3">
                      <div className="row">
                          <div className="col">
                              {
                                  this.state.profile ?
                                  <GitHubProfile profile={this.state.profile}/>:null

                              }

                              
                             

                          </div>

                      </div>

                  </div>
                </section>
                <div className="container mt-3">
                      <div className="row">
                          <div className="col">
                              {
                                  this.state.repose ?
                                  <GitHubRep repose={this.state.repose}/>:null

                              }

                              
                             

                          </div>

                      </div>

                  </div>
            </React.Fragment>
        )
    }
}


export default GitHubApi;
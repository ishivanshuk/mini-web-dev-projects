import React from 'react'
import { FcApproval } from "react-icons/fc";

const githubUsers = ({users}) => {
    console.log(users);
    return (
        <div>
            <h2>List of GitHub Users</h2>
            <div className="container-fluid mt-5">
                <table>
                    <thead>
                    <th>Profile Image</th>
                    <th>User Info</th>
                    </thead>
                    <tbody>
                     {   users.map((text,key) => {
                      
                        return (
                            <tr>
                            <td> <img src={ text.avatar_url } className="rounded" width="155" /> </td> 
                                  
                        <td><h4 className="mb-0 mt-0 textLeft">{text.login} <FcApproval/> <a href={text.html_url}>   Go to profile  </a> </h4> </td>
                        </tr>
                      )
                    
                })  
            }      
                </tbody> 
                </table>
                                 
                
            </div>
        </div>
    )
}

export default githubUsers

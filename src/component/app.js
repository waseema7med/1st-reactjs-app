import React  from "react";
import { Details } from "./ditails";
import {Contact} from "./contact"
export class App extends React.Component{

    render ()
    {
    return (

      <React.Fragment>

     
      <Details name= "Waseem" age="33" />
      <Contact phone= "0123456" email="waseem@mail.com" />
     
      </React.Fragment>
 )
    }
}

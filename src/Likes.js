// //классовые компоненты
// import{Component} from 'react';
// export class Likes extends Component{
// constructor(){
//     super()

//     this.state = {
//         likes:0
//     }
// }
// updateLikes(){
//     this.setState({likes:this.state.likes +1})
// }
// render(){
//     return(
//         <div>
//             <h1>{this.state.likes} likes</h1>
//             <button onClick={()=>this.updateLikes()}>Like</button>
//         </div>
//     )
// }

// }

//Убираем лайки

// import { Component } from "react";
// export class Likes extends Component{
//     constructor(){
//         super();
//         this.state={
//             likes: 300
//         }
//     }
//     updateLikes(){
//         this.setState({likes: this.state.likes -1 })
//     }
// render(){
//     return(
//     <div>
//         <h1>{this.state.likes} Likes</h1>
//         <button onClick={()=> this.updateLikes()}>Like</button>
//     </div>
//     )
// }
    
// } 

//Изменяем слово при нажатии на кнопку

import { Component } from "react";

export class Likes extends Component{
    constructor(){
        super();
this.state={
    name: 'Leopold',
    age: 24
}
    }
updateName(){
    this.setState({name: 'Nick', age: 35})
}
render(){
    return(
        <div>
        <h1>Hello {this.state.name}</h1>
        <p>{this.state.age} years old</p>
        <button onClick={()=> this.updateName()}>Click</button>
    
        </div>
    )
}
}

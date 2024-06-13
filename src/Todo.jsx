import React, {Component} from "react"
import Box1 from './components/Box1';
import Box2 from './components/Box2'


class Todo extends Component{
 constructor(props){
    super(props)
  this.state = {arr1:[],arr2:[],arr1Inp:"", arr2Inp:""}

   
    

 }

 chainArr1 = ()=>{

   this.setState({arr1:[...this.state.arr1, {arr1Inp:this.state.arr1Inp}]})
   this.setState({arr1Inp: ""})
   // this.setState({value1:""})
   // console.log(this.state.arr1)
 }
 chainArr1Inp = (e)=>{
   //  console.log(e.target.value)
    this.setState({arr1Inp: e.target.value})
   
 }

 shift1 = (index)=>{
 

   let match = this.state.arr1.filter((item,itemIndex)=> index !== itemIndex)
   this.setState({arr2:[...this.state.arr2, {arr2Inp:this.state.arr1[index].arr1Inp}]});
   this.setState({arr1:match})
   
 }
  
//  for box2 

 chainArr2=()=>{
   
   this.setState({arr2:[...this.state.arr2, {arr2Inp:this.state.arr2Inp}]})
   this.setState({arr2Inp: ""})
 }
 chainArr2Inp = (e)=>{
   console.log(e.target.value)
   this.setState({arr2Inp: e.target.value})

}

shift2 = (index)=>{
 

   let match = this.state.arr2.filter((item,itemIndex)=> index !== itemIndex)
   this.setState({arr1:[...this.state.arr1, {arr1Inp:this.state.arr2[index].arr2Inp}]});
   this.setState({arr2:match})
 }

 render(){
    return(
        <div>
    <h1  className='mb-5'> task shifting on shift click</h1>

    <div className=' w-full  flex items-center justify-center gap-11'>


   <Box1 chainArr1={this.chainArr1} chainArr1Inp={this.chainArr1Inp} arr1={this.state.arr1} shift1={this.shift1} arr1Inp={this.state.arr1Inp}/>
   <Box2 chainArr2={this.chainArr2} chainArr2Inp={this.chainArr2Inp} arr2={this.state.arr2} shift2={this.shift2} arr2Inp = {this.state.arr2Inp} />

        </div>
        </div>
        

    )
 }
}

export default Todo;
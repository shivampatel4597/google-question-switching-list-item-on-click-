import React, {Component} from 'react';

class Box1 extends Component{
constructor(props){ 
    super(props)
        this.state = {arr:[],input:""};
    
   }

 
  render(){
    const { chainArr1, chainArr1Inp ,arr1, shift1 ,arr1Inp} = this.props
    // console.log("arr1 is ", arr1)
    return(
       <div className=' box1 flex flex-col items-center gap-4 w-[500px] h-[70vh] border-2 border-black'>
        <div>

         <input type='text' onChange={(e)=>chainArr1Inp(e)} value={arr1Inp}  className='border-2 border-black mt-6 w-[80%]'/>
          <button onClick={chainArr1} className=' ml-1 px-3 cursor-pointer bg-green-300 border-2 border-red-500'>Add</button>
        </div>
         <div className='w-[90%] h-[50vh] border-2 border-blue-600'>
       
       {
        arr1 && arr1.map((list, listIndex)=>{ 
          return<ul>
    <div className='flex w-full '>
     
    <li  key={listIndex} >  <div className='w-full flex items-center justify-between  border-2 border-red-500'>
    <p>{list.arr1Inp}</p>
    <button onClick={()=>shift1(listIndex)} className='cursor-pointer mx-2 border-2 bg-green-300 border-red-500 '>shift</button>
    
    </div>
    </li>
   
    
    </div>

</ul>
        })
       }
         </div>
       </div>


    )
  }
}



export default Box1
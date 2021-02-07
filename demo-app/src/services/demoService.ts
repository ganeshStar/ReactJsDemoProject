export const sleep = (ms:number) =>{
    return new Promise(resolve => setTimeout(resolve, ms))
}  

export const getone=(_: any)=>{
    return sleep(1000).then((v)=>1);
}
export const getTwo = (_: any) => {
    return sleep(1000).then(v => 2)
  }
  
 export const getThree = (_: any) => {
    return sleep(1000).then(v => 3)
  }
//implementation of Array.prototype.map function

Array.prototype.newMap = function(cb) {
  
  var output = [];
  //this points to the array on which the newMap function  is invoked
  
  for(var i=0; i<this.length; i++){
    
    //check if there item is present in the array
      if(this.indexOf(this[i]) > -1){
        output[i] = cb(this[i], i, this)
      }
  }
  
  return output; // return the new array
}





//****** usage ****//

const input = [0,1,2,3,4,5,6,7]

const output =  input.newMap((item, index, thisArray)=> {
  return item *2;
});


//output-> [0, 2, 4, 6, 8, 10, 12, 14]




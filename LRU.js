function LRUCache(strArr = ["A", "B", "C", "D", "A", "E", "D", "Z"]) { 

    // code goes here  
  
    // sample input ["A", "B", "C", "D", "A", "E", "D", "Z"]
    // we should expect output [C-A-E-D-Z]
  
    let LRU = [];
  
    strArr.forEach ( (item) => {
          //check if the item already exists 
          const idx = LRU.indexOf(item);
          if( idx !== -1 ) {
            //get indexof the item that already exists and remove it from there
            LRU.splice(idx,1);
          }
  
          // add it to the end
          if(LRU.length === 5 ) {
            LRU.splice(0,1);
          }

          LRU.push(item);
          
    })
  
    console.log('LRU', LRU);
  
    // traverse through the array and add item to the end, if it doesn't already exist.
    // if it does exist then add to the end and remove it from its original position
  
    // last step array.join("-")
    return strArr; 
  
  }

  LRUCache(["A", "B", "C", "D", "A", "E", "D", "Z"]);
  // keep this function call here 
  // @ts-ignore
  // console.log(LRUCache(readline()));
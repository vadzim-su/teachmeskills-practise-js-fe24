// Exercise 02: Return the most frequent item in the array

const mostFrequent = (array) => {
  let max = 0
  let ans = null
if(array.length === 0) return null
  let map = new Map()
  array.forEach(item =>{
    if(map.has(item)){
      map.set(item, map.get(item)+1)
    }
    else {
      map.set(item, 1)
    }
  })

  for(let [key, value] of map){
    if(value>max){
      max = value
      ans = key
    }
    else {
      return ans
    }
  }

};

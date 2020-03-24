// Exercise 01: Filter unique array members

const unique = (members) => {
  let set = new Set()
  members.forEach(item => {
    set.add(item)
  })

let result =[]
for(let item of set){
  result.push(item)
}

return result

};





function addItem(node, index, val){
  let current = node
  let prev = node
  let currentIndex = 0

  while(current.next !== null){
    prev = current
    current = current.next
      if (currentIndex === index){
        prev.next = {
          val,
          next: current
        }
      }

      currentIndex++
  }
}
// hints!
// 1. find the element in index.html that you want to copy
// 2. select it somehow (by class . or id #)
// 3. google 'jquery copy element'
// 4. copy the element and add the new element to the element list (google 'jquery add element to div')
// 5. how do you repeat this multiple times, for multiple colors??? There is a nice data structure for this kind of thing.

var elementsList = $("#elements-list")
var a = ["#fc7814", "#ff9d00", "#ffe20c", "#e2ff0c", "#81ff0c", "#29ff0c", "#0cff89", "#0cfff6", "#0ccaff", "#0c69ff","#0c10ff", "#590cff", "#9e0cff", "#da0cff"]

var b = ["#ff0cb6", "#fc1414", "#fc7814", "#ff9d00", "#ffe20c", "#e2ff0c", "#81ff0c", "#29ff0c", "#0cff89", "#0cfff6", "#0ccaff", "#0c69ff","#0c10ff", "#590cff"]

var c = ["#9e0cff", "#da0cff"]

a.forEach(function(color){
  $("#element").clone().css({background: color}).appendTo(elementsList)
})

b.forEach(function(color){
  $("#element").clone().css({background: color}).appendTo(elementsList)
})

c.forEach(function(color){
  $("#element").clone().css({background: color}).appendTo(elementsList)
})

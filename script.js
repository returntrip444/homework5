var date = moment().format("MM DD YYYY")
$("#currentDay").text(date)

$(".submitEvent").on("click",function(event) {
    event.preventDefault()
    console.log("hello")
     var text = $(this).parent().siblings(".col-8").children("textarea").val()
     var time = $(this).parent().siblings(".col-8").children("textarea").attr("id")
    //  var content = {
    //      text: text, time: time
    //  }
     localStorage.setItem(time, text)
    console.log(localStorage)
    console.log(text)

})



function getItems() {
    var numbers = Object.keys(localStorage)
    for (var i = 0; i < numbers.length; i++ ) {
        $("#"+ numbers[i]).val(localStorage.getItem(numbers[i]))
    }
} 
getItems()

var person = {
    name: "daniel", 
    eyeColor: "brown"

}

Object.keys(person)
console.log(Object.keys(person))


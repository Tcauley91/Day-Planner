$("#currentDay").text(moment().format("dddd, MMMM Do"));

// hour variables

var hour = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

// add AM/PM to times

// for each function to loop and set elements/classes/attributes.
hour.forEach(function(time){
    var text = $("<textarea>").attr("dataStorage", time);
    var btn = $("<button>").addClass("saveBtn fas fa-save");
    var row = $("<div>").addClass("row");
    var hours = $("<div>").addClass("hour");
    // parses hour array 
    let any = parseInt(time);
    
    // append each variable

      row.append(hours, text, btn);

    // appending the row to the provided container class

    $(".container").append(row);

    // checking if time is greater or less than 12 and setting AM/PM

    if(any < 12){
        hours.text(time + "am");
    
    }else if(any > 12){
        hours.text(time - 12 + "pm");

    }else{
        
    hours.text(time + "pm");

    }

});

    // will not perform any functions until entire page is loaded.

$(document).ready( () => {
    
    // button to save to local storage on click - .prev selects the previous index of the button which is the textarea in this case.

    $(".saveBtn").on("click", function(){
        localStorage.setItem($(this).prev("textarea").attr("dataStorage"),$(this).prev("textarea").val());
    });

    // "*" means grab all within the data attr and return from local storage.

    $("*[dataStorage]").each(function(){
        $(this).val(localStorage.getItem($(this).attr("dataStorage"))
    )});

});

    var newDate = new Date()
    var newHour = newDate.getHours();
    console.log(newHour);

    $("*[dataStorage").each(function(){
        if (parseInt($(this).attr("dataStorage")) === newHour){

            $(this).addClass("present").removeClass("past future");

        }else if(parseInt($(this).attr("dataStorage")) < newHour){
            $(this).addClass("past").removeClass("present future");

        }else{
            $(this).addClass("future").removeClass("past present");
        };
        
    });

    console.log(parseInt("dataStorage"));
    console.log(newHour);
    
  

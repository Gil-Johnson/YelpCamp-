var  mongoose = require("mongoose"),
     Campground = require("./models/campground"),
     Comment = require("./models/comment")
     
     var data = [
         {name: "Clouds Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYG3nwFNTXbKAmznUh5JkVl9UARtmKNb5HRnahvZUsoNwx56UNDg", description: "des place holder"},
         {name: "Goats Peak", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBffclXneW4-OexG2F65s7ocabirXEBcwm1Boe7mmRseWU1RjZ9Q", description: "des place holder for gaots"},,
         {name: "Hillbilly haven", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-0GhWFQ6pjK0ibF-Ywqfr7IPZxjwi_ScGIM0L0zN-sTI7FFY", description: "hill billys"},
         ]
 
function seedDB(){
    // remove all campgrounds 
    Campground.remove({}, function(err){
    if(err){
        console.log(err);
    }
    console.log("removed campgrounds");
    //add campgrounds
 data.forEach(function(seed){
     Campground.create(seed, function(err, campground){
         if (err){
             console.log(err);
         }else{
             console.log('added a campground');
             // create a comment on each comment ground
             Comment.create(
                 {
                     text: "this place sucks",
                     author : "Homer"
                     
                 }, function(err, comment){
                     campground.comments.push(comment);
                     campground.save();
                     console.log("created new comment");
                 }
                 )
         }
     })
 });
});

}
 
 module.exports = seedDB;
    
     
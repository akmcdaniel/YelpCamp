var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");
    
var data = [
    {
        name: "Cloud's Rest",
        image: "https://cdn.pixabay.com/photo/2017/01/18/21/34/cyprus-1990939_960_720.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus nisi, vulputate in nibh nec, interdum pulvinar sapien. Pellentesque bibendum, eros et semper interdum, mi leo varius quam, ut iaculis metus odio ut ex. Donec blandit magna quis nulla commodo, a sollicitudin massa posuere. Morbi vel elit et leo euismod porta ut sed ante. Maecenas sagittis odio et convallis finibus. Maecenas sit amet efficitur est. Nulla in suscipit nibh, a consequat ante. Vivamus suscipit libero quis interdum pharetra. Nunc in sagittis diam, in aliquam neque. Cras in facilisis felis, non egestas lorem. Pellentesque fringilla ullamcorper tortor ut laoreet. Vivamus gravida nunc et luctus gravida. Duis id risus sapien. Morbi vestibulum fringilla nunc vel vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus."
    },
    {
        name: "Rocky Beach",
        image: "https://cdn.pixabay.com/photo/2016/04/18/21/19/cyprus-1337481_960_720.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus nisi, vulputate in nibh nec, interdum pulvinar sapien. Pellentesque bibendum, eros et semper interdum, mi leo varius quam, ut iaculis metus odio ut ex. Donec blandit magna quis nulla commodo, a sollicitudin massa posuere. Morbi vel elit et leo euismod porta ut sed ante. Maecenas sagittis odio et convallis finibus. Maecenas sit amet efficitur est. Nulla in suscipit nibh, a consequat ante. Vivamus suscipit libero quis interdum pharetra. Nunc in sagittis diam, in aliquam neque. Cras in facilisis felis, non egestas lorem. Pellentesque fringilla ullamcorper tortor ut laoreet. Vivamus gravida nunc et luctus gravida. Duis id risus sapien. Morbi vestibulum fringilla nunc vel vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus."
    },
    {
        name: "Water Hole",
        image: "https://cdn.pixabay.com/photo/2016/08/10/20/34/cyprus-1584242_960_720.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus nisi, vulputate in nibh nec, interdum pulvinar sapien. Pellentesque bibendum, eros et semper interdum, mi leo varius quam, ut iaculis metus odio ut ex. Donec blandit magna quis nulla commodo, a sollicitudin massa posuere. Morbi vel elit et leo euismod porta ut sed ante. Maecenas sagittis odio et convallis finibus. Maecenas sit amet efficitur est. Nulla in suscipit nibh, a consequat ante. Vivamus suscipit libero quis interdum pharetra. Nunc in sagittis diam, in aliquam neque. Cras in facilisis felis, non egestas lorem. Pellentesque fringilla ullamcorper tortor ut laoreet. Vivamus gravida nunc et luctus gravida. Duis id risus sapien. Morbi vestibulum fringilla nunc vel vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus."
    }
]
    
function seedDB (){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds");
        
        // //add a few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err);
        //         } else {
        //             console.log("added a campground");
        //             //create a comment
        //             Comment.create(
        //                 {
        //                     text: "This place is great but I wish there was internet",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                     }
        //                 });
        //         }
        //     });
        // });
    });
    
    
    //add a few comments
}

module.exports = seedDB;

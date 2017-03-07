var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middleware = require("../middleware");

// Index route
router.get("/", function(req, res){
    console.log(req.user);
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user});
        }
    });
});

// Create route
router.post("/", middleware.isLoggedIn, function(req, res){
   // get data from form and add to campgrounds array
   var name = req.body.name;
   var image = req.body.image;
   var cost = req.body.cost;
   var description = req.body.description;
   var author = {
       id: req.user._id,
       username: req.user.username
   };
   var newCampground = {
       name: name,
       image: image,
       cost: cost,
       description: description,
       author: author
   };
   
   Campground.create(newCampground, function(err, newlyCreated){
       if(err){
           console.log(err);
       } else {
           // redirect back to campgrounds page
           console.log(newlyCreated);
           res.redirect("/campgrounds");
       }
   });
});

// New route
router.get("/new", middleware.isLoggedIn, function(req, res) {
   res.render("campgrounds/new"); 
});

// Show route
router.get("/:id", function(req, res){
    // find campground with provided id
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       } else {
           console.log(foundCampground);
           //render show template with that campground
           res.render("campgrounds/show", {campground: foundCampground});
       }
    });
});

// Edit route
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/edit", {campground: foundCampground});
        };
    });
});

// Update route
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
   // find and update correct campgrounds
   Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, foundCampground) {
      if(err){
          console.log(err);
          res.redirect("/campgrounds");
      } else {
          res.redirect("/campgrounds/" + req.params.id);
      }
   });
});

// Destroy Route
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;
const DiscoverWorkout = require('../../models/home/discoverWorkout.js');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

exports.post = (req, res) => {
    console.log(req.file);
    if(!req.body) {
        res.status(400).send({
            message: "Body is empty"
        });
    }

    const discoverWorkout = new DiscoverWorkout({
        title : req.body.title,
        numOfExercises : req.body.numOfExercises,
        time : req.body.time,
        backgroundColor : req.body.backgroundColor,
        image : req.body.image
    });

    DiscoverWorkout.post(discoverWorkout, (err, data) => {
        if(err)
        res.status(500).send({
            message: err.message || "Some error occurred while creating new Post"
        });
        else res.send(data);
    });
}

exports.postMiddleware = upload.single('discoverWorkoutImage')
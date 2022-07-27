const DiscoverWorkout = require('../../models/home/discoverWorkout.js');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Math.floor(100000 + Math.random() * 900000) + '_' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error("Can't store this type of file, please use jpeg or png type of file."), false);
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});

exports.get = (req, res) => {
    DiscoverWorkout.get((err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.statusMessage = `Not found discover workouts`;
              res.status(404).send({
                message: `Not found discover workouts`
              });
            } else {
                res.statusMessage = "Error retrieving discover workouts"; 
              res.status(500).send({
                message: "Error retrieving discover workouts"
              });
            }
          } else res.send(data);
    })
}

exports.post = (req, res) => {
    if(!req.body) {
        res.statusMessage = "Body is empty";
        res.status(400).send({
            message: "Body is empty"
        });
    }

    const discoverWorkout = new DiscoverWorkout({
        title : req.body.title,
        numOfExercises : req.body.numOfExercises,
        time : req.body.time,
        backgroundColor : req.body.backgroundColor,
        image : req.file.path
    });

    DiscoverWorkout.post(discoverWorkout, (err, data) => {
        if(err){
            res.statusMessage = err.message || "Some error occurred while creating new Post"; 
            res.status(500).send({
                message: err.message || "Some error occurred while creating new Post"
            });
        }
        else res.send(data);
    });
}

exports.postMiddleware = upload.single('discoverWorkoutImage')
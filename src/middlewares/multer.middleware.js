import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) // yeah better option hai q e isme hr file ko unique name milega..
        // cb(null, file.fieldname + '-' + uniqueSuffix) productons code me io use kiya jata hai mostly... 
        cb(null, file.originalname) // waise yeah idea acha nahi hai q ke isme duplicates file bahut jayda hooo sakte hai...
    }
})

export const upload = multer({
    storage: storage })
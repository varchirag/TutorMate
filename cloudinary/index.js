const cloudinary=require('cloudinary').v2
const {CloudinaryStorage}=require('multer-storage-cloudinary')

cloudinary.config({
    cloud_name: "dzlgr7tmk",
    api_key: "695392425353449",
    api_secret: "_qSE3BPUuxNKAs__LmM0w_U1-Iw"
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'YelpCamp',
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
});

module.exports = {
    cloudinary,
    storage
}
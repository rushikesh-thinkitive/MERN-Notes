/*

1) when we pass form data into expressJS then we use body parser to take data into backend
   But it is unable to take files through body-parser therefore we use multer
   multer provides us file option in callback where file is passed as an argument and we 
   can access all metadata about file

   Ex-  const storage = multer.diskStorage({
            destination: function(req, file, cb) {
               cb(null, "uploads/");
            },
            filename: function(req, file, cb) {
               cb(null, Date.now() + '-' + file.originalname);
            }
         });

2) when we want to send file via form then we must need to include this attribute in form tag -
   > enctype="multipart/form-data"

3) app.post('/upload',upload.single('cartoonImage'),(req,res)=>{
    console.log(req.body)
    console.log(req.file)
})
   in this route, I have used upload.single() method through which only single image can upload and after
   uploading file callback will invoked

4) This process is enough to upload file, but uploaded file will be currupted, so to upload file without
   currupt we need to manage file on disk storage

5) How to restrict the file size in multer - 
   const express = require('express');
   const multer  = require('multer');

   const app = express();

   // Initialize Multer middleware with file size limit
   const upload = multer({
   dest: 'uploads/',
   limits: { fileSize: 1000000 } // 1 MB in bytes (1 MB = 1000000 bytes)
   });

   // Handle file uploads
   app.post('/upload', upload.single('file'), (req, res) => {
   // Access the uploaded file through req.file
   console.log(req.file);
   res.send('File uploaded successfully');
   });

   app.listen(3000, () => {
   console.log('Server is running on port 3000');
   });


6) Uploading multiple files by using multer - 
   1. To upload multiple files in expressJS, we use array()
   2. This method is used to handle multiple files with same field name
   
   Ex -
   const express = require('express');
   const multer  = require('multer');

   const app = express();

   // Initialize Multer middleware with file size limit
   const upload = multer({
   dest: 'uploads/',
   limits: { fileSize: 1000000 } // 1 MB in bytes (1 MB = 1000000 bytes)
   });

   // Handle multiple file uploads
   app.post('/upload', upload.array('files', 5), (req, res) => {
   // Access the uploaded files through req.files
   console.log(req.files);
   res.send('Files uploaded successfully');
   });

   app.listen(3000, () => {
   console.log('Server i   s running on port 3000');
   });


7) mimetype - 
   1. Refers to MIME type of the uploaded files. 
   2. MIME stands for Multipart internet mail extension
   3. MIME type is a standard way through which we can represent the extension of file which transfered
   over internet
   4. When a file is uploaded through a form then it's mimetype decides about the nature of data
      it contains

      image/jpeg      - jpeg for images
      application/pdf - pdf for document
      text/plain      - plain text for files
*/
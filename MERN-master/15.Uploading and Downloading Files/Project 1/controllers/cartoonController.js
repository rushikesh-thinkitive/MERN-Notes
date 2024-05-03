class cartoonController{
    static getCartoonForm = (req,res)=>{
        let form =  `<h1>Upload Cartoon Form</h1>
            <form action="/cartoon/upload" method="post" enctype="multipart/form-data">
                 <input type="file" name="cartoonImage"><br><br>
                 <input type="submit" value="Upload">
            </form>
        `
        res.send(form);
    }


}

module.exports = cartoonController;
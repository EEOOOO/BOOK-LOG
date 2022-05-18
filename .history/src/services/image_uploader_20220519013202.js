class ImageUploader{
    async upload(file){
        const formData = new FormData();

        formData.append("file", file);
        formData.append("upload_preset", "hufxjz8t");
    
        const result = await fetch(
            "https://api.cloudinary.com/v1_1/dc9t6azvl/image/upload", 
            {
            method: "POST",
            body: formData
            }
            );
        return await result.json();
    }
}

export default ImageUploader;
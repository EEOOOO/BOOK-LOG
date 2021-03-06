class ImageUploader{
    async upload(file){
        const formData = new FormData();

        formData.append("file", file);
        formData.append("upload_preset", "docs_upload_example_us_preset");
    
        fetch(url, {
        method: "POST",
        body: formData
        })
        .then((response) => {
            return response.json();
        })
        const result = await fetch(url, {
            method: "POST",
            body: formData
        });
        return await result.json();
    }
}

export default ImageUploader;
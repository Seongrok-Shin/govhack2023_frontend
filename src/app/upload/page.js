"use client";

import { uploadBytes, ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebaseConfig";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
export default function upload() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage, "images/")
    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url])
            })
        })
    };

    useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url]);
                })
            })
        })
    }, [])

    return (
        <div>
            <input type="file" onChange={(event) => { setImageUpload(event.target.files[0]) }} />
            <button onClick={uploadImage}>Upload Image</button>
            {imageList.map((url) => {
                return <img src={url} />
            })}
        </div>
    )
}

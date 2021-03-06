import React, { useEffect, useState } from "react";
import {
    Grid,
    Card,
    CardContent,
    Button,
    Box
} from '@material-ui/core';
import ImageUploader from 'react-images-upload';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    buttonUpload: {
        margin: "5 auto"
    },
    cardShadow: {
        boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.33)",
        margin: '0.5rem',
        maxHeight: "25rem",
        overflowY: "scroll"
    }
}));

export function ImageUploadComponent({ test }) {

    const classes = useStyles();
    const [ImageObject, setImageObject] = useState();

    function onDrop(picture, imageUrl) {
        var convertedString = imageUrl[0];
        var fields = convertedString.split(",");
        setImageObject(fields[1]);
    }

    async function UploadImage() {
        const token = sessionStorage.getItem("accessToken");

        var requestModel = {
            userName: sessionStorage.getItem("userName"),
            email: sessionStorage.getItem("email"),
            imageData: ImageObject,
            token: token
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(requestModel)
        };
        const response = await fetch(
            'http://localhost:5020/api/Image/ImageDataSave', requestOptions
        );
            
        const responseData = await response.json();

        if (responseData !== null) {
            alert("Image Uploaded Successfully")
        } else {
            alert("Error occured in image Upload")
        }
    }

    return (
        <div>
            <Card className={classes.cardShadow}>
                <CardContent>
                    <Box display="flex" justifyContent="flex-end">
                        <Button variant="contained" color="primary" className={classes.buttonUpload} onClick={UploadImage}>
                            Upload
                        </Button>
                    </Box>
                    <ImageUploader
                        withIcon={false}
                        singleImage={true}
                        withPreview={true}
                        buttonText='Upload Your Image'
                        onChange={onDrop}
                        // imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                    />
                </CardContent>
            </Card>
        </div>
    )
}
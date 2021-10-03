import React, { useEffect, useState } from "react";
import {
    Grid,
    Card,
    CardContent,
    Button,
    Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    buttonUpload: {
        margin: "5 auto"
    },
    cardShadow: {
        boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.33)",
        margin: '0.5rem'
    }
}));

export function FileUploaderComponent({ test }) {
    const classes = useStyles();
    const [PdfFile, setPdfFile] = useState(null)

    async function fileUpload(e) {
        var selectedFile = e.target.files[0]
        var fileToLoad = selectedFile;
        var fileReader = new FileReader();
        var base64;
        fileReader.onload = function (fileLoadedEvent) {
            base64 = fileLoadedEvent.target.result;
            var fields = base64.split(",");
      
            setPdfFile(fields[1]);
            // Print data in console
            console.log(base64);
        };
        fileReader.readAsDataURL(fileToLoad);

        await requestInitiate(base64);

    }

    async function requestInitiate(fileBase64) {
        const token = sessionStorage.getItem("accessToken");
       
      
        var requestModel = {
            userName: sessionStorage.getItem("userName"),
            email: sessionStorage.getItem("email"),
            fileData: PdfFile,
            token: token
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(requestModel)
        };
        const response = await fetch(
            'http://localhost:5020/api/File/FileDataSave', requestOptions
        );

        const responseData = await response.json();

        if (responseData !== null) {
            alert("File Uploaded Successfully")
        } else {
            alert("Error occured in image Upload")
        }
    }

    return (
        <div>
            <Card className={classes.cardShadow}>
                <CardContent>
                    <div style={{ width: '100%', float: 'left' }}>
                        {/* <h3>{PdfFile}</h3> */}
                         <br />
                    </div>
                    <input
                        type="file"
                        accept="application/pdf"
                        style={{ display: 'none' }}
                        id="contained-button-file"
                        onChange={(e) => fileUpload(e)}
                    />
                    <label htmlFor="contained-button-file">
                        <Box display="flex" justifyContent="flex-end">
                            <Button variant="contained" color="primary" component="span">
                                Choose
                            </Button>
                        </Box>
                    </label>
                </CardContent>
            </Card>
        </div>
    )
}
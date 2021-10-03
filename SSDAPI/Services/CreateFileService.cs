using Assignment2API.Models;
using Google.Apis.Drive.v3;
using SSDAPI.Models;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace SSDAPI.Services
{
    public class CreateFileService
    {
        public string UploadFile(ImageModel imageModel)
        {
            try
            {
               
                String FileName = imageModel.UserName + "_" + Guid.NewGuid() + ".png";

                string modifiedstream = Regex.Replace(imageModel.ImageData, @"^data:image\/[a-zA-Z]+;base64,", string.Empty);

                byte[] bytes = Convert.FromBase64String(modifiedstream);
                var requestID = "";
                using (Stream ms = new MemoryStream(bytes))
                {
                    DriveAccessService dv = new DriveAccessService();
                    DriveService service = dv.GetService(imageModel.Token,imageModel.Email);


                    var driveFile = new Google.Apis.Drive.v3.Data.File();
                    driveFile.Name = FileName;
                    driveFile.Description = "Upload By Admin";
                    driveFile.MimeType = "image/png";
                    driveFile.Parents = new string[] { "root" };


                    var request = service.Files.Create(driveFile, ms, "image/png");
                    request.Fields = "id";
                    requestID = "12";
                    var response = request.Upload();
                    if (response.Status != Google.Apis.Upload.UploadStatus.Completed)
                        throw response.Exception;
                }
                return requestID;
            }
            catch (Exception ex)
            {
                return "lol";
            }
        }

    }
}

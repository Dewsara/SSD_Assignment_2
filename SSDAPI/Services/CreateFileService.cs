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
                    DriveService service = dv.GetService(imageModel.Token, imageModel.Email);




                    var driveFile = new Google.Apis.Drive.v3.Data.File();
                    driveFile.Name = FileName;
                    driveFile.Description = "Upload By Admin";
                    driveFile.MimeType = "image/png";
                    driveFile.Parents = new string[] { "root" };

                  //  service.Pare.Get(fileId, folderId).Execute();

                    var request = service.Files.Create(driveFile, ms, "image/png");
                    request.Fields = "id";
                    requestID = "Success";
                    var response = request.Upload();
                    if (response.Status != Google.Apis.Upload.UploadStatus.Completed)
                        throw response.Exception;
                }
                return requestID;
            }
            catch (Exception ex)
            {
                return "Error";
            }
            
        }
        public string UploadUserFile(FileModel fileModel)
        {
            try
            {

                String FileName = fileModel.UserName + "_" + Guid.NewGuid() + ".png";

                string modifiedstream = Regex.Replace(fileModel.FileData, @"^data:image\/[a-zA-Z]+;base64,", string.Empty);

                byte[] bytes = Convert.FromBase64String(modifiedstream);
                var requestID = "";
                using (Stream ms = new MemoryStream(bytes))
                {
                    DriveAccessService dv = new DriveAccessService();
                    DriveService service = dv.GetService(fileModel.Token, fileModel.Email);

                    var driveFile = new Google.Apis.Drive.v3.Data.File();
                    driveFile.Name = FileName;
                    driveFile.Description = "Something";
                    driveFile.MimeType = "application/pdf";
                    driveFile.Parents = new string[] { "root" };

                    //  service.Pare.Get(fileId, folderId).Execute();

                    var request = service.Files.Create(driveFile, ms, "application/pdf");
                    request.Fields = "id";
                    requestID = "Success";
                    var response = request.Upload();
                    if (response.Status != Google.Apis.Upload.UploadStatus.Completed)
                        throw response.Exception;
                }
                return requestID;
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }
    }
}

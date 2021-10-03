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
               
                return requestID;
            }
            catch (Exception ex)
            {
                return "lol";
            }
        }

    }
}

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SSDAPI.Models;
using SSDAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SSDAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : ControllerBase
    {
        [HttpPost]
        [Route("FileDataSave")]
        public string SaveUserImage([FromBody] FileModel fileModel)
        {
            CreateFileService cfs = new CreateFileService();

            return cfs.UploadUserFile(fileModel);
        }
    }
}

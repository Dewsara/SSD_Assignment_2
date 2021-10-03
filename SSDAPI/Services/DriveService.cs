using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Auth.OAuth2.Flows;
using Google.Apis.Auth.OAuth2.Responses;
using Google.Apis.Drive.v3;
using Google.Apis.Services;
using Google.Apis.Util.Store;
using static Google.Apis.Drive.v3.DriveService;

namespace SSDAPI.Services
{
    public class DriveService
    {
        public DriveService GetService(string accTkn, string logEmail)
        {
            var tokenResponse = new TokenResponse
            {
                AccessToken = accTkn,
                RefreshToken = "1//04q1DOu87Mh7-CgYIARAAGAQSNwF-L9IrDwXy_xi2O8sfQk0SHsPcWoeV5pRTmBMLJ85vlISi2ETlM1mIREE9_eGQiNPrIMX-acE"
            };

            var applicationName = "SSD Assignment 2";// Use the name of the project in Google Cloud
            var username = logEmail;//"it18146516@my.sliit.lk"; // Use your email

            var apiCodeFlow = new GoogleAuthorizationCodeFlow(new GoogleAuthorizationCodeFlow.Initializer
            {
                ClientSecrets = new ClientSecrets
                {
                    ClientId = "885024372915-qrhrciub8l3ev12ac6esqs7vfc88l8gr.apps.googleusercontent.com",
                    ClientSecret = "OCkyLyTBv2Ercqdu5s7kLevu"
                },
                Scopes = new[] { Scope.Drive },
                DataStore = new FileDataStore(applicationName)

            });

        }
    }
    }

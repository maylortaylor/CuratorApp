using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace Curator.Api
{
    public class Program
    {
		/// <summary>
        /// Main Program entry
        /// </summary>
        /// <param name="args">The command-line arguments.</param>
        public static void Main(string[] args)
        {
            IWebHostBuilder hostBuilder;
            string env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
            
            var config = new ConfigurationBuilder()
                .AddCommandLine(args)
                .AddJsonFile("hosting.json", optional: true)
                .Build();
                
            // string slot = Environment.GetEnvironmentVariable("ASPNETCORE_SLOT_NAME");

            bool isDevelpmentEnvironment = !String.IsNullOrEmpty(env) && env == "Development";
            if (/*isLocalSlot && */isDevelpmentEnvironment)
            {
                hostBuilder = new WebHostBuilder()
                    .UseKestrel(options =>
                            options.Listen(IPAddress.Loopback, 5001)
                    )
                    .UseUrls("https://api.local.dev:5001");
            }
            else
            {
                hostBuilder = new WebHostBuilder()
                    .UseKestrel();
            }

            var host = hostBuilder
                .UseConfiguration(config)
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}

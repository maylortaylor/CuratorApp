﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using Swashbuckle;
using Swashbuckle.AspNetCore.Swagger;

namespace Curator.Api
{
	/// <summary>
    /// Startup.
    /// </summary>
    public class Startup
    {
        //public Startup(IConfiguration configuration)
        //{
        //    Configuration = configuration;
        //}

        //public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
			services.AddMvcCore()
				.AddCors()
				.AddApiExplorer()
				.AddJsonFormatters();

			services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info {
					Version = "v1",
                    Title = "Curator.Api",
					Description = "A Music Curating API service",
                    TermsOfService = "None",
                    Contact = new Contact
                    {
                        Name = "Maylor Taylor",
                        Email = string.Empty,
                        Url = "https://maylortaylor.github.io"
                    },
                    //License = new License
                    //{
                    //    Name = "Use under LICX",
                    //    Url = "https://example.com/license"
                    //}
				});

                // Set the comments path for the Swagger JSON and UI.
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                c.IncludeXmlComments(xmlPath);
            });
        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
			//if (env.IsDevelopment())
			//{
			//    app.UseDeveloperExceptionPage();
			//}
			app.UseStaticFiles();


			// Enable middleware to serve generated Swagger as a JSON endpoint.
			app.UseSwagger();
			// Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), 
            // specifying the Swagger JSON endpoint.
			app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Curator.Api V1");
				//c.RoutePrefix = string.Empty;
            });

			app.UseCors(policy =>
            {
                policy.AllowAnyOrigin();
            });

			app.UseMvc();
        }
    }
}

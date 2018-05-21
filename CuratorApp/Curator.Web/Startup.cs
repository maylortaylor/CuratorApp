using System;
using System.IO;
using System.Reflection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;
using Microsoft.Net.Http.Headers;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Swashbuckle.AspNetCore.Swagger;

namespace Curator.Web
{
    public class Startup
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
        public Startup(IHostingEnvironment env /*, IConfiguration configuration*/)
        {
            // Configuration = configuration;
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
			// Add Cors
			services.AddCors();

            // Add MVC Framework services
            services.AddMvc();
            services.AddNodeServices();

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

			// Enforce https during production. To quickly enable ssl during development. Go to: Project Properties->Debug->Enable SSL
            //if (!_hostingEnvironment.IsDevelopment())
            //    services.Configure<MvcOptions>(options => options.Filters.Add(new RequireHttpsAttribute()));

			//.AddJsonOptions(opts =>
            //{
            //    opts.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            //});

            // Add Swagger Auto Document Generation service
			services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info
                {
                    Version = "v1",
                    Title = "Curator.Api",
                    Description = "A Music Curating API service",
                    TermsOfService = "None",
                    Contact = new Contact
                    {
                        Name = "Maylor Taylor",
                        Email = string.Empty,
                        Url = "https://twitter.com/maylordev"
                    }
                });

                // Set the comments path for the Swagger JSON and UI.
                // var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                // var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                // c.IncludeXmlComments(xmlPath);
            });
        }
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

			// Setup Cors
            app.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod());

            app.UseStaticFiles(new StaticFileOptions() {
                OnPrepareResponse = c => {

                    //Do not add cache to json files. We need to have new versions when we add new translations.
                    if (!c.Context.Request.Path.Value.Contains(".json"))
                    {
                        c.Context.Response.GetTypedHeaders().CacheControl = new CacheControlHeaderValue()
                        {
                            MaxAge = TimeSpan.FromDays(30) // Cache everything except json for 30 days
                        };
                    }
                    else
                    {
                        c.Context.Response.GetTypedHeaders().CacheControl = new CacheControlHeaderValue()
                        {
                            MaxAge = TimeSpan.FromMinutes(15) // Cache json for 15 minutes
                        };
                    }
                }
            });

            // Check Environment Setting
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                // app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                // {
                //     HotModuleReplacement = true,
                //     HotModuleReplacementEndpoint = "/dist/"
                // });

                // Setup Swagger Auto Document Generation
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "QuickApp API V1");
                });

                // app.MapWhen(x => !x.Request.Path.Value.StartsWith("/swagger", StringComparison.OrdinalIgnoreCase), builder =>
                // {
                //     builder.UseMvc(routes =>
                //     {
                //         routes.MapSpaFallbackRoute(
                //             name: "spa-fallback",
                //             defaults: new { controller = "Home", action = "Index" });
                //     });
                // });
            }

			if (env.IsProduction() || env.IsStaging() || env.IsEnvironment("Staging"))
            {
                // app.UseMvc(routes =>
                // {
                //     routes.MapRoute(
                //     name: "default",
                //     template: "{controller=Home}/{action=Index}/{id?}");

                //     routes.MapRoute(
                //     "Sitemap",
                //     "sitemap.xml",
                //     new { controller = "Home", action = "SitemapXml" });

                //     routes.MapSpaFallbackRoute(
                //         name: "spa-fallback",
                //         defaults: new { controller = "Home", action = "Index" });
                // });
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseSpaStaticFiles();

            // Setup MVC Framework
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using Microsoft.AspNetCore.SpaServices.Prerendering;
using Microsoft.AspNetCore.NodeServices;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Http;
using System.Diagnostics;
using System;

namespace Curator.Web.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            // var prerenderResult = await Request.BuildPrerender();

            // ViewData["SpaHtml"] = prerenderResult.Html; // our <app-root /> from Angular
            // ViewData["Title"] = prerenderResult.Globals["title"]; // set our <title> from Angular
            // ViewData["Styles"] = prerenderResult.Globals["styles"]; // put styles in the correct place
            // ViewData["Scripts"] = prerenderResult.Globals["scripts"]; // scripts (that were in our header)
            // ViewData["Meta"] = prerenderResult.Globals["meta"]; // set our <meta> SEO tags
            // ViewData["Links"] = prerenderResult.Globals["links"]; // set our <link rel="canonical"> etc SEO tags
            // ViewData["TransferData"] = prerenderResult.Globals["transferData"]; // our transfer data set to window.TRANSFER_CACHE = {};

            return View();
        }
        public IActionResult Error()
        {
        return View();
        }
    }
}

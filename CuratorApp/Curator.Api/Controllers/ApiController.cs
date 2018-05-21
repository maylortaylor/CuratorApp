using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Curator.Api.Controllers
{
	/// <summary>
    /// API controller.
    /// </summary>
	[Produces("application/json")]
    [Route("api/[controller]")]
    [Controller]
    public class ApiController
    {
		/// <summary>
        /// Gets or sets the action context.
        /// </summary>
        /// <value>The action context.</value>
        [ActionContext]
        public ActionContext ActionContext { get; set; }

        /// <summary>
        /// Gets the http context.
        /// </summary>
        /// <value>The http context.</value>
        public HttpContext HttpContext => ActionContext?.HttpContext;

        /// <summary>
        /// Gets the request.
        /// </summary>
        /// <value>The request.</value>
        public HttpRequest Request => ActionContext?.HttpContext?.Request;

        /// <summary>
        /// Gets the response.
        /// </summary>
        /// <value>The response.</value>
        public HttpResponse Response => ActionContext?.HttpContext?.Response;
        
		/// <summary>
        /// Gets the resolver.
        /// </summary>
        /// <value>The resolver.</value>
        public IServiceProvider Resolver => ActionContext?.HttpContext?.RequestServices;
    }
}

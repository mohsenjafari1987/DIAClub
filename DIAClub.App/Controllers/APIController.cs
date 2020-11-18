using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace DIAClub.App.Controllers
{
    public class APIController : ApiController
    {
        [System.Web.Http.HttpGet]
        public IHttpActionResult GetEvents()
        {

            List<Event> a = new List<Event>();
            a.Add(new Event { id = "1", title = "event" });
            a.Add(new Event { id = "2", title = "event" });

            return Json(a);
        }


    }

    public class Event
    {
        public string id { get; set; }
        public string title { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace DIAClub.App.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/AngularScripts/Bundles").Include(
                       "~/AngularScripts/bundles/runtime.*",
                       "~/AngularScripts/bundles/vendor.*",
                       "~/AngularScripts/bundles/polyfills.*",
                       "~/AngularScripts/bundles/main.*"));
            //bundles.Add(new StyleBundle("~/Content/Styles").Include("~/bundles/styles.*"));
        }
    }
}
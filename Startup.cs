using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JetNetSolutions.Startup))]
namespace JetNetSolutions
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GreetingApp
{
    public class Greeter
    {
        private readonly ITimeService _timeService;

        public Greeter(ITimeService timeService)
        {
            _timeService = timeService;
        }

        public string Greet(string name)
        {
            if (_timeService.GetCurrentTime().Hour < 12)
            {
                return string.Format("Hi {0}, Good Morning", name);
            }
            else
            {
                return string.Format("Hi {0}, Good Evening", name);
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GreetingApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter your name");
            var name = Console.ReadLine();
            var greeter = new Greeter(new TimeService());
            var greetMsg = greeter.Greet(name);
            Console.WriteLine(greetMsg);
            Console.ReadLine();
        }
    }
}

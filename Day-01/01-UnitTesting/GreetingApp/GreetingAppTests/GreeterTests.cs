using System;
using GreetingApp;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace GreetingAppTests
{
    public class TimeServiceForMorning : ITimeService
    {
        public DateTime GetCurrentTime()
        {
            return new DateTime(2015,1,27,9,0,0);
        }
    }

    public class TimeServiceForEvening : ITimeService
    {
        public DateTime GetCurrentTime()
        {
            return new DateTime(2015, 1, 27, 15, 0, 0);
        }
    }

    [TestClass]
    public class GreeterTests
    {
        [TestMethod]
        public void Greets_With_GoodMorning_Before_12()
        {
            //Arrange
            var timeService = new TimeServiceForMorning();
            var greeter = new Greeter(timeService);
            var name = "Magesh";
            string expectedResult = "Hi Magesh, Good Morning";
            //Act
            var greetMsg = greeter.Greet(name);

            //Assert
            
            Assert.AreEqual(expectedResult, greetMsg);
        }
        [TestMethod]
        public void Greets_With_GoodEvening_After_12()
        {
            //Arrange
            var timeService = new TimeServiceForEvening();
            var greeter = new Greeter(timeService);
            var name = "Magesh";
            string expectedResult = "Hi Magesh, Good Evening";
            //Act
            var greetMsg = greeter.Greet(name);

            //Assert

            Assert.AreEqual(expectedResult, greetMsg);
        }
    }
}

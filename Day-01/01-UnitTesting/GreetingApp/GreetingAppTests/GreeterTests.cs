using System;
using GreetingApp;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace GreetingAppTests
{
  

    [TestClass]
    public class GreeterTests
    {
        [TestMethod]
        public void Greets_With_GoodMorning_Before_12()
        {
            //Arrange
            var mockery = new Moq.Mock<ITimeService>();
            mockery.Setup(ts => ts.GetCurrentTime()).Returns(new DateTime(2015, 1, 27, 9, 0, 0));
            var timeService = mockery.Object;
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
            var mockery = new Moq.Mock<ITimeService>();
            mockery.Setup(ts => ts.GetCurrentTime()).Returns(new DateTime(2015, 1, 27, 15, 0, 0));
            var timeService = mockery.Object;
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

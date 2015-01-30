using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;

namespace DataFirstDemo
{
    public class NorthwindEntities : DbContext
    {
        public NorthwindEntities() : base("NorthwindEntities")
        {
            //Database.SetInitializer(new DropCreateDatabaseAlways<NorthwindEntities>());
        }

        public DbSet<Car> Cars { get; set; }
        public DbSet<Driver> Drivers { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var context = new NorthwindEntities();
            /*context.Cars.Add(new Car() {Make = "Maruti", Model = "Swift"});
            context.Cars.Add(new Car() { Make = "Maruti", Model = "Alto" });
            context.Cars.Add(new Car() { Make = "Mercedes", Model = "CD01" });
            context.Cars.Add(new Car() { Make = "Audi", Model = "A4" });
            context.SaveChanges();*/


            for(var i=0;i<5;i++)
                Console.WriteLine(context.Cars.Find(1).Make);

            //context.SaveChanges();
            Console.WriteLine("Done");
            Console.ReadLine();
        }
    }
}

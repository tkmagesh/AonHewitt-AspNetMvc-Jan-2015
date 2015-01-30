using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;

namespace DataFirstDemo
{
    public class Driver
    {
        public int DriverId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public virtual ICollection<Car> Cars { get; set; }
    }

    public class Car
    {
        public int CarId { get; set; }
        public string Model { get; set; }
        public string Make { get; set; }
        public int Year { get; set; }
        [Timestamp]
        public byte[] RowVersion { get; set; }
        
        public virtual ICollection<Driver> Drivers { get; set; }
    }
}

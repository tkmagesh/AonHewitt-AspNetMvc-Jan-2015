using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TodoManager.Models
{
    public class Todo
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool IsCompleted { get; private set; }


        public void Toggle()
        {
            this.IsCompleted = !this.IsCompleted;
        }

    }
}
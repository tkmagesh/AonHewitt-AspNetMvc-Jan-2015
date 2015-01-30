using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TodoManager.Models;

namespace TodoManager.Services
{
    public class CategoryService
    {
        public List<Category> GetAll()
        {
            
            return new List<Category>()
            {
                new Category(){Id = 1, Name = "Personal"},
                new Category(){Id = 2, Name = "Official"},
                new Category(){Id = 3, Name = "Recreational"}
            };
        } 
    }
}
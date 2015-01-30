using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TodoManager.Models;

namespace TodoManager.ViewModels
{
    public class NewTodo
    {
        public IEnumerable<SelectListItem> Categories { get; set; }

        [DisplayName("Task Id")]
        public Guid Id { get; set; }

        [DisplayName("Task Name")]
        [Required]
        public string Name { get; set; }


        public bool IsCompleted { get; set; }
        public int CategoryId { get; set; }
    }
}
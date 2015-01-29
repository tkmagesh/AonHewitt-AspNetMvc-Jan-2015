using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TodoManager.Models;
using TodoManager.Services;

namespace TodoManager.Controllers
{
    public class TodosController : Controller
    {
        private static readonly ITodoService _todoService;
        //
        // GET: /Todos/

        static TodosController()
        {
            _todoService = new TodoService();
        }

      /*  public TodosController(ITodoService todoService)
        {
            _todoService = todoService;
        }
*/
        public ActionResult Index()
        {
            return View(_todoService.GetAll());
        }

        [HttpGet]
        public ActionResult Add()
        {
            return View("Add", new Todo(){Name = "Default todo"});
        }

        [HttpPost]
        public ActionResult Add(Todo todo)
        {
            _todoService.Add(todo.Name);
            return RedirectToAction("Index");
        }

    }
}

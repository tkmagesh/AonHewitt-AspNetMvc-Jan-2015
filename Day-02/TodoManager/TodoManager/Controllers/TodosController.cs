using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TodoManager.Models;
using TodoManager.Services;
using TodoManager.ViewModels;

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
            var defaultCategoryId = 2;
            return View("Add", new NewTodo
            {
                Categories = new CategoryService().GetAll().Select(c => new SelectListItem()
                {
                   Text = c.Name,
                   Value = c.Id.ToString(),
                   Selected = c.Id == defaultCategoryId

                }),
                Name = "Default todo",
                CategoryId = defaultCategoryId
            });
        }

        [HttpPost]
        public ActionResult Add(NewTodo todo)
        {
            if (!this.ModelState.IsValid)
            {
                return View(todo);
            }
            _todoService.Add(todo.Name);
            return RedirectToAction("Index");
        }

        public ActionResult ViewCategory(Category category)
        {
            return null;
        }

    }
}

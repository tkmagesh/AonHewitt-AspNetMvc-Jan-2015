using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TodoManager.Models;

namespace TodoManager.Services
{
    public interface ITodoService
    {
        Todo Add(string todoName);
        IEnumerable<KeyValuePair<Guid,Todo>> GetAll();
        void RemoveCompleted();
    }

    public class TodoService : ITodoService
    {
         private Dictionary<Guid, Todo> todos = new Dictionary<Guid, Todo>();

        public Todo Add(string todoName)
        {
            var newTodo = new Todo()
            {
                Id = Guid.NewGuid(),
                Name = todoName
            };
            todos[newTodo.Id] = newTodo;
            return newTodo;
        }

        public IEnumerable<KeyValuePair<Guid,Todo>> GetAll()
        {
            return todos.AsEnumerable();
        }

        public void RemoveCompleted()
        {
            foreach(var key in todos.Keys)
            {
                var todo = todos[key];
                if (todo.IsCompleted)
                    todos.Remove(key);
            }
        }
    }
}
using back_end.DataAccess;
using back_end.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers
{
    [Authorize] //phải xác thực mới truy cập được api
    [ApiController]
    [Route("api/users")]
    public class PersonController : ControllerBase
    {
        private IRepository repo;
        public PersonController(IRepository repo)
        {
            this.repo = repo;
        }


        [AllowAnonymous]
        [HttpGet]
        public IEnumerable<Person> GetUsers()
        {
            return repo.GetUsers;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Person>> GetUserById(string id)
        {
            return await repo.getUserByIdAsync(id);
        }
    }
}

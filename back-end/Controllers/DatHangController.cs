using back_end.DataAccess;
using back_end.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers
{
    public class DatHangController : BaseApiController
    {
        private IRepository repo;
        public DatHangController(IRepository repo)
        {
            this.repo = repo;
        }




        [HttpGet("{personId}")]  //api/dathang/
        public async Task<ActionResult<DatHangDTO>> AddDatHang(string personId)
        {
            var datHangDTO = await  repo.AddDatHangAsync(personId);

            if(datHangDTO == null)
            {
                return NotFound("Bạn đưa đặt sản phẩm trong giỏ hàng");
            }

            return Ok(datHangDTO);
        }
    }
}

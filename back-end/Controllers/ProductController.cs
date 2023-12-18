﻿using back_end.DataAccess;
using back_end.DTOs;
using back_end.Models;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductController : ControllerBase
    {
        private IRepository repo;
        public ProductController(IRepository repo)
        {
            this.repo = repo;
        }

        [HttpGet]
        public IEnumerable<SanPham> GetProducts()
        {
            return repo.GetProducts;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<SanPham>> GetProductById(string id)
        {
            var product = await repo.GetProductByIdAsync(id);
            if(product == null)
            {
                return NotFound("Không tìm thấy sản phẩm");
            }

            return Ok(product);
        }

        [HttpPut("updateproduct/{masanpham}")] // api/products/updateproduct/{}
        public async Task<ActionResult<SanPham>> UpdateProduct(ProductDTO productDTO,string masanpham)
        {
            SanPham sanPham = new SanPham
            {
                MaSanPham = masanpham,
                TenSanPham = productDTO.tensanpham,
                GiaSanPham = productDTO.giasanpham,
                MoTaSanPham = productDTO.motasanpham,
                SoLuong = productDTO.soluong,
                HinhAnhSanPham = productDTO.hinhandsanpham,
                MaTinhTrang = productDTO.matinhtrang,
                MaBrand = productDTO.mabrand,
                MaLoaiSanPham = productDTO.maloaisanpham
            };

            var check = await repo.UpdateProductAsync(sanPham);
            if(check == null)
            {
                return BadRequest("Ops somthing went wrong !!!");
            }

            return Ok(sanPham);
        }

        [HttpPost("postproduct")] // api/products/postproduct
        public async Task<ActionResult<SanPham>> PostProduct(ProductDTO productDTO)
        {
            SanPham newProduct = new SanPham
            {
                MaSanPham = repo.CreateMaSanPham(),
                TenSanPham = productDTO.tensanpham,
                GiaSanPham = productDTO.giasanpham,
                MoTaSanPham = productDTO.motasanpham,
                SoLuong = productDTO.soluong,
                HinhAnhSanPham = productDTO.hinhandsanpham,
                MaTinhTrang = productDTO.matinhtrang,
                MaBrand = productDTO.mabrand,
                MaLoaiSanPham = productDTO.maloaisanpham,
            };

            var check = await repo.PostProductAsync(newProduct);
            if(!check)
            {
                return BadRequest("Ops something went wrong (maybe productID)");
            }
            return Ok(newProduct);
        }

        [HttpDelete("[action]/{productId}")] //api/products/deleteproduct/{productId}
        public async Task<ActionResult> DeleteProduct(string productId)
        {
            var check = await repo.DeleteProductAsync(productId);
            if(check)
            {
                return Ok("Đã xóa thành công");
            }
            return BadRequest("Đã có lỗi (có thể xóa id không hợp lệ");
        }
    }
}

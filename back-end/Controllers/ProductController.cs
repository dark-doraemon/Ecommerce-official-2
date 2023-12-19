﻿using AutoMapper;
using back_end.DataAccess;
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
        private IMapper mapper;

        public ProductController(IRepository repo,IMapper mapper)
        {
            this.repo = repo;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SanPham>>> GetProducts()
        {
            var products = await repo.GetProductsAsync();

            var productsToReturn = this.mapper.Map<IEnumerable<ProductDTO>>(products);

            return Ok(productsToReturn);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<SanPham>> GetProductById(string id)
        {
            var product = await repo.GetProductByIdAsync(id);
            if(product == null)
            {
                return NotFound("Không tìm thấy sản phẩm");
            }
            var productToReturn = this.mapper.Map<ProductDTO>(product);
            return Ok(productToReturn);
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
                HinhAnhSanPham = productDTO.hinhanhsanpham,
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
                HinhAnhSanPham = productDTO.hinhanhsanpham,
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

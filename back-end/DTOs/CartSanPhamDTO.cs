using back_end.Models;

namespace back_end.DTOs
{
    public class CartSanPhamDTO
    {
        public string maSanPham { get; set; }
        public int soLuongSp { get; set; }
        public decimal giaTien { get; set; }

        public ProductDTO maSanPhamNavigation { get; set; }
    }
}

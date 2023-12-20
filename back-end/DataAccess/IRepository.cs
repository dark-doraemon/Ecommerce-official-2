using back_end.DTOs;
using back_end.Models;

namespace back_end.DataAccess
{
    public interface IRepository
    {
        //Brand
        IEnumerable<Brand> GetBrands { get; }
        Task<Brand> PostBrandAsync(Brand newBrand);
        Task<bool> DeleteBrandAsync(string brandId);
        Task<Brand> UpdateBrandAync(Brand brand);


        //LoaiSanPham Category
        IEnumerable<LoaiSanPham> GetLoaiSanPhams { get; }


        //SanPham

        string CreateMaSanPham();

        Task<IEnumerable<SanPham>> GetProductsAsync(); // get san pham

        Task<SanPham> GetProductByIdAsync(string productId); // get san pham by id

        Task<SanPham> UpdateProductAsync(SanPham product); //update san pham

        Task<bool> DeleteProductAsync(string productId); //xóa sản phẩm

        Task<bool> PostProductAsync(SanPham newProduct);



        //Cart
        Task<Cart> GetCartByPersonIdAsync(string personId);
        string CreateMaCart();
        Task<Cart> CreateCartAsync(Cart newCart);
        Task<Cart> GetProductsInCart(string personId);
        Task<Cart> DeleteProductInCartAsync(string cartId, string maSanPham);
        Task<Cart> ChangeQuantityOfProductInCartAsync(string cartId, string maSanPham,int quatity);
        Task<Cart> AddProductIntoCartAsync(CartSanPhamDTO cartSanPhamDTO);
        //Comment


        //DatHang


        //DatHangSanPham


        //HoaDon


        //KhachHang
        string CreateMaKhachHang();
        bool AddKhachHang(string makhachhang);

        //LoaiTaiKhoan


        //MauSacSanPham


        //NhanVien
        string CreateMaNhanVien();
        bool AddNhanVien(string manhanvien, string mavaitro);

        //Person    
        IEnumerable<Person> GetUsers { get; }
        Task<Person> getUserByIdAsync(string id);
        Task<Person> UpdatePersonAsync(PersonDTO personDTO,string id);

        //TaiKhoan
        string CreateMaTaiKhoan();
        bool CreateAccount(TaiKhoan newTaiKhoan);
        bool CheckTaiKhoanExist(LoginDTO login);
        TaiKhoan CheckTaiKhoanVaMatKhauExist(LoginDTO login);

        Task<IEnumerable<AccountDTO>> GetAccountsAync();

        Task<AccountDTO> GetAccountByUserNameAync(string username);


        //ThacMacKhieuNai
        string CreateMaKhieuNai();
        Task<IEnumerable<ThacMacKhieuNai>> GetKhieuNaiAsync();

        Task<bool> PostKhieuNaiAsync(ThacMacKhieuNai thongtin);

        Task<bool> DeleteThacMacKhieuNaiAsync(string id);




        //TinhTrangSanPham


        //VaiTroNhanVien


        //Voucher


    }
}

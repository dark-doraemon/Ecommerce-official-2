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

        IEnumerable<SanPham> GetProducts { get; } // get san pham

        Task<SanPham> GetProductByIdAsync(string productId); // get san pham by id

        Task<SanPham> UpdateProductAsync(SanPham product); //update san pham

        Task<bool> DeleteProductAsync(string productId); //xóa sản phẩm

        Task<bool> PostProductAsync(SanPham newProduct);



        //Cart



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

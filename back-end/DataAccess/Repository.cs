using back_end.DTOs;
using back_end.Models;
using Microsoft.EntityFrameworkCore;

namespace back_end.DataAccess
{
    public class Repository : RepositotyBaseFunction, IRepository
    {
        private EcommerceContext context;
        public Repository(EcommerceContext context)
        {
            this.context = context;
        }

        //Brand

        public IEnumerable<Brand> GetBrands => context.Brands.Include(b => b.SanPhams).
            Select(b => new Brand { MaBrand = b.MaBrand, TenBrand = b.TenBrand, SanPhams = b.SanPhams });


        public async Task<Brand> PostBrandAsync(Brand newBrand)
        {
            var checkBrand = context.Brands.FirstOrDefault(b => b.MaBrand == newBrand.MaBrand);

            if (checkBrand != null)
            {
                return null;
            }

            context.Brands.Add(newBrand);
            await context.SaveChangesAsync();
            return newBrand;
        }
        public async Task<bool> DeleteBrandAsync(string brandId)
        {
            var checkBrand = context.Brands.FirstOrDefault(b => b.MaBrand == brandId);
            if (checkBrand == null) {
                return false;
            }

            context.Brands.Remove(checkBrand);
            await context.SaveChangesAsync();
            return true;
        }
        public async Task<Brand> UpdateBrandAync(Brand brand)
        {
            var brandNeedToBeUpdated = context.Brands.FirstOrDefault(b => b.MaBrand == brand.MaBrand);
            if (brandNeedToBeUpdated == null)
            {
                return null;
            }

            brandNeedToBeUpdated.TenBrand = brand.TenBrand;
            context.Brands.Update(brandNeedToBeUpdated);
            await context.SaveChangesAsync();
            return brand;
        }


        //LoaiSanPham Category
        public IEnumerable<LoaiSanPham> GetLoaiSanPhams => context.LoaiSanPhams;


        //SanPham

        public string CreateMaSanPham()
        {
            List<string> masanphams = context.SanPhams.Select(sp => sp.MaSanPham).ToList();
            string lastID = base.funcGetLastIndex(masanphams, 0).ToString();
            return lastID;
        }

        public IEnumerable<SanPham> GetProducts => context.SanPhams
            .Include(sp => sp.MaMauSacs)
            .Include(sp => sp.MaBrandNavigation)
            .Include(sp => sp.MaLoaiSanPhamNavigation)
            .Include(sp => sp.MaTinhTrangNavigation)
            .Select(sp => new SanPham
            {
                MaSanPham = sp.MaSanPham,
                TenSanPham = sp.TenSanPham,
                GiaSanPham = sp.GiaSanPham,
                MoTaSanPham = sp.MoTaSanPham,
                SoLuong = sp.SoLuong,
                HinhAnhSanPham = sp.HinhAnhSanPham,
                MaTinhTrang = sp.MaTinhTrang,
                MaBrand = sp.MaBrand,
                MaLoaiSanPham = sp.MaLoaiSanPham,
                MaLoaiSanPhamNavigation = sp.MaLoaiSanPhamNavigation,
                MaBrandNavigation = sp.MaBrandNavigation,
                MaTinhTrangNavigation = sp.MaTinhTrangNavigation

            });

        public async Task<SanPham> GetProductByIdAsync(string id)
        {
            return await context.SanPhams.Include(sp => sp.Comments).Where(sp => sp.MaSanPham == id)
                .Select(sp => new SanPham
                {
                    MaSanPham = sp.MaSanPham,
                    TenSanPham = sp.TenSanPham,
                    GiaSanPham = sp.GiaSanPham,
                    MoTaSanPham = sp.MoTaSanPham,
                    SoLuong = sp.SoLuong,
                    HinhAnhSanPham = sp.HinhAnhSanPham,
                    MaLoaiSanPhamNavigation = sp.MaLoaiSanPhamNavigation,
                    MaBrandNavigation = sp.MaBrandNavigation,
                    MaTinhTrangNavigation = sp.MaTinhTrangNavigation,
                    Comments = sp.Comments

                }).FirstOrDefaultAsync();
        }

        public async Task<SanPham> UpdateProductAsync(SanPham newProduct)
        {
            var productNeedToBeUpdated = context.SanPhams.
                FirstOrDefault(sp => sp.MaSanPham == newProduct.MaSanPham);
            if (productNeedToBeUpdated == null)
            {
                return null;
            }
            productNeedToBeUpdated.TenSanPham = newProduct.TenSanPham;
            productNeedToBeUpdated.GiaSanPham = newProduct.GiaSanPham;
            productNeedToBeUpdated.MoTaSanPham = newProduct.MoTaSanPham;
            productNeedToBeUpdated.SoLuong = newProduct.SoLuong;
            productNeedToBeUpdated.HinhAnhSanPham = newProduct.HinhAnhSanPham;
            productNeedToBeUpdated.MaTinhTrang = newProduct.MaTinhTrang;
            productNeedToBeUpdated.MaBrand = newProduct.MaBrand;
            productNeedToBeUpdated.MaLoaiSanPham = newProduct.MaLoaiSanPham;
            context.SanPhams.Update(productNeedToBeUpdated);
            await context.SaveChangesAsync();
            return newProduct;
        }

        public async Task<bool> DeleteProductAsync(string productId) //xóa sản phẩm
        {
            var product = context.SanPhams.FirstOrDefault(p => p.MaSanPham == productId);
            if (product == null)
            {
                return false;
            }

            context.SanPhams.Remove(product);
            await context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> PostProductAsync(SanPham newProduct) //thêm sản phẩm
        {
            var check = context.SanPhams.FirstOrDefault(p => p.MaSanPham == newProduct.MaSanPham);
            if (check != null)
            {
                return false;
            }

            await context.SanPhams.AddAsync(newProduct);
            await context.SaveChangesAsync();
            return true;
        }

        //Cart



        //Comment


        //DatHang


        //DatHangSanPham


        //HoaDon


        //KhachHang
        public string CreateMaKhachHang()
        {
            List<string> makhachhangs = context.KhachHangs.Select(kh => kh.MaKhachHang).ToList();
            string lastID = "KH" + base.funcGetLastIndex(makhachhangs, 2);
            return lastID;
        }

        public bool AddKhachHang(string makhachhang)
        {
            if (context.KhachHangs.Where(kh => kh.MaKhachHang == makhachhang).Any())
            {
                return false;
            }

            List<string> makhachhangs = new List<string>();
            string lastID = "KH" + base.funcGetLastIndex(makhachhangs, 2);
            context.KhachHangs.Add(new KhachHang
            {
                MaKhachHang = makhachhang,
            });
            context.SaveChanges();
            return true;
        }



        //LoaiTaiKhoan


        //MauSacSanPham


        //NhanVien
        public string CreateMaNhanVien()
        {
            List<string> manhanviens = context.NhanViens.Select(nv => nv.MaNhanVien).ToList();
            string lastID = "NV" + base.funcGetLastIndex(manhanviens, 2);
            return lastID;
        }

        public bool AddNhanVien(string manhanvien, string mavaitro)
        {
            return true;
        }


        //Person

        public IEnumerable<Person> GetUsers => context.People;

        public async Task<Person> getUserByIdAsync(string id)
        {
            return await context.People.FindAsync(id);
        }




        //TaiKhoan
        public string CreateMaTaiKhoan()
        {
            List<string> mataikhoan = context.TaiKhoans.Select(tk => tk.MaTaiKhoan).ToList();
            string lastID = "TK" + base.funcGetLastIndex(mataikhoan, 2);
            return lastID;
        }

        public bool CreateAccount(TaiKhoan newTaiKhoan)
        {
            //kiểm tra user name có tồn tại không
            if (context.TaiKhoans.Where(tk => newTaiKhoan.Username.ToLower() == tk.Username.ToLower()).Any())
            {
                return false;
            }

            context.TaiKhoans.Add(newTaiKhoan);
            context.SaveChanges();
            return true;

        }

        public bool CheckTaiKhoanExist(LoginDTO login)
        {
            //đầu tiên kiểm tra tài khoản có tồn tại không
            var user = context.TaiKhoans.FirstOrDefault(tk => tk.Username == login.username);
            if (user == null)
            {
                return false;
            }
            return true;

        }

        public TaiKhoan CheckTaiKhoanVaMatKhauExist(LoginDTO login)
        {
            var taikhoan = context.TaiKhoans.FirstOrDefault(tk => tk.Username == login.username
            && tk.Password == login.password);

            if (taikhoan == null)
            {
                return null;
            }
            return taikhoan;

        }

        public async Task<IEnumerable<AccountDTO>> GetAccountsAync()
        {
            var accounts = await context.TaiKhoans
                .Include(tk => tk.MaLoaiTaiKhoanNavigation)
                .Include(tk => tk.Person).ToListAsync();


            var accountDTOs = accounts.Select(tk => new AccountDTO
            {
                username = tk.Username,
                password = tk.Password,
                hoten = tk.Person.HoTen,
                tuoi = tk.Person.Tuoi,
                gioitinh = tk.Person.GioiTinh,
                sdt = tk.Person.Sđt,
                diachi = tk.Person.DiaChi,
                email = tk.Person.Email,
                loaitaikhoan = tk.MaLoaiTaiKhoanNavigation.TenLoaiTaiKhoan
            });

            return accountDTOs;

        }


        public async Task<AccountDTO> GetAccountByUserNameAync(string username)
        {
            var account = await context.TaiKhoans
               .Where(tk => tk.Username == username)
               .Include(tk => tk.MaLoaiTaiKhoanNavigation)
               .Include(tk => tk.Person).FirstOrDefaultAsync();


            var accountDTOs = new AccountDTO
            {
                username = account.Username,
                password = account.Password,
                hoten = account.Person.HoTen,
                tuoi = account.Person.Tuoi,
                gioitinh = account.Person.GioiTinh,
                sdt = account.Person.Sđt,
                diachi = account.Person.DiaChi,
                email = account.Person.Email,
                loaitaikhoan = account.MaLoaiTaiKhoanNavigation.TenLoaiTaiKhoan
            };

            return accountDTOs;
        }



        //ThacMacKhieuNai
        public string CreateMaKhieuNai()
        {
            List<string> makhieunai = context.ThacMacKhieuNais.Select(kn => kn.MaKhieuNai).ToList();
            string lastID = "TMKN" + base.funcGetLastIndex(makhieunai, 4);
            return lastID;
        }

        public async Task<IEnumerable<ThacMacKhieuNai>> GetKhieuNaiAsync()
        {
            return await context.ThacMacKhieuNais.ToListAsync();
        }

        public async Task<bool> PostKhieuNaiAsync(ThacMacKhieuNai thongtin)
        {
            await context.ThacMacKhieuNais.AddAsync(thongtin);
            return await context.SaveChangesAsync() >= 1 ? true : false;
        }

        public async Task<bool> DeleteThacMacKhieuNaiAsync(string id)
        {
            ThacMacKhieuNai thacmackieunai = await context.ThacMacKhieuNais.FindAsync(id);
            if (thacmackieunai == null)
            {
                return false;
            }

            context.ThacMacKhieuNais.Remove(thacmackieunai);
            return await context.SaveChangesAsync() > 0 ? true : false;
        }



        //TinhTrangSanPham


        //VaiTroNhanVien


        //Voucher


    }
}

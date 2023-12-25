create database Ecommerce
go
use Ecommerce
go
CREATE TABLE LoaiTaiKhoan (MaLoaiTaiKhoan nvarchar(255) NOT NULL, TenLoaiTaiKhoan nvarchar(255) NULL, PRIMARY KEY (MaLoaiTaiKhoan));
CREATE TABLE TaiKhoan (MaTaiKhoan nvarchar(255) NOT NULL, Username nvarchar(255) NULL, Password nvarchar(255) NULL, PersonID nvarchar(255) NOT NULL, MaLoaiTaiKhoan nvarchar(255) NOT NULL, PRIMARY KEY (MaTaiKhoan));
CREATE TABLE Person (PersonID nvarchar(255) NOT NULL, HoTen nvarchar(255) NULL, Tuoi int NOT NULL, GioiTinh int NOT NULL, CCCD nvarchar(255) NULL, SDT nvarchar(255) NULL, DiaChi nvarchar(255) NULL, Email nvarchar(255) NULL, PRIMARY KEY (PersonID));
CREATE TABLE NhanVien (MaNhanVien nvarchar(255) NOT NULL, NgayDuocTuyen datetime NULL, MaVaiTro nvarchar(255) NOT NULL, PRIMARY KEY (MaNhanVien));
CREATE TABLE KhachHang (MaKhachHang nvarchar(255) NOT NULL, PRIMARY KEY (MaKhachHang));
CREATE TABLE VaiTroNhanVien (MaVaiTro nvarchar(255) NOT NULL, TenVaiTro nvarchar(255) NULL, PRIMARY KEY (MaVaiTro));
CREATE TABLE LoaiSanPham (MaLoaiSanPham nvarchar(255) NOT NULL, TenLoaiSanPham nvarchar(255) NULL, PRIMARY KEY (MaLoaiSanPham));
CREATE TABLE HoaDon (MaHoaDon nvarchar(255) NOT NULL, NgayIn datetime NULL, TongTien numeric(19, 3) NULL, MaDatHang nvarchar(255) NOT NULL, PRIMARY KEY (MaHoaDon));
CREATE TABLE Comment (MaComment nvarchar(255) NOT NULL, NoiDungComment nvarchar(255) NULL, Star int NOT NULL, NgayComment datetime NULL, PersonID nvarchar(255) NOT NULL, MaSanPham nvarchar(255) NOT NULL, PRIMARY KEY (MaComment));
CREATE TABLE ThacMacKhieuNai (MaKhieuNai nvarchar(255) NOT NULL, HoTen nvarchar(255) NULL, Email nvarchar(255) NULL, SDT nvarchar(255) NULL, TieuDe nvarchar(255) NULL, NoiDung nvarchar(255) NULL, NgayKieuNai datetime NULL, PRIMARY KEY (MaKhieuNai));
CREATE TABLE Cart (MaCart nvarchar(255) NOT NULL, PersonID nvarchar(255) NOT NULL, PRIMARY KEY (MaCart));
CREATE TABLE Brand (MaBrand nvarchar(255) NOT NULL, TenBrand nvarchar(255) NULL, PRIMARY KEY (MaBrand));
CREATE TABLE TinhTrangSanPham (MaTinhTrang nvarchar(255) NOT NULL, TenTinhTrang nvarchar(255) NULL, PRIMARY KEY (MaTinhTrang));
CREATE TABLE MauSacSanPham (MaMauSac nvarchar(255) NOT NULL, TenMauSac nvarchar(255) NULL, PRIMARY KEY (MaMauSac));
CREATE TABLE Voucher (VoucherID nvarchar(255) NOT NULL, MaVoucher nvarchar(255) NULL, NgayPhatHanh datetime NULL, NgayHetHang datetime NULL, PRIMARY KEY (VoucherID));
CREATE TABLE SanPham (MaSanPham nvarchar(255) NOT NULL, TenSanPham nvarchar(255) NULL, GiaSanPham numeric(19, 3) NULL, MoTaSanPham nvarchar(255) NULL, SoLuong int NOT NULL, HinhAnhSanPham nvarchar(255) NULL, MaTinhTrang nvarchar(255) NOT NULL, MaBrand nvarchar(255) NOT NULL, MaLoaiSanPham nvarchar(255) NOT NULL, PRIMARY KEY (MaSanPham));
CREATE TABLE SanPham_MauSacSanPham (MaSanPham nvarchar(255) NOT NULL, MaMauSac nvarchar(255) NOT NULL, PRIMARY KEY (MaSanPham, MaMauSac));
CREATE TABLE LoaiSanPham_Brand (MaLoaiSanPham nvarchar(255) NOT NULL, MaBrand nvarchar(255) NOT NULL, PRIMARY KEY (MaLoaiSanPham, MaBrand));
CREATE TABLE Cart_SanPham (MaCart nvarchar(255) NOT NULL, MaSanPham nvarchar(255) NOT NULL, SoLuongSP int NULL, GiaTien numeric(19, 3) NULL, PRIMARY KEY (MaCart, MaSanPham));
CREATE TABLE DatHang (MaDatHang nvarchar(255) NOT NULL, NgayDatHang datetime NULL, PersonID nvarchar(255) NOT NULL, PRIMARY KEY (MaDatHang));
CREATE TABLE DatHang_SanPham (MaDatHang nvarchar(255) NOT NULL, MaSanPham nvarchar(255) NOT NULL, SoLuong int NULL, GiaTien numeric(19, 3) NULL, TongTien numeric(19, 3) NULL, PRIMARY KEY (MaDatHang, MaSanPham));
ALTER TABLE NhanVien ADD CONSTRAINT FKNhanVien864260 FOREIGN KEY (MaNhanVien) REFERENCES Person (PersonID);
ALTER TABLE KhachHang ADD CONSTRAINT FKKhachHang15206 FOREIGN KEY (MaKhachHang) REFERENCES Person (PersonID);
ALTER TABLE TaiKhoan ADD CONSTRAINT FKTaiKhoan978872 FOREIGN KEY (PersonID) REFERENCES Person (PersonID);
ALTER TABLE TaiKhoan ADD CONSTRAINT FKTaiKhoan852133 FOREIGN KEY (MaLoaiTaiKhoan) REFERENCES LoaiTaiKhoan (MaLoaiTaiKhoan);
ALTER TABLE NhanVien ADD CONSTRAINT FKNhanVien670324 FOREIGN KEY (MaVaiTro) REFERENCES VaiTroNhanVien (MaVaiTro);
ALTER TABLE SanPham ADD CONSTRAINT FKSanPham397196 FOREIGN KEY (MaTinhTrang) REFERENCES TinhTrangSanPham (MaTinhTrang);
ALTER TABLE SanPham_MauSacSanPham ADD CONSTRAINT FKSanPham_Ma48895 FOREIGN KEY (MaSanPham) REFERENCES SanPham (MaSanPham);
ALTER TABLE SanPham_MauSacSanPham ADD CONSTRAINT FKSanPham_Ma120529 FOREIGN KEY (MaMauSac) REFERENCES MauSacSanPham (MaMauSac);
ALTER TABLE SanPham ADD CONSTRAINT FKSanPham467323 FOREIGN KEY (MaBrand) REFERENCES Brand (MaBrand);
ALTER TABLE SanPham ADD CONSTRAINT FKSanPham437416 FOREIGN KEY (MaLoaiSanPham) REFERENCES LoaiSanPham (MaLoaiSanPham);
ALTER TABLE LoaiSanPham_Brand ADD CONSTRAINT FKLoaiSanPha320643 FOREIGN KEY (MaLoaiSanPham) REFERENCES LoaiSanPham (MaLoaiSanPham);
ALTER TABLE LoaiSanPham_Brand ADD CONSTRAINT FKLoaiSanPha584096 FOREIGN KEY (MaBrand) REFERENCES Brand (MaBrand);
ALTER TABLE Cart_SanPham ADD CONSTRAINT FKCart_SanPh922696 FOREIGN KEY (MaCart) REFERENCES Cart (MaCart);
ALTER TABLE Cart_SanPham ADD CONSTRAINT FKCart_SanPh844321 FOREIGN KEY (MaSanPham) REFERENCES SanPham (MaSanPham);
ALTER TABLE DatHang ADD CONSTRAINT FKDatHang97666 FOREIGN KEY (PersonID) REFERENCES Person (PersonID);
ALTER TABLE DatHang_SanPham ADD CONSTRAINT FKDatHang_Sa64145 FOREIGN KEY (MaDatHang) REFERENCES DatHang (MaDatHang);
ALTER TABLE DatHang_SanPham ADD CONSTRAINT FKDatHang_Sa135989 FOREIGN KEY (MaSanPham) REFERENCES SanPham (MaSanPham);
ALTER TABLE Comment ADD CONSTRAINT FKComment819342 FOREIGN KEY (PersonID) REFERENCES Person (PersonID);
ALTER TABLE HoaDon ADD CONSTRAINT FKHoaDon141997 FOREIGN KEY (MaDatHang) REFERENCES DatHang (MaDatHang);
ALTER TABLE Comment ADD CONSTRAINT FKComment786194 FOREIGN KEY (MaSanPham) REFERENCES SanPham (MaSanPham);
ALTER TABLE Cart ADD CONSTRAINT FKCart142245 FOREIGN KEY (PersonID) REFERENCES Person (PersonID);

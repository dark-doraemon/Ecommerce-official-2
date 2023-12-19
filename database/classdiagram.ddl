CREATE TABLE LoaiTaiKhoan (MaLoaiTaiKhoan varchar(255) NOT NULL, TenLoaiTaiKhoan varchar(255) NULL, PRIMARY KEY (MaLoaiTaiKhoan));
CREATE TABLE TaiKhoan (MaTaiKhoan varchar(255) NOT NULL, Username varchar(255) NULL, Password varchar(255) NULL, PersonID varchar(255) NOT NULL, MaLoaiTaiKhoan varchar(255) NOT NULL, PRIMARY KEY (MaTaiKhoan));
CREATE TABLE Person (PersonID varchar(255) NOT NULL, Tuoi int NOT NULL, HoTen varchar(255) NULL, GioiTinh int NOT NULL, CCCD varchar(255) NULL, SDT varchar(255) NULL, DiaChi varchar(255) NULL, Email varchar(255) NULL, MaCart varchar(255) NOT NULL, PRIMARY KEY (PersonID));
CREATE TABLE NhanVien (MaNhanVien varchar(255) NOT NULL, ChucVu varchar(255) NULL, NgayDuocTuyen datetime NULL, MaVaiTro varchar(255) NOT NULL, PRIMARY KEY (MaNhanVien));
CREATE TABLE KhachHang (MaKhachHang varchar(255) NOT NULL, PRIMARY KEY (MaKhachHang));
CREATE TABLE VaiTroNhanVien (MaVaiTro varchar(255) NOT NULL, TenVaiTro varchar(255) NULL, PRIMARY KEY (MaVaiTro));
CREATE TABLE LoaiSanPham (MaLoaiSanPham varchar(255) NOT NULL, TenLoaiSanPham varchar(255) NULL, PRIMARY KEY (MaLoaiSanPham));
CREATE TABLE HoaDon (MaHoaDon varchar(255) NOT NULL, NgayIn datetime NULL, TongTien numeric(19, 3) NULL, MaDatHang varchar(255) NOT NULL, PRIMARY KEY (MaHoaDon));
CREATE TABLE Comment (MaComment varchar(255) NOT NULL, NoiDungComment varchar(255) NULL, Star int NOT NULL, NgayComment datetime NULL, PersonID varchar(255) NOT NULL, MaSanPham varchar(255) NOT NULL, PRIMARY KEY (MaComment));
CREATE TABLE ThacMacKhieuNai (MaKhieuNai varchar(255) NOT NULL, HoTen varchar(255) NULL, Email varchar(255) NULL, SDT varchar(255) NULL, TieuDe varchar(255) NULL, NoiDung varchar(255) NULL, NgayKieuNai datetime NULL, PRIMARY KEY (MaKhieuNai));
CREATE TABLE Cart (MaCart varchar(255) NOT NULL, SoLuongSP int NOT NULL, TongTienCart numeric(19, 3) NULL, PRIMARY KEY (MaCart));
CREATE TABLE Brand (MaBrand varchar(255) NOT NULL, TenBrand varchar(255) NULL, PRIMARY KEY (MaBrand));
CREATE TABLE TinhTrangSanPham (MaTinhTrang varchar(255) NOT NULL, TenTinhTrang varchar(255) NULL, PRIMARY KEY (MaTinhTrang));
CREATE TABLE MauSacSanPham (MaMauSac varchar(255) NOT NULL, TenMauSac varchar(255) NULL, PRIMARY KEY (MaMauSac));
CREATE TABLE Voucher (VoucherID varchar(255) NOT NULL, MaVoucher varchar(255) NULL, NgayPhatHanh datetime NULL, NgayHetHang datetime NULL, PRIMARY KEY (VoucherID));
CREATE TABLE SanPham (MaSanPham varchar(255) NOT NULL, TenSanPham varchar(255) NULL, GiaSanPham numeric(19, 3) NULL, MoTaSanPham int NULL, SoLuong int NOT NULL, HinhAnhSanPham varchar(255) NULL, MaTinhTrang varchar(255) NOT NULL, MaBrand varchar(255) NOT NULL, MaLoaiSanPham varchar(255) NOT NULL, DatHangMaDatHang varchar(255) NOT NULL, PRIMARY KEY (MaSanPham));
CREATE TABLE SanPham_MauSacSanPham (MaSanPham varchar(255) NOT NULL, MaMauSac varchar(255) NOT NULL, PRIMARY KEY (MaSanPham, MaMauSac));
CREATE TABLE LoaiSanPham_Brand (MaLoaiSanPham varchar(255) NOT NULL, MaBrand varchar(255) NOT NULL, PRIMARY KEY (MaLoaiSanPham, MaBrand));
CREATE TABLE Cart_SanPham (MaCart varchar(255) NOT NULL, MaSanPham varchar(255) NOT NULL, PRIMARY KEY (MaCart, MaSanPham));
CREATE TABLE DatHang (MaDatHang varchar(255) NOT NULL, NgayDatHang datetime NULL, PersonID varchar(255) NOT NULL, PRIMARY KEY (MaDatHang));
CREATE TABLE DatHang_SanPham (MaDatHang varchar(255) NOT NULL, MaSanPham varchar(255) NOT NULL, SoLuong int NULL, GiaTien numeric(19, 3) NULL, TongTien numeric(19, 3) NULL, PRIMARY KEY (MaDatHang, MaSanPham));
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
ALTER TABLE Person ADD CONSTRAINT FKPerson487339 FOREIGN KEY (MaCart) REFERENCES Cart (MaCart);
ALTER TABLE Cart_SanPham ADD CONSTRAINT FKCart_SanPh922696 FOREIGN KEY (MaCart) REFERENCES Cart (MaCart);
ALTER TABLE Cart_SanPham ADD CONSTRAINT FKCart_SanPh844321 FOREIGN KEY (MaSanPham) REFERENCES SanPham (MaSanPham);
ALTER TABLE DatHang ADD CONSTRAINT FKDatHang97666 FOREIGN KEY (PersonID) REFERENCES Person (PersonID);
ALTER TABLE DatHang_SanPham ADD CONSTRAINT FKDatHang_Sa64145 FOREIGN KEY (MaDatHang) REFERENCES DatHang (MaDatHang);
ALTER TABLE DatHang_SanPham ADD CONSTRAINT FKDatHang_Sa135989 FOREIGN KEY (MaSanPham) REFERENCES SanPham (MaSanPham);
ALTER TABLE Comment ADD CONSTRAINT FKComment819342 FOREIGN KEY (PersonID) REFERENCES Person (PersonID);
ALTER TABLE HoaDon ADD CONSTRAINT FKHoaDon141997 FOREIGN KEY (MaDatHang) REFERENCES DatHang (MaDatHang);
ALTER TABLE Comment ADD CONSTRAINT FKComment786194 FOREIGN KEY (MaSanPham) REFERENCES SanPham (MaSanPham);

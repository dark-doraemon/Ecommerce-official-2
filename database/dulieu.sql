use Ecommerce
go

insert into VaiTroNhanVien values
('quanly','Quản lý'),
('nhanvien',N'Nhân viên'),
('khachhang',N'Khách hàng')
go


insert into LoaiTaiKhoan values
('ltkadmin','Admin'),
('ltknhanvien','Nhân viên'),
('ltkkhachhang','Khách hàng')
go 



insert into MauSacSanPham values
('blue',N'Màu xanh'),
('green',N'Xanh lá'),
('yellow',N'Vàng'),
('red',N'Đỏ'),
('purple',N'Tím')
go

insert into TinhTrangSanPham values
('new',N'Mới'),
('old',N'Cũ')
go

insert into Brand values
('AppleBrand',N'Apple'),
('SamsungBrand',N'Samsumg'),
('XiaomiBrand',N'Xiaomi'),
('OppoBrand',N'Oppo'),
('MicrosoftBrand',N'Microsoft'),
('RazerBrand',N'Razor'),
('AcerBrand',N'Acer'),
('ASUSBrand',N'Asus'),
('LenovoBrand',N'Lenovo'),
('DellBrand',N'Dell'),
('LogitechBrand',N'Logitech'),
('SonyBrand',N'Sony'),
('CorsairBrand',N'Corsair'),
('JBLBrand',N'JBL'),
('BeatsBrand',N'Beats'),
('HPBrand',N'HP'),
('HyperXBrand',N'HyperX')
go




insert into LoaiSanPham values
('smartphone',N'smartphone'),
('headphone',N'headphone'),
('laptop',N'laptop'),
('keyboard',N'keyboard'),
('console',N'Máy chơi game')
go




insert into Person values
('admin',N'Chú bé đần',20,0,'202020200202','089191919',N'TP HCM','admin@gmail.com'),
('KH1',N'Khách hàng 01',25,0,'0191919191191','098981891',N'HN','khachhang@gmail.com'),
('NV1',N'Nhân viên 01',30,0,'9191919191919','078985555',N'LA','nhanvien@gmail.com')
go

insert into TaiKhoan values
('TK1','admin','1','admin','ltkadmin'),
('TK2','nhanvien','1','NV1','ltknhanvien'),
('TK3','khachhang','1','KH1','ltkkhachhang')
go

insert into NhanVien values
('admin','2023-12-12','quanly'),
('NV1','2023-12-12','nhanvien')
go

insert into KhachHang values
('KH1')
go

-- Insert 18 sản phẩm mẫu
INSERT INTO SanPham VALUES
('1', 'smartphone Galaxy S21', 15000000, N'Smartphone cao cấp với camera ảnh siêu nét.', 50, 'link_hinh_anh_s21.jpg', 'new', 'SamsungBrand', 'smartphone'),
('2', 'laptop Inspiron 15', 20000000, N'laptop mỏng nhẹ, cấu hình mạnh mẽ.', 30, 'link_hinh_anh_inspiron15.jpg', 'new', 'DellBrand', 'laptop'),
('3', 'headphone AirPods Pro', 3000000, N'headphone không dây với chức năng chống ồn.', 100, 'link_hinh_anh_airpods_pro.jpg', 'new', 'AppleBrand', 'headphone'),
('4', 'keyboard G Pro X', 1500000, N'keyboard cơ với nhiều tính năng đặc biệt.', 40, 'link_hinh_anh_g_pro_x.jpg', 'new', 'LogitechBrand', 'keyboard'),
('5', 'headphone Sony WH-1000XM4', 4000000, N'headphone chống ồn với chất âm xuất sắc.', 60, 'link_hinh_anh_sony_wh1000xm4.jpg', 'new', 'SonyBrand', 'headphone'),
('6', 'keyboard Corsair K95 RGB Platinum', 2500000, N'keyboard cơ cao cấp với đèn nền RGB.', 25, 'link_hinh_anh_corsair_k95.jpg', 'new', 'CorsairBrand', 'keyboard'),
('7', 'smartphone iPhone 13', 18000000, N'Smartphone mới nhất của Apple với nhiều cải tiến.', 70, 'link_hinh_anh_iphone13.jpg', 'new', 'AppleBrand', 'smartphone'),
('8', 'laptop ThinkPad X1 Carbon', 30000000, N'laptop doanh nhân với thiết kế sang trọng.', 20, 'link_hinh_anh_thinkpad_x1.jpg', 'new', 'LenovoBrand', 'laptop'),
('9', 'headphone JBL Free X', 1200000, N'headphone không dây với chất âm tốt.', 90, 'link_hinh_anh_jbl_free_x.jpg', 'new', 'JBLBrand', 'headphone'),
('10', 'keyboard Razer BlackWidow Elite', 3000000, N'keyboard cơ chơi game với công nghệ tiên tiến.', 35, 'link_hinh_anh_razer_blackwidow.jpg', 'new', 'DellBrand', 'keyboard'),
('11', 'smartphone Xiaomi Redmi Note 10', 4500000, N'Smartphone giá rẻ với camera độ phân giải cao.', 80, 'link_hinh_anh_redmi_note_10.jpg', 'new', 'XiaomiBrand', 'smartphone'),
('12', 'laptop HP Pavilion', 16000000, N'laptop giá trung bình với hiệu suất tốt.', 50, 'link_hinh_anh_hp_pavilion.jpg', 'new', 'HPBrand', 'laptop'),
('13', 'headphone Beats Solo Pro', 3500000, N'headphone chất lượng cao với thiết kế sang trọng.', 65, 'link_hinh_anh_beats_solo_pro.jpg', 'new', 'BeatsBrand', 'headphone'),
('14', 'keyboard HyperX Alloy FPS Pro', 1800000, N'keyboard cơ chơi game với thiết kế compact.', 40, 'link_hinh_anh_hyperx_alloy_fps_pro.jpg', 'new', 'HyperXBrand', 'keyboard'),
('15', 'smartphone Oppo Reno 6', 8000000, N'Smartphone camera selfie đỉnh cao.', 60, 'link_hinh_anh_oppo_reno_6.jpg', 'new', 'OppoBrand', 'smartphone'),
('16', 'laptop ASUS ROG Zephyrus G14', 25000000, N'laptop chơi game siêu mỏng và nhẹ.', 15, 'link_hinh_anh_asus_rog_zephyrus_g14.jpg', 'new', 'ASUSBrand', 'laptop'),
('17', 'Surface Pro 7', 15000000, N'laptop 2 trong 1 mạnh mẽ với màn hình cảm ứng.', 25, 'link_hinh_anh_surface_pro_7.jpg', 'new', 'MicrosoftBrand', 'laptop'),
('18', 'Xbox Series X', 6000000, N'Console chơi game mới nhất với hiệu suất cao.', 40, 'link_hinh_anh_xbox_series_x.jpg', 'new', 'MicrosoftBrand', 'console')
go


insert into Comment values
('CM1',N'Sản phẩm đẹp giá rẻ, hiệu năng tốt',5,'2023-12-19','KH1','1'),
('CM2',N'Sản phẩm lỗi, hiệu năng kém',1,'2023-12-19','KH1','1'),
('CM3',N'giá tốt phù hợp túi tiền, hiệu năng tốt',5,'2023-12-19','KH1','1'),
('CM4',N'pin yếu, cấu hình thấp, camera xấu',5,'2023-12-19','KH1','1')



insert into Cart values
('Cart1','KH1')


insert into Cart_SanPham values
('Cart1','1',1,15000000),
('Cart1','2',2,20000000),
('Cart1','3',3,3000000),
('Cart1','4',4,1500000)


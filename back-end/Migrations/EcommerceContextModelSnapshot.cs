﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using back_end.Models;

#nullable disable

namespace back_end.Migrations
{
    [DbContext(typeof(EcommerceContext))]
    partial class EcommerceContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.25")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("back_end.Models.Brand", b =>
                {
                    b.Property<string>("MaBrand")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("TenBrand")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("MaBrand")
                        .HasName("PK__Brand__2F06A754F233D03D");

                    b.ToTable("Brand", (string)null);
                });

            modelBuilder.Entity("back_end.Models.Cart", b =>
                {
                    b.Property<string>("MaCart")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("PersonId")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("PersonID");

                    b.HasKey("MaCart")
                        .HasName("PK__Cart__20E715D51900B431");

                    b.HasIndex("PersonId");

                    b.ToTable("Cart", (string)null);
                });

            modelBuilder.Entity("back_end.Models.Comment", b =>
                {
                    b.Property<string>("MaComment")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("MaSanPham")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<DateTime?>("NgayComment")
                        .HasColumnType("datetime");

                    b.Property<string>("NoiDungComment")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("PersonId")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("PersonID");

                    b.Property<int>("Star")
                        .HasColumnType("int");

                    b.HasKey("MaComment")
                        .HasName("PK__Comment__36A7276A2F0AF3C3");

                    b.HasIndex("MaSanPham");

                    b.HasIndex("PersonId");

                    b.ToTable("Comment", (string)null);
                });

            modelBuilder.Entity("back_end.Models.DatHang", b =>
                {
                    b.Property<string>("MaDatHang")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<DateTime?>("NgayDatHang")
                        .HasColumnType("datetime");

                    b.Property<string>("PersonId")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("PersonID");

                    b.HasKey("MaDatHang")
                        .HasName("PK__DatHang__1E77C2F0800A7D62");

                    b.HasIndex("PersonId");

                    b.ToTable("DatHang", (string)null);
                });

            modelBuilder.Entity("back_end.Models.DatHangSanPham", b =>
                {
                    b.Property<string>("MaDatHang")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("MaSanPham")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<decimal?>("GiaTien")
                        .HasColumnType("numeric(19,3)");

                    b.Property<int?>("SoLuong")
                        .HasColumnType("int");

                    b.Property<decimal?>("TongTien")
                        .HasColumnType("numeric(19,3)");

                    b.HasKey("MaDatHang", "MaSanPham")
                        .HasName("PK__DatHang___D1DBB6B2AE2207C5");

                    b.HasIndex("MaSanPham");

                    b.ToTable("DatHang_SanPham", (string)null);
                });

            modelBuilder.Entity("back_end.Models.HoaDon", b =>
                {
                    b.Property<string>("MaHoaDon")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("MaDatHang")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<DateTime?>("NgayIn")
                        .HasColumnType("datetime");

                    b.Property<decimal?>("TongTien")
                        .HasColumnType("numeric(19,3)");

                    b.HasKey("MaHoaDon")
                        .HasName("PK__HoaDon__835ED13BBD83EF84");

                    b.HasIndex("MaDatHang");

                    b.ToTable("HoaDon", (string)null);
                });

            modelBuilder.Entity("back_end.Models.KhachHang", b =>
                {
                    b.Property<string>("MaKhachHang")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("MaKhachHang")
                        .HasName("PK__KhachHan__88D2F0E5E71F3913");

                    b.ToTable("KhachHang", (string)null);
                });

            modelBuilder.Entity("back_end.Models.LoaiSanPham", b =>
                {
                    b.Property<string>("MaLoaiSanPham")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("TenLoaiSanPham")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("MaLoaiSanPham")
                        .HasName("PK__LoaiSanP__ECCF699F592C9358");

                    b.ToTable("LoaiSanPham", (string)null);
                });

            modelBuilder.Entity("back_end.Models.LoaiTaiKhoan", b =>
                {
                    b.Property<string>("MaLoaiTaiKhoan")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("TenLoaiTaiKhoan")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("MaLoaiTaiKhoan")
                        .HasName("PK__LoaiTaiK__5F6E141C5EAD620F");

                    b.ToTable("LoaiTaiKhoan", (string)null);
                });

            modelBuilder.Entity("back_end.Models.MauSacSanPham", b =>
                {
                    b.Property<string>("MaMauSac")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("TenMauSac")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("MaMauSac")
                        .HasName("PK__MauSacSa__B9A91162925E99C3");

                    b.ToTable("MauSacSanPham", (string)null);
                });

            modelBuilder.Entity("back_end.Models.NhanVien", b =>
                {
                    b.Property<string>("MaNhanVien")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("MaVaiTro")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<DateTime?>("NgayDuocTuyen")
                        .HasColumnType("datetime");

                    b.HasKey("MaNhanVien")
                        .HasName("PK__NhanVien__77B2CA47F146AF7D");

                    b.HasIndex("MaVaiTro");

                    b.ToTable("NhanVien", (string)null);
                });

            modelBuilder.Entity("back_end.Models.Person", b =>
                {
                    b.Property<string>("PersonId")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("PersonID");

                    b.Property<string>("Cccd")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("CCCD");

                    b.Property<string>("DiaChi")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Email")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<int>("GioiTinh")
                        .HasColumnType("int");

                    b.Property<string>("HoTen")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Sdt")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("SDT");

                    b.Property<int>("Tuoi")
                        .HasColumnType("int");

                    b.HasKey("PersonId");

                    b.ToTable("Person", (string)null);
                });

            modelBuilder.Entity("back_end.Models.SanPham", b =>
                {
                    b.Property<string>("MaSanPham")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<decimal?>("GiaSanPham")
                        .HasColumnType("numeric(19,3)");

                    b.Property<string>("HinhAnhSanPham")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("MaBrand")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("MaLoaiSanPham")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("MaTinhTrang")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("MoTaSanPham")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<int>("SoLuong")
                        .HasColumnType("int");

                    b.Property<string>("TenSanPham")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("MaSanPham")
                        .HasName("PK__SanPham__FAC7442DE5565939");

                    b.HasIndex("MaBrand");

                    b.HasIndex("MaLoaiSanPham");

                    b.HasIndex("MaTinhTrang");

                    b.ToTable("SanPham", (string)null);
                });

            modelBuilder.Entity("back_end.Models.TaiKhoan", b =>
                {
                    b.Property<string>("MaTaiKhoan")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("MaLoaiTaiKhoan")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Password")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("PersonId")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("PersonID");

                    b.Property<string>("Username")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("MaTaiKhoan")
                        .HasName("PK__TaiKhoan__AD7C6529DBA89C4B");

                    b.HasIndex("MaLoaiTaiKhoan");

                    b.HasIndex("PersonId");

                    b.ToTable("TaiKhoan", (string)null);
                });

            modelBuilder.Entity("back_end.Models.ThacMacKhieuNai", b =>
                {
                    b.Property<string>("MaKhieuNai")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Email")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("HoTen")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<DateTime?>("NgayKieuNai")
                        .HasColumnType("datetime");

                    b.Property<string>("NoiDung")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("Sdt")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("SDT");

                    b.Property<string>("TieuDe")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("MaKhieuNai")
                        .HasName("PK__ThacMacK__1D72BE527AA1A8DE");

                    b.ToTable("ThacMacKhieuNai", (string)null);
                });

            modelBuilder.Entity("back_end.Models.TinhTrangSanPham", b =>
                {
                    b.Property<string>("MaTinhTrang")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("TenTinhTrang")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("MaTinhTrang")
                        .HasName("PK__TinhTran__89F8F669096159AA");

                    b.ToTable("TinhTrangSanPham", (string)null);
                });

            modelBuilder.Entity("back_end.Models.VaiTroNhanVien", b =>
                {
                    b.Property<string>("MaVaiTro")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("TenVaiTro")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("MaVaiTro")
                        .HasName("PK__VaiTroNh__C24C41CF2731FBBB");

                    b.ToTable("VaiTroNhanVien", (string)null);
                });

            modelBuilder.Entity("back_end.Models.Voucher", b =>
                {
                    b.Property<string>("VoucherId")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("VoucherID");

                    b.Property<string>("MaVoucher")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<DateTime?>("NgayHetHang")
                        .HasColumnType("datetime");

                    b.Property<DateTime?>("NgayPhatHanh")
                        .HasColumnType("datetime");

                    b.HasKey("VoucherId");

                    b.ToTable("Voucher", (string)null);
                });

            modelBuilder.Entity("CartSanPham", b =>
                {
                    b.Property<string>("MaCart")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("MaSanPham")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("MaCart", "MaSanPham")
                        .HasName("PK__Cart_San__EF4B619769C137C3");

                    b.HasIndex("MaSanPham");

                    b.ToTable("Cart_SanPham", (string)null);
                });

            modelBuilder.Entity("LoaiSanPhamBrand", b =>
                {
                    b.Property<string>("MaLoaiSanPham")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("MaBrand")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("MaLoaiSanPham", "MaBrand")
                        .HasName("PK__LoaiSanP__BE3F03EA5C2E17F5");

                    b.HasIndex("MaBrand");

                    b.ToTable("LoaiSanPham_Brand", (string)null);
                });

            modelBuilder.Entity("SanPhamMauSacSanPham", b =>
                {
                    b.Property<string>("MaSanPham")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.Property<string>("MaMauSac")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)");

                    b.HasKey("MaSanPham", "MaMauSac")
                        .HasName("PK__SanPham___C15DD53BA3AB5F7F");

                    b.HasIndex("MaMauSac");

                    b.ToTable("SanPham_MauSacSanPham", (string)null);
                });

            modelBuilder.Entity("back_end.Models.Cart", b =>
                {
                    b.HasOne("back_end.Models.Person", "Person")
                        .WithMany("Carts")
                        .HasForeignKey("PersonId")
                        .HasConstraintName("FKCart142245");

                    b.Navigation("Person");
                });

            modelBuilder.Entity("back_end.Models.Comment", b =>
                {
                    b.HasOne("back_end.Models.SanPham", "MaSanPhamNavigation")
                        .WithMany("Comments")
                        .HasForeignKey("MaSanPham")
                        .HasConstraintName("FKComment786194");

                    b.HasOne("back_end.Models.Person", "Person")
                        .WithMany("Comments")
                        .HasForeignKey("PersonId")
                        .HasConstraintName("FKComment819342");

                    b.Navigation("MaSanPhamNavigation");

                    b.Navigation("Person");
                });

            modelBuilder.Entity("back_end.Models.DatHang", b =>
                {
                    b.HasOne("back_end.Models.Person", "Person")
                        .WithMany("DatHangs")
                        .HasForeignKey("PersonId")
                        .HasConstraintName("FKDatHang97666");

                    b.Navigation("Person");
                });

            modelBuilder.Entity("back_end.Models.DatHangSanPham", b =>
                {
                    b.HasOne("back_end.Models.DatHang", "MaDatHangNavigation")
                        .WithMany("DatHangSanPhams")
                        .HasForeignKey("MaDatHang")
                        .IsRequired()
                        .HasConstraintName("FKDatHang_Sa64145");

                    b.HasOne("back_end.Models.SanPham", "MaSanPhamNavigation")
                        .WithMany("DatHangSanPhams")
                        .HasForeignKey("MaSanPham")
                        .IsRequired()
                        .HasConstraintName("FKDatHang_Sa135989");

                    b.Navigation("MaDatHangNavigation");

                    b.Navigation("MaSanPhamNavigation");
                });

            modelBuilder.Entity("back_end.Models.HoaDon", b =>
                {
                    b.HasOne("back_end.Models.DatHang", "MaDatHangNavigation")
                        .WithMany("HoaDons")
                        .HasForeignKey("MaDatHang")
                        .HasConstraintName("FKHoaDon141997");

                    b.Navigation("MaDatHangNavigation");
                });

            modelBuilder.Entity("back_end.Models.KhachHang", b =>
                {
                    b.HasOne("back_end.Models.Person", "MaKhachHangNavigation")
                        .WithOne("KhachHang")
                        .HasForeignKey("back_end.Models.KhachHang", "MaKhachHang")
                        .IsRequired()
                        .HasConstraintName("FKKhachHang15206");

                    b.Navigation("MaKhachHangNavigation");
                });

            modelBuilder.Entity("back_end.Models.NhanVien", b =>
                {
                    b.HasOne("back_end.Models.Person", "MaNhanVienNavigation")
                        .WithOne("NhanVien")
                        .HasForeignKey("back_end.Models.NhanVien", "MaNhanVien")
                        .IsRequired()
                        .HasConstraintName("FKNhanVien864260");

                    b.HasOne("back_end.Models.VaiTroNhanVien", "MaVaiTroNavigation")
                        .WithMany("NhanViens")
                        .HasForeignKey("MaVaiTro")
                        .HasConstraintName("FKNhanVien670324");

                    b.Navigation("MaNhanVienNavigation");

                    b.Navigation("MaVaiTroNavigation");
                });

            modelBuilder.Entity("back_end.Models.SanPham", b =>
                {
                    b.HasOne("back_end.Models.Brand", "MaBrandNavigation")
                        .WithMany("SanPhams")
                        .HasForeignKey("MaBrand")
                        .HasConstraintName("FKSanPham467323");

                    b.HasOne("back_end.Models.LoaiSanPham", "MaLoaiSanPhamNavigation")
                        .WithMany("SanPhams")
                        .HasForeignKey("MaLoaiSanPham")
                        .HasConstraintName("FKSanPham437416");

                    b.HasOne("back_end.Models.TinhTrangSanPham", "MaTinhTrangNavigation")
                        .WithMany("SanPhams")
                        .HasForeignKey("MaTinhTrang")
                        .HasConstraintName("FKSanPham397196");

                    b.Navigation("MaBrandNavigation");

                    b.Navigation("MaLoaiSanPhamNavigation");

                    b.Navigation("MaTinhTrangNavigation");
                });

            modelBuilder.Entity("back_end.Models.TaiKhoan", b =>
                {
                    b.HasOne("back_end.Models.LoaiTaiKhoan", "MaLoaiTaiKhoanNavigation")
                        .WithMany("TaiKhoans")
                        .HasForeignKey("MaLoaiTaiKhoan")
                        .HasConstraintName("FKTaiKhoan852133");

                    b.HasOne("back_end.Models.Person", "Person")
                        .WithMany("TaiKhoans")
                        .HasForeignKey("PersonId")
                        .HasConstraintName("FKTaiKhoan978872");

                    b.Navigation("MaLoaiTaiKhoanNavigation");

                    b.Navigation("Person");
                });

            modelBuilder.Entity("CartSanPham", b =>
                {
                    b.HasOne("back_end.Models.Cart", null)
                        .WithMany()
                        .HasForeignKey("MaCart")
                        .IsRequired()
                        .HasConstraintName("FKCart_SanPh922696");

                    b.HasOne("back_end.Models.SanPham", null)
                        .WithMany()
                        .HasForeignKey("MaSanPham")
                        .IsRequired()
                        .HasConstraintName("FKCart_SanPh844321");
                });

            modelBuilder.Entity("LoaiSanPhamBrand", b =>
                {
                    b.HasOne("back_end.Models.Brand", null)
                        .WithMany()
                        .HasForeignKey("MaBrand")
                        .IsRequired()
                        .HasConstraintName("FKLoaiSanPha584096");

                    b.HasOne("back_end.Models.LoaiSanPham", null)
                        .WithMany()
                        .HasForeignKey("MaLoaiSanPham")
                        .IsRequired()
                        .HasConstraintName("FKLoaiSanPha320643");
                });

            modelBuilder.Entity("SanPhamMauSacSanPham", b =>
                {
                    b.HasOne("back_end.Models.MauSacSanPham", null)
                        .WithMany()
                        .HasForeignKey("MaMauSac")
                        .IsRequired()
                        .HasConstraintName("FKSanPham_Ma120529");

                    b.HasOne("back_end.Models.SanPham", null)
                        .WithMany()
                        .HasForeignKey("MaSanPham")
                        .IsRequired()
                        .HasConstraintName("FKSanPham_Ma48895");
                });

            modelBuilder.Entity("back_end.Models.Brand", b =>
                {
                    b.Navigation("SanPhams");
                });

            modelBuilder.Entity("back_end.Models.DatHang", b =>
                {
                    b.Navigation("DatHangSanPhams");

                    b.Navigation("HoaDons");
                });

            modelBuilder.Entity("back_end.Models.LoaiSanPham", b =>
                {
                    b.Navigation("SanPhams");
                });

            modelBuilder.Entity("back_end.Models.LoaiTaiKhoan", b =>
                {
                    b.Navigation("TaiKhoans");
                });

            modelBuilder.Entity("back_end.Models.Person", b =>
                {
                    b.Navigation("Carts");

                    b.Navigation("Comments");

                    b.Navigation("DatHangs");

                    b.Navigation("KhachHang");

                    b.Navigation("NhanVien");

                    b.Navigation("TaiKhoans");
                });

            modelBuilder.Entity("back_end.Models.SanPham", b =>
                {
                    b.Navigation("Comments");

                    b.Navigation("DatHangSanPhams");
                });

            modelBuilder.Entity("back_end.Models.TinhTrangSanPham", b =>
                {
                    b.Navigation("SanPhams");
                });

            modelBuilder.Entity("back_end.Models.VaiTroNhanVien", b =>
                {
                    b.Navigation("NhanViens");
                });
#pragma warning restore 612, 618
        }
    }
}

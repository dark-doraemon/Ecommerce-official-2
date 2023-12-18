using System;
using System.Collections.Generic;

namespace back_end.Models
{
    public partial class SanPham
    {
        public SanPham()
        {
            Comments = new HashSet<Comment>();
            DatHangSanPhams = new HashSet<DatHangSanPham>();
            MaCarts = new HashSet<Cart>();
            MaMauSacs = new HashSet<MauSacSanPham>();
        }

        public string MaSanPham { get; set; } = null!;
        public string? TenSanPham { get; set; }
        public decimal? GiaSanPham { get; set; }
        public string? MoTaSanPham { get; set; }
        public int SoLuong { get; set; }
        public string? HinhAnhSanPham { get; set; }
        public string MaTinhTrang { get; set; } = null!;
        public string MaBrand { get; set; } = null!;
        public string MaLoaiSanPham { get; set; } = null!;

        public virtual Brand MaBrandNavigation { get; set; } = null!;
        public virtual LoaiSanPham MaLoaiSanPhamNavigation { get; set; } = null!;
        public virtual TinhTrangSanPham MaTinhTrangNavigation { get; set; } = null!;
        public virtual ICollection<Comment> Comments { get; set; }
        public virtual ICollection<DatHangSanPham> DatHangSanPhams { get; set; }

        public virtual ICollection<Cart> MaCarts { get; set; }
        public virtual ICollection<MauSacSanPham> MaMauSacs { get; set; }
    }
}

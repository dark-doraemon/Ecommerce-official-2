using System;
using System.Collections.Generic;

namespace back_end.Models
{
    public partial class DatHang
    {
        public DatHang()
        {
            DatHangSanPhams = new HashSet<DatHangSanPham>();
            HoaDons = new HashSet<HoaDon>();
        }

        public string MaDatHang { get; set; } = null!;
        public DateTime? NgayDatHang { get; set; }
        public string PersonId { get; set; } = null!;

        public virtual Person Person { get; set; } = null!;
        public virtual ICollection<DatHangSanPham> DatHangSanPhams { get; set; }
        public virtual ICollection<HoaDon> HoaDons { get; set; }
    }
}

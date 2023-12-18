using System;
using System.Collections.Generic;

namespace back_end.Models
{
    public partial class NhanVien
    {
        public string MaNhanVien { get; set; } = null!;
        public DateTime? NgayDuocTuyen { get; set; }
        public string MaVaiTro { get; set; } = null!;

        public virtual Person MaNhanVienNavigation { get; set; } = null!;
        public virtual VaiTroNhanVien MaVaiTroNavigation { get; set; } = null!;
    }
}

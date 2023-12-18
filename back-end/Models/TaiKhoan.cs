using System;
using System.Collections.Generic;

namespace back_end.Models
{
    public partial class TaiKhoan
    {
        public string MaTaiKhoan { get; set; } = null!;
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string PersonId { get; set; } = null!;
        public string MaLoaiTaiKhoan { get; set; } = null!;

        public virtual LoaiTaiKhoan MaLoaiTaiKhoanNavigation { get; set; } = null!;
        public virtual Person Person { get; set; } = null!;
    }
}

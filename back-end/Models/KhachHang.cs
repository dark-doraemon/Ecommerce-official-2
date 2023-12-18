using System;
using System.Collections.Generic;

namespace back_end.Models
{
    public partial class KhachHang
    {
        public string MaKhachHang { get; set; } = null!;

        public virtual Person MaKhachHangNavigation { get; set; } = null!;
    }
}

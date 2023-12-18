using System;
using System.Collections.Generic;

namespace back_end.Models
{
    public partial class Comment
    {
        public string MaComment { get; set; } = null!;
        public string? NoiDungComment { get; set; }
        public int Star { get; set; }
        public DateTime? NgayComment { get; set; }
        public string PersonId { get; set; } = null!;
        public string MaSanPham { get; set; } = null!;

        public virtual SanPham MaSanPhamNavigation { get; set; } = null!;
        public virtual Person Person { get; set; } = null!;
    }
}

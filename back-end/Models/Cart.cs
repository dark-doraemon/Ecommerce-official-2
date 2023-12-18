using System;
using System.Collections.Generic;

namespace back_end.Models
{
    public partial class Cart
    {
        public Cart()
        {
            MaSanPhams = new HashSet<SanPham>();
        }

        public string MaCart { get; set; } = null!;
        public int SoLuongSp { get; set; }
        public decimal? TongTienCart { get; set; }
        public string PersonId { get; set; } = null!;

        public virtual Person Person { get; set; } = null!;

        public virtual ICollection<SanPham> MaSanPhams { get; set; }
    }
}

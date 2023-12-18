﻿using System;
using System.Collections.Generic;

namespace back_end.Models
{
    public partial class LoaiTaiKhoan
    {
        public LoaiTaiKhoan()
        {
            TaiKhoans = new HashSet<TaiKhoan>();
        }

        public string MaLoaiTaiKhoan { get; set; } = null!;
        public string? TenLoaiTaiKhoan { get; set; }

        public virtual ICollection<TaiKhoan> TaiKhoans { get; set; }
    }
}

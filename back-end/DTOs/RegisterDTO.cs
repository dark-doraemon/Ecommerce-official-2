using System.ComponentModel.DataAnnotations;

namespace back_end.DTOs
{
    public class RegisterDTO
    {
        public string hoten { get; set; }   
        public int tuoi { get; set; }   
        public int gioitinh { get; set; }
        public string cccd { get; set; } = null;
        public string sdt { get; set; } 
        public string diachi { get; set; }
        public string email { get; set; } = null;
        public string username { get; set; }
        public string password { get; set; }
        public string confirmpassword { get; set; }
    }
}

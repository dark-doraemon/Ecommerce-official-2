using AutoMapper;
using back_end.DTOs;
using back_end.Models;

namespace back_end.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles() 
        { 
            CreateMap<SanPham,ProductDTO>();
        }
    }
}

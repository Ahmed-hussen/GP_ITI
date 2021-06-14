using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Souqly_API.Dtos.User
{
    public class UserProfitsDto
    {
        public int TotalProfits { get; set; }
        public int AvailableProfits { get; set; }
        public int ExpectedProfits { get; set; }
    }
}

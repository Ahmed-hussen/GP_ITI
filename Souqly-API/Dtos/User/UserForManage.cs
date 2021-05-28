﻿// using System;
// using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
// using System.Linq;
// using System.Threading.Tasks;


namespace Souqly_API.Dtos.User
    {
        public class UserForManage
        {
            [StringLength(256), Required, EmailAddress]
            public string Email { get; set; } 
            public  int Id { get; set; }  // will be hidden in angular 
            public  string NormalizedUserName { get; set; } // will be hidden in angular 

            [StringLength(256), Required]
            public string UserName { get; set; }
            public string FirstName { get; set; }
            public string PhoneNumber { get; set; }
        }
    }


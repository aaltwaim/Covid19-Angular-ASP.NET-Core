using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Covid.Models
{
    public class CaseContext:DbContext
    {
        public CaseContext(DbContextOptions<CaseContext> options):base(options)
        {
     
        }
        public DbSet<Case> Cases { get; set; }
    }
}

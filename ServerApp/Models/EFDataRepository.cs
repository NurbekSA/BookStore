using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore;
namespace ServerApp.Models {
    public class EFDataRepository : IDataRepository {
        private DataContext context;
        public EFDataRepository(DataContext ctx) {
        context = ctx;
        }
        
    }   
}
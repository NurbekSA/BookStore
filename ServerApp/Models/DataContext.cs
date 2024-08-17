using Microsoft.EntityFrameworkCore;
namespace ServerApp.Models {
 public class DataContext : DbContext {
 public DataContext(DbContextOptions<DataContext> opts) : base(opts) { }
 public DbSet<User> Users { get; set; }
 public DbSet<UserFile> UserFiles { get; set; }
 public DbSet<Esep> Eseps { get; set; }
 public DbSet<Message> Messages { get; set; }

//  protected override void OnModelCreating(ModelBuilder modelBuilder) {
//     modelBuilder.Entity<Book>().HasMany<Rating>(p => p.Ratings).WithOne(r => r.book).OnDelete(DeleteBehavior.Cascade);
//     modelBuilder.Entity<Book>().HasOne<Supplier>(p => p.Supplier)
//     .WithMany(s => s.Products).OnDelete(DeleteBehavior.SetNull);
//  }
 }
}

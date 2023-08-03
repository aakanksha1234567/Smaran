using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace API.Models
{
    public partial class SmaranContext : DbContext
    {
        public SmaranContext()
        {
        }

        public SmaranContext(DbContextOptions<SmaranContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Appointment> Appointments { get; set; } = null!;
        public virtual DbSet<Budget> Budgets { get; set; } = null!;
        public virtual DbSet<Feedback> Feedbacks { get; set; } = null!;
        public virtual DbSet<MedicalReport> MedicalReports { get; set; } = null!;
        public virtual DbSet<Note> Notes { get; set; } = null!;
        public virtual DbSet<PastAchievement> PastAchievements { get; set; } = null!;
        public virtual DbSet<RecordMedicine> RecordMedicines { get; set; } = null!;
        public virtual DbSet<RecordMeeting> RecordMeetings { get; set; } = null!;
        public virtual DbSet<RecordVaccine> RecordVaccines { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;
        public virtual DbSet<UserSecurityQa> UserSecurityQas { get; set; } = null!;
        public virtual DbSet<VaccineAge> VaccineAges { get; set; } = null!;
        public virtual DbSet<VaccineAgeMapping> VaccineAgeMappings { get; set; } = null!;
        public virtual DbSet<VaccineDose> VaccineDoses { get; set; } = null!;
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Appointment>(entity =>
            {
                entity.ToTable("Appointment");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.AppointmentAt)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AppointmentAttachment)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.AppointmentNotes)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.AppointmentTime).HasColumnType("datetime");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.UpdateDate).HasColumnType("datetime");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Appointments)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Appointme__UserI__37A5467C");
            });

            modelBuilder.Entity<Budget>(entity =>
            {
                entity.ToTable("Budget");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Expenditure).HasColumnType("decimal(8, 3)");

                entity.Property(e => e.Income).HasColumnType("decimal(8, 3)");

                entity.Property(e => e.MonthlyBalance).HasColumnType("decimal(8, 3)");

                entity.Property(e => e.Savings).HasColumnType("decimal(8, 3)");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Budgets)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Budget__UserID__29572725");
            });

            modelBuilder.Entity<Feedback>(entity =>
            {
                entity.ToTable("Feedback");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Attachment)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Comments)
                    .HasMaxLength(5000)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Feedbacks)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Feedback__UserID__403A8C7D");
            });

            modelBuilder.Entity<MedicalReport>(entity =>
            {
                entity.ToTable("MedicalReport");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Attachment)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Comments)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.GivenBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Title)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.MedicalReports)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__MedicalRe__UserI__3A81B327");
            });

            modelBuilder.Entity<Note>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Attachment)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Notes)
                    .HasMaxLength(5000)
                    .IsUnicode(false);

                entity.Property(e => e.Subject)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Title)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Type)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.UpdatedDate).HasColumnType("datetime");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Notes)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Notes__UserID__3D5E1FD2");
            });

            modelBuilder.Entity<PastAchievement>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Attachment)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Comment)
                    .HasMaxLength(5000)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.GivenBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Link)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Title)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Type)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.PastAchievements)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__PastAchie__UserI__45F365D3");
            });

            modelBuilder.Entity<RecordMedicine>(entity =>
            {
                entity.ToTable("RecordMedicine");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.EndDate).HasColumnType("datetime");

                entity.Property(e => e.MedicineDose)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MedicineName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.MedicineReaction)
                    .HasMaxLength(5000)
                    .IsUnicode(false);

                entity.Property(e => e.ScheduleTime)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.StartDate).HasColumnType("datetime");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.RecordMedicines)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__RecordMed__UserI__48CFD27E");
            });

            modelBuilder.Entity<RecordMeeting>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Attachment)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Link)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.MeetingPlace)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.MeetingTime).HasColumnType("datetime");

                entity.Property(e => e.MeetingWith)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasMaxLength(5000)
                    .IsUnicode(false);

                entity.Property(e => e.UpdatedDate).HasColumnType("datetime");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.RecordMeetings)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__RecordMee__UserI__4316F928");
            });

            modelBuilder.Entity<RecordVaccine>(entity =>
            {
                entity.ToTable("RecordVaccine");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.DueOn).HasColumnType("datetime");

                entity.Property(e => e.GivenOn).HasColumnType("datetime");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.VaccineDetailId).HasColumnName("VaccineDetailID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.RecordVaccines)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__RecordVac__UserI__34C8D9D1");

                entity.HasOne(d => d.VaccineDetail)
                    .WithMany(p => p.RecordVaccines)
                    .HasForeignKey(d => d.VaccineDetailId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__RecordVac__Vacci__33D4B598");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("User");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Phone)
                    .HasMaxLength(10)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<UserSecurityQa>(entity =>
            {
                entity.ToTable("UserSecurityQA");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.SecurityAnswer)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.SecurityQuestion)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserSecurityQas)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__UserSecur__UserI__267ABA7A");
            });

            modelBuilder.Entity<VaccineAge>(entity =>
            {
                entity.ToTable("VaccineAge");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Age)
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<VaccineAgeMapping>(entity =>
            {
                entity.ToTable("VaccineAgeMapping");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.VaccineAgeId).HasColumnName("VaccineAgeID");

                entity.Property(e => e.VaccineDoseId).HasColumnName("VaccineDoseID");

                entity.HasOne(d => d.VaccineAge)
                    .WithMany(p => p.VaccineAgeMappings)
                    .HasForeignKey(d => d.VaccineAgeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__VaccineAg__Vacci__300424B4");

                entity.HasOne(d => d.VaccineDose)
                    .WithMany(p => p.VaccineAgeMappings)
                    .HasForeignKey(d => d.VaccineDoseId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__VaccineAg__Vacci__30F848ED");
            });

            modelBuilder.Entity<VaccineDose>(entity =>
            {
                entity.ToTable("VaccineDose");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Name)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

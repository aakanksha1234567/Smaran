using API.Models;
using API.Models;
using Microsoft.EntityFrameworkCore;
using API.RequestModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.ResponseModels;
using Microsoft.Data.SqlClient;
using System.Data;

namespace SmaranAPI.Services
{
    public interface IUserService
    {
        (bool,int) Authenticate(string email, string password);
        IList<User> GetAll();
        User GetByEmail(string email);
        User GetById(int id);
        ResponseObject Add(UserRequest userRequest);
        bool UpdatePassword(UpdatePasswordRequest updatePasswordRequest);
        IList<NotificationResponse> GetNotifications(int userId);
    }
    public class UserService : IUserService
    {
        private readonly SmaranContext _dbContext;
        public UserService(SmaranContext dbContext)
        {
            _dbContext = dbContext;
        }
        public ResponseObject Add(UserRequest userRequest)
        {

            bool isEmailExist = CheckEmailExists(userRequest.Email);
            if (!isEmailExist)
            {

                var qaList = new List<UserSecurityQa>();
                foreach (var qa in userRequest.SecurityQas)
                {
                    qaList.Add(
                        new UserSecurityQa()
                        {
                            SecurityQuestion = qa.SecurityQuestion,
                            SecurityAnswer = qa.SecurityAnswer
                        }
                    );
                }
                var userEntity = new User()
                {
                    Password = userRequest.Password,
                    FirstName = userRequest.FirstName,
                    LastName = userRequest.LastName,
                    IsSelf = userRequest.IsSelf,
                    Phone = userRequest.Phone,
                    Email = userRequest.Email,
                    CreatedDate = DateTime.Now,
                    UserSecurityQas = qaList
                };

                _dbContext.Users.Add(userEntity);

                _dbContext.SaveChanges();
                return new ResponseObject() { Data = userEntity.Id };
            }
            else
            {
                return new ResponseObject() { Error = "UE1" };
            }
        }

        public (bool,int) Authenticate(string email, string password)
        {
            var user = _dbContext.Users.FirstOrDefault(u => u.Email.ToLower() == email.ToLower());
            if (user != null)
            {
                if (user.Password == password)
                {
                    return (true, user.Id);
                }

                return (false,0);
            }
            return (false,0);
        }

        public IList<User> GetAll()
        {
            return _dbContext.Users
                .Include(u => u.Appointments)
                .Include(u => u.Feedbacks)
                .Include(u => u.MedicalReports)
                .Include(u => u.Notes)
                .Include(u => u.RecordMedicines)
                .Include(u => u.RecordMeetings)
                .Include(u => u.UserSecurityQas)
                .ToList();
        }

        public User GetByEmail(string email)
        {
            return _dbContext.Users
                .Include(u => u.Appointments)
                .Include(u => u.Feedbacks)
                .Include(u => u.MedicalReports)
                .Include(u => u.Notes)
                .Include(u => u.RecordMedicines)
                .Include(u => u.RecordMeetings)
                .Include(u => u.UserSecurityQas)
                .FirstOrDefault(u=>u.Email.ToLower() == email.ToLower().Trim());
        }

        public User GetById(int id)
        {
            return _dbContext.Users
                .Include(u => u.Appointments)
                .Include(u => u.Feedbacks)
                .Include(u => u.MedicalReports)
                .Include(u => u.Notes)
                .Include(u => u.RecordMedicines)
                .Include(u => u.RecordMeetings)
                .Include(u => u.UserSecurityQas)
                .FirstOrDefault(u => u.Id == id);
        }

        public bool UpdatePassword(UpdatePasswordRequest updatePasswordRequest)
        {
            var user = _dbContext.Users.FirstOrDefault(u => u.Email.ToLower() == updatePasswordRequest.Email.ToLower());
            if (user != null)
            {
                var userSecurityQas = _dbContext.UserSecurityQas.FirstOrDefault(u => u.SecurityQuestion.ToLower() == updatePasswordRequest.SecurityQuestion.ToLower()
                                                            && u.SecurityAnswer.ToLower() == updatePasswordRequest.SecurityAnswer.ToLower());
                if (userSecurityQas != null)
                {
                    user.Password = updatePasswordRequest.Password;
                    _dbContext.SaveChanges();
                    return true;
                }

                return false;
            }
            return false;
        }

        public bool CheckEmailExists(string email)
        {
            bool retVal = false;
            var user = _dbContext.Users.FirstOrDefault(u => u.Email.ToLower() == email.ToLower());
            if (user != null)
                retVal = true;
            return retVal;
        }

        public IList<NotificationResponse> GetNotifications(int userId)
        {
            var Notifications = new List<NotificationResponse>();

            using (var command = _dbContext.Database.GetDbConnection().CreateCommand())
            {
                command.CommandText = "GetNotifications";
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.Add(new SqlParameter("@UserID", userId));

                _dbContext.Database.OpenConnection();

                using (var result = command.ExecuteReader())
                {
                    while (result.Read())
                    {
                        Notifications.Add(
                                new NotificationResponse()
                                {
                                    TypeOfMeeting = result["TypeOfMeeting"] == DBNull.Value ? 0 : Convert.ToInt32(result["TypeOfMeeting"]),
                                    Description = result["Description"] == DBNull.Value ? "" : Convert.ToString(result["Description"]),
                                    ScheduleTime = Convert.ToDateTime(result["ScheduleTime"]),
                                    FileAttachment = result["FileAttachment"] == DBNull.Value ? "" : Convert.ToString(result["FileAttachment"]),
                                }
                            );
                    }
                }
            }

            return Notifications;
        }

    }
}

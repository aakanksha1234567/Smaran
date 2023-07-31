using API.Models;
using SmaranAPI.Models;
using SmaranAPI.RequestModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmaranAPI.Services
{
    public interface IUserService
    {
        bool Authenticate(string email, string password);
        IList<User> GetAll();
        ResponseObject Add(UserRequest userRequest);
        bool UpdatePassword(UpdatePasswordRequest updatePasswordRequest);
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
            else {
                return new ResponseObject() { Error = "UE1" };
            }
        }

        public bool Authenticate(string email, string password)
        {
            var user = _dbContext.Users.FirstOrDefault(u => u.Email.ToLower() == email.ToLower());
            if (user != null)
            {
                if (user.Password == password)
                {
                    return true;
                }

                return false;
            }
            return false;
        }

        public IList<User> GetAll()
        {
            return _dbContext.Users.ToList();
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

    }
}

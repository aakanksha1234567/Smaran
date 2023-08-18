using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Models;
using API.RequestModel;
using Newtonsoft.Json;
using API.Services;

namespace SmaranAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController,Authorize]
    public class AppointmentController : ControllerBase
    {
        private readonly SmaranContext _context;
        private readonly IMapper _mapper;

        public AppointmentController(SmaranContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Appointment
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Appointment>>> GetAppointments()
        {
            return await _context.Appointments.ToListAsync();
        }

        // GET: api/Appointment/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Appointment>> GetAppointment(int id)
        {
            var appointment = await _context.Appointments.FindAsync(id);

            if (appointment == null)
            {
                return NotFound();
            }

            return appointment;
        }

        // GET: api/Appointment/User/5
        [HttpGet("User/{userId}")]
        public async Task<ActionResult<IEnumerable<Appointment>>> GetAppointmentsByUser(int userId)
        {
            return await _context.Appointments.Where(a=>a.UserId == userId && a.IsActive==true).ToListAsync();
        }

        // PUT: api/Appointment/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<ResponseObject> PutAppointment()
        {
            var formCollection = await Request.ReadFormAsync();
            var getModels = formCollection["AppointmentRequest"];
            var id = formCollection["AppointmentId"];

            // upload file funcationality
            var fileName = await FileUploadService.Upload(formCollection);

            var modelData = JsonConvert.DeserializeObject<AppointmentRequest>(getModels);
            var appointment = _mapper.Map<Appointment>(modelData);  
            appointment.UpdateDate = DateTime.Now;
            appointment.Id = Convert.ToInt32(id);

            var appointmentGet = await _context.Appointments.FindAsync(appointment.Id);

            if (appointmentGet != null)
            {
                appointmentGet.AppointmentAt = appointment.AppointmentAt;
                appointmentGet.AppointmentNotes = appointment.AppointmentNotes; 
                appointmentGet.AppointmentAttachment = fileName;
                appointmentGet.AppointmentTime = appointment.AppointmentTime; 
            }

            _context.Entry(appointmentGet).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                if (!AppointmentExists(appointment.Id))
                {
                    return new ResponseObject() { Error = ex.Message }; ;
                }
                else
                {
                    throw;
                }
            }

            return new ResponseObject() { Data = appointmentGet.Id };
        }

        // POST: api/Appointment
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ResponseObject>> PostAppointment()
        {
            try
            {
                // Get For Collection from frontend
                var formCollection = await Request.ReadFormAsync();
                var getModels = formCollection["AppointmentRequest"];

                // upload file funcationality
                var fileName = await FileUploadService.Upload(formCollection);

                var modelData = JsonConvert.DeserializeObject<AppointmentRequest>(getModels);
                var appointment = _mapper.Map<Appointment>(modelData);
                appointment.CreatedDate = DateTime.Now;
                appointment.UpdateDate = DateTime.Now;
                appointment.AppointmentAttachment = fileName;
                appointment.IsActive = true;
                _context.Appointments.Add(appointment);
                await _context.SaveChangesAsync();
                 
                return new ResponseObject() { Data = appointment.Id };
            }
            catch (Exception ex)
            {
                return new ResponseObject() { Error = ex.Message }; ;
            }
        }

        // DELETE: api/Appointment/5
        [HttpDelete("{id}")]
        public async Task<ResponseObject> DeleteAppointment(int id)
        {
            try
            {
                var appointment = await _context.Appointments.FindAsync(id);
                if (appointment == null)
                {
                    return new ResponseObject() { Error = "error while delete appointment" };
                }

                appointment.IsActive = false; 
                _context.Entry(appointment).State = EntityState.Modified;
                await _context.SaveChangesAsync(); 
                return new ResponseObject() { Error = null };
            }
            catch (Exception ex)
            {
                return new ResponseObject() { Error = "error while delete appointment" };
            } 
        }

        private bool AppointmentExists(int id)
        {
            return _context.Appointments.Any(e => e.Id == id);
        } 

    }
}

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
            return await _context.Appointments.Where(a=>a.UserId == userId).ToListAsync();
        }

        // PUT: api/Appointment/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAppointment(int id, AppointmentRequest appointmentRequest)
        {
            var appointment = _mapper.Map<Appointment>(appointmentRequest);
            appointment.Id = id;
            appointment.UpdateDate = DateTime.Now;

            _context.Entry(appointment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppointmentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
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
        public async Task<IActionResult> DeleteAppointment(int id)
        {
            var appointment = await _context.Appointments.FindAsync(id);
            if (appointment == null)
            {
                return NotFound();
            }

            _context.Appointments.Remove(appointment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AppointmentExists(int id)
        {
            return _context.Appointments.Any(e => e.Id == id);
        } 

    }
}

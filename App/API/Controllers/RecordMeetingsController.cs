using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Models;
using API.RequestModel;
using Microsoft.AspNetCore.Authorization;
using API.Services;
using Newtonsoft.Json;

namespace SmaranAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController, Authorize]
    public class RecordMeetingsController : ControllerBase
    {
        private readonly SmaranContext _context;
        private readonly IMapper _mapper;

        public RecordMeetingsController(SmaranContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/RecordMeetings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RecordMeeting>>> GetRecordMeetings()
        {
            return await _context.RecordMeetings.ToListAsync();
        }

        // GET: api/RecordMeetings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RecordMeeting>> GetRecordMeeting(int id)
        {
            var recordMeeting = await _context.RecordMeetings.FindAsync(id);

            if (recordMeeting == null)
            {
                return NotFound();
            }

            return recordMeeting;
        }

        // GET: api/RecordMeetings/User/5
        [HttpGet("User/{userId}")]
        public async Task<ActionResult<IEnumerable<RecordMeeting>>> GetRecordMeetingsByUser(int userId)
        {
            return await _context.RecordMeetings.Where(a => a.UserId == userId).ToListAsync();
        }

        // PUT: api/RecordMeetings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecordMeeting(int id, RecordMeetingRequest recordMeetingRequest)
        {
            var recordMeeting = _mapper.Map<RecordMeeting>(recordMeetingRequest);
            recordMeeting.Id = id;
            recordMeeting.UpdatedDate = DateTime.Now;

            _context.Entry(recordMeeting).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecordMeetingExists(id))
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

        // POST: api/RecordMeetings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ResponseObject>> PostRecordMeeting()
        {
            try
            {
                // Get For Collection from frontend
                var formCollection = await Request.ReadFormAsync();
                var getModels = formCollection["MeetingRequest"];

                // upload file funcationality
                var fileName = await FileUploadService.Upload(formCollection);

                var modelData = JsonConvert.DeserializeObject<MeetingRequest>(getModels);
                var recordMeeting = _mapper.Map<RecordMeeting>(modelData);
            recordMeeting.CreatedDate = DateTime.Now;
            recordMeeting.UpdatedDate = DateTime.Now;
                recordMeeting.Attachment = fileName;
            _context.RecordMeetings.Add(recordMeeting);
            await _context.SaveChangesAsync();
                return new ResponseObject() { Data = recordMeeting.Id };
            }
            catch (Exception ex)
            {
                return new ResponseObject() { Error = ex.Message }; ;
            }
        }

        // DELETE: api/RecordMeetings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecordMeeting(int id)
        {
            var recordMeeting = await _context.RecordMeetings.FindAsync(id);
            if (recordMeeting == null)
            {
                return NotFound();
            }

            _context.RecordMeetings.Remove(recordMeeting);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RecordMeetingExists(int id)
        {
            return _context.RecordMeetings.Any(e => e.Id == id);
        }
    }
}

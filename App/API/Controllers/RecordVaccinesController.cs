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

namespace SmaranAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController, Authorize]
    public class RecordVaccinesController : ControllerBase
    {
        private readonly SmaranContext _context;
        private readonly IMapper _mapper;

        public RecordVaccinesController(SmaranContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/RecordVaccines
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RecordVaccine>>> GetRecordVaccines()
        {
            return await _context.RecordVaccines.ToListAsync();
        }

        // GET: api/RecordVaccines/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RecordVaccine>> GetRecordVaccine(int id)
        {
            var recordVaccine = await _context.RecordVaccines.FindAsync(id);

            if (recordVaccine == null)
            {
                return NotFound();
            }

            return recordVaccine;
        }

        // GET: api/RecordVaccines/User/5
        [HttpGet("User/{userId}")]
        public async Task<ActionResult<IEnumerable<RecordVaccine>>> GetRecordVaccinesByUser(int userId)
        {
            return await _context.RecordVaccines.Where(a => a.UserId == userId).ToListAsync();
        }

        // PUT: api/RecordVaccines/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecordVaccine(int id, RecordVaccineRequest recordVaccineRequest)
        {
            var recordVaccine = _mapper.Map<RecordVaccine>(recordVaccineRequest);
            recordVaccine.Id = id;

            _context.Entry(recordVaccine).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecordVaccineExists(id))
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

        // POST: api/RecordVaccines
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RecordVaccine>> PostRecordVaccine(RecordVaccineRequest recordVaccineRequest)
        {
            var recordVaccine = _mapper.Map<RecordVaccine>(recordVaccineRequest);
            recordVaccine.CreatedDate = DateTime.Now;

            _context.RecordVaccines.Add(recordVaccine);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRecordVaccine", new { id = recordVaccine.Id }, recordVaccine);
        }

        // DELETE: api/RecordVaccines/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecordVaccine(int id)
        {
            var recordVaccine = await _context.RecordVaccines.FindAsync(id);
            if (recordVaccine == null)
            {
                return NotFound();
            }

            _context.RecordVaccines.Remove(recordVaccine);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RecordVaccineExists(int id)
        {
            return _context.RecordVaccines.Any(e => e.Id == id);
        }
    }
}

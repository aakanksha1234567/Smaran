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
    public class MedicalReportsController : ControllerBase
    {
        private readonly SmaranContext _context;
        private readonly IMapper _mapper;

        public MedicalReportsController(SmaranContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/MedicalReports
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MedicalReport>>> GetMedicalReports()
        {
            return await _context.MedicalReports.ToListAsync();
        }

        // GET: api/MedicalReports/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MedicalReport>> GetMedicalReport(int id)
        {
            var MedicalReport = await _context.MedicalReports.FindAsync(id);

            if (MedicalReport == null)
            {
                return NotFound();
            }

            return MedicalReport;
        }

        // GET: api/MedicalReports/User/5
        [HttpGet("User/{userId}")]
        public async Task<ActionResult<IEnumerable<MedicalReport>>> GetMedicalReportsByUser(int userId)
        {
            return await _context.MedicalReports.Where(a => a.UserId == userId).ToListAsync();
        }

        // PUT: api/MedicalReports/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMedicalReport(int id, MedicalReportRequest MedicalReportRequest)
        {
            var MedicalReport = _mapper.Map<MedicalReport>(MedicalReportRequest);
            MedicalReport.Id = id;

            _context.Entry(MedicalReport).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MedicalReportExists(id))
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

        // POST: api/MedicalReports
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MedicalReport>> PostMedicalReport(MedicalReportRequest MedicalReportRequest)
        {
            var MedicalReport = _mapper.Map<MedicalReport>(MedicalReportRequest);
            MedicalReport.CreatedDate = DateTime.Now;

            _context.MedicalReports.Add(MedicalReport);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                if (MedicalReportExists(MedicalReport.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetMedicalReport", new { id = MedicalReport.Id }, MedicalReport);
        }

        // DELETE: api/MedicalReports/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMedicalReport(int id)
        {
            var MedicalReport = await _context.MedicalReports.FindAsync(id);
            if (MedicalReport == null)
            {
                return NotFound();
            }

            _context.MedicalReports.Remove(MedicalReport);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MedicalReportExists(int id)
        {
            return _context.MedicalReports.Any(e => e.Id == id);
        }
    }
}

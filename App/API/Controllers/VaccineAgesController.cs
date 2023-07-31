using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmaranAPI.Models;
using SmaranAPI.RequestModel;

namespace SmaranAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VaccineAgesController : ControllerBase
    {
        private readonly SmaranContext _context;
        private readonly IMapper _mapper;

        public VaccineAgesController(SmaranContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/VaccineAges
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VaccineAge>>> GetVaccineAges()
        {
            return await _context.VaccineAges.ToListAsync();
        }

        // GET: api/VaccineAges/5
        [HttpGet("{id}")]
        public async Task<ActionResult<VaccineAge>> GetVaccineAge(int id)
        {
            var vaccineAge = await _context.VaccineAges.FindAsync(id);

            if (vaccineAge == null)
            {
                return NotFound();
            }

            return vaccineAge;
        }

        // PUT: api/VaccineAges/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVaccineAge(int id, VaccineAgeRequest vaccineAgeRequest)
        {
            var vaccineAge = _mapper.Map<VaccineAge>(vaccineAgeRequest);
            vaccineAge.Id = id;

            _context.Entry(vaccineAge).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VaccineAgeExists(id))
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

        // POST: api/VaccineAges
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<VaccineAge>> PostVaccineAge(VaccineAgeRequest vaccineAgeRequest)
        {
            var vaccineAge = _mapper.Map<VaccineAge>(vaccineAgeRequest);

            _context.VaccineAges.Add(vaccineAge);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVaccineAge", new { id = vaccineAge.Id }, vaccineAge);
        }

        // DELETE: api/VaccineAges/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVaccineAge(int id)
        {
            var vaccineAge = await _context.VaccineAges.FindAsync(id);
            if (vaccineAge == null)
            {
                return NotFound();
            }

            _context.VaccineAges.Remove(vaccineAge);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VaccineAgeExists(int id)
        {
            return _context.VaccineAges.Any(e => e.Id == id);
        }
    }
}

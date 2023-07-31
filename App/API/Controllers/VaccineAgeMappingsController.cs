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
    public class VaccineAgeMappingsController : ControllerBase
    {
        private readonly SmaranContext _context;
        private readonly IMapper _mapper;

        public VaccineAgeMappingsController(SmaranContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/VaccineAgeMappings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VaccineAgeMapping>>> GetVaccineAgeMappings()
        {
            return await _context.VaccineAgeMappings.ToListAsync();
        }

        // GET: api/VaccineAgeMappings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<VaccineAgeMapping>> GetVaccineAgeMapping(int id)
        {
            var vaccineAgeMapping = await _context.VaccineAgeMappings.FindAsync(id);

            if (vaccineAgeMapping == null)
            {
                return NotFound();
            }

            return vaccineAgeMapping;
        }

        // PUT: api/VaccineAgeMappings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVaccineAgeMapping(int id, VaccineAgeMappingRequest vaccineAgeMappingRequest)
        {
            var vaccineAgeMapping = _mapper.Map<VaccineAgeMapping>(vaccineAgeMappingRequest);
            vaccineAgeMapping.Id = id;

            _context.Entry(vaccineAgeMapping).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VaccineAgeMappingExists(id))
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

        // POST: api/VaccineAgeMappings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<VaccineAgeMapping>> PostVaccineAgeMapping(VaccineAgeMappingRequest vaccineAgeMappingRequest)
        {
            var vaccineAgeMapping = _mapper.Map<VaccineAgeMapping>(vaccineAgeMappingRequest);

            _context.VaccineAgeMappings.Add(vaccineAgeMapping);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVaccineAgeMapping", new { id = vaccineAgeMapping.Id }, vaccineAgeMapping);
        }

        // DELETE: api/VaccineAgeMappings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVaccineAgeMapping(int id)
        {
            var vaccineAgeMapping = await _context.VaccineAgeMappings.FindAsync(id);
            if (vaccineAgeMapping == null)
            {
                return NotFound();
            }

            _context.VaccineAgeMappings.Remove(vaccineAgeMapping);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VaccineAgeMappingExists(int id)
        {
            return _context.VaccineAgeMappings.Any(e => e.Id == id);
        }
    }
}

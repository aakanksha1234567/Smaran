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
    public class VaccineDosesController : ControllerBase
    {
        private readonly SmaranContext _context;
        private readonly IMapper _mapper;

        public VaccineDosesController(SmaranContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/VaccineDoses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VaccineDose>>> GetVaccineDoses()
        {
            return await _context.VaccineDoses.ToListAsync();
        }

        // GET: api/VaccineDoses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<VaccineDose>> GetVaccineDose(int id)
        {
            var vaccineDose = await _context.VaccineDoses.FindAsync(id);

            if (vaccineDose == null)
            {
                return NotFound();
            }

            return vaccineDose;
        }

        // PUT: api/VaccineDoses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVaccineDose(int id, VaccineDoseRequest vaccineDoseRequest)
        {
            var vaccineDose = _mapper.Map<VaccineDose>(vaccineDoseRequest);
            vaccineDose.Id = id;

            _context.Entry(vaccineDose).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VaccineDoseExists(id))
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

        // POST: api/VaccineDoses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<VaccineDose>> PostVaccineDose(VaccineDoseRequest vaccineDoseRequest)
        {
            var vaccineDose = _mapper.Map<VaccineDose>(vaccineDoseRequest);
            _context.VaccineDoses.Add(vaccineDose);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVaccineDose", new { id = vaccineDose.Id }, vaccineDose);
        }

        // DELETE: api/VaccineDoses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVaccineDose(int id)
        {
            var vaccineDose = await _context.VaccineDoses.FindAsync(id);
            if (vaccineDose == null)
            {
                return NotFound();
            }

            _context.VaccineDoses.Remove(vaccineDose);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VaccineDoseExists(int id)
        {
            return _context.VaccineDoses.Any(e => e.Id == id);
        }
    }
}

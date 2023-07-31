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
    public class PastAchievementsController : ControllerBase
    {
        private readonly SmaranContext _context;
        private readonly IMapper _mapper;

        public PastAchievementsController(SmaranContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/PastAchievements
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PastAchievement>>> GetPastAchievements()
        {
            return await _context.PastAchievements.ToListAsync();
        }

        // GET: api/PastAchievements/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PastAchievement>> GetPastAchievement(int id)
        {
            var pastAchievement = await _context.PastAchievements.FindAsync(id);

            if (pastAchievement == null)
            {
                return NotFound();
            }

            return pastAchievement;
        }

        // PUT: api/PastAchievements/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPastAchievement(int id, PastAchievementRequest pastAchievementRequest)
        {
            var pastAchievement = _mapper.Map<PastAchievement>(pastAchievementRequest);
            pastAchievement.Id = id;

            _context.Entry(pastAchievement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PastAchievementExists(id))
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

        // POST: api/PastAchievements
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PastAchievement>> PostPastAchievement(PastAchievementRequest pastAchievementRequest)
        {
            var pastAchievement = _mapper.Map<PastAchievement>(pastAchievementRequest);
            pastAchievement.CreatedDate = DateTime.Now;

            _context.PastAchievements.Add(pastAchievement);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPastAchievement", new { id = pastAchievement.Id }, pastAchievement);
        }

        // DELETE: api/PastAchievements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePastAchievement(int id)
        {
            var pastAchievement = await _context.PastAchievements.FindAsync(id);
            if (pastAchievement == null)
            {
                return NotFound();
            }

            _context.PastAchievements.Remove(pastAchievement);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PastAchievementExists(int id)
        {
            return _context.PastAchievements.Any(e => e.Id == id);
        }
    }
}

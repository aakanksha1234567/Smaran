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

namespace SmaranAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController,Authorize]
    public class BudgetsController : ControllerBase
    {
        private readonly SmaranContext _context;
        private readonly IMapper _mapper;

        public BudgetsController(SmaranContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Budget
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Budget>>> GetBudgets()
        {
            return await _context.Budgets.ToListAsync();
        }

        // GET: api/Budget/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Budget>> GetBudget(int id)
        {
            var Budget = await _context.Budgets.FindAsync(id);

            if (Budget == null)
            {
                return NotFound();
            }

            return Budget;
        }

        // GET: api/Budget/User/5
        [HttpGet("User/{userId}")]
        public async Task<ActionResult<IEnumerable<Budget>>> GetBudgetsByUser(int userId)
        {
            return await _context.Budgets.Where(a => a.UserId == userId).ToListAsync();
        }

        // PUT: api/Budget/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBudget(int id, BudgetRequest BudgetRequest)
        {
            var Budget = _mapper.Map<Budget>(BudgetRequest);
            Budget.Id = id;

            _context.Entry(Budget).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BudgetExists(id))
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

        // POST: api/Budget
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Budget>> PostBudget(BudgetRequest BudgetRequest)
        {
            var Budget = _mapper.Map<Budget>(BudgetRequest);
            Budget.CreatedDate = DateTime.Now;
            _context.Budgets.Add(Budget);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBudget", new { id = Budget.Id }, Budget);
        }

        // DELETE: api/Budget/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBudget(int id)
        {
            var Budget = await _context.Budgets.FindAsync(id);
            if (Budget == null)
            {
                return NotFound();
            }

            _context.Budgets.Remove(Budget);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BudgetExists(int id)
        {
            return _context.Budgets.Any(e => e.Id == id);
        }
    }
}

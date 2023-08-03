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
    public class RecordMedicinesController : ControllerBase
    {
        private readonly SmaranContext _context;
        private readonly IMapper _mapper;

        public RecordMedicinesController(SmaranContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/RecordMedicines
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RecordMedicine>>> GetRecordMedicines()
        {
            return await _context.RecordMedicines.ToListAsync();
        }

        // GET: api/RecordMedicines/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RecordMedicine>> GetRecordMedicine(int id)
        {
            var recordMedicine = await _context.RecordMedicines.FindAsync(id);

            if (recordMedicine == null)
            {
                return NotFound();
            }

            return recordMedicine;
        }

        // GET: api/RecordMedicines/User/5
        [HttpGet("User/{userId}")]
        public async Task<ActionResult<IEnumerable<RecordMedicine>>> GetRecordMedicinesByUser(int userId)
        {
            return await _context.RecordMedicines.Where(a => a.UserId == userId).ToListAsync();
        }

        // PUT: api/RecordMedicines/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecordMedicine(int id, RecordMedicineRequest recordMedicineRequest)
        {
            var recordMedicine = _mapper.Map<RecordMedicine>(recordMedicineRequest);
            recordMedicine.Id = id;

            _context.Entry(recordMedicine).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecordMedicineExists(id))
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

        // POST: api/RecordMedicines
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RecordMedicine>> PostRecordMedicine(RecordMedicineRequest recordMedicineRequest)
        {
            var recordMedicine = _mapper.Map<RecordMedicine>(recordMedicineRequest);
            recordMedicine.CreatedDate = DateTime.Now;

            _context.RecordMedicines.Add(recordMedicine);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRecordMedicine", new { id = recordMedicine.Id }, recordMedicine);
        }

        // DELETE: api/RecordMedicines/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecordMedicine(int id)
        {
            var recordMedicine = await _context.RecordMedicines.FindAsync(id);
            if (recordMedicine == null)
            {
                return NotFound();
            }

            _context.RecordMedicines.Remove(recordMedicine);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RecordMedicineExists(int id)
        {
            return _context.RecordMedicines.Any(e => e.Id == id);
        }
    }
}

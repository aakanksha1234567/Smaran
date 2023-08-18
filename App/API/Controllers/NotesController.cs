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
using Microsoft.Extensions.Hosting.Internal;

namespace SmaranAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController, Authorize]
    public class NotesController : ControllerBase
    {
        private readonly SmaranContext _context;
        private readonly IMapper _mapper;

        public NotesController(SmaranContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
            
        }

        // GET: api/Notes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Note>>> GetNotes()
        {
            return await _context.Notes.ToListAsync();
        }

        // GET: api/Notes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Note>> GetNote(int id)
        {
            var note = await _context.Notes.FindAsync(id);

            if (note == null)
            {
                return NotFound();
            }

            return note;
        }

        // GET: api/Notes/5
        [HttpGet("Type/{type}")]
        public async Task<ActionResult<IEnumerable<Note>>> GetNotes(string type)
        {
            return await _context.Notes.Where(n=>n.Type.ToLower() == type.ToLower().Trim()).ToListAsync();
        }

        // GET: api/Notes/User/5
        [HttpGet("User/{userId}")]
        public async Task<ActionResult<IEnumerable<Note>>> GetNotesByUser(int userId)
        {
            return await _context.Notes.Where(a => a.UserId == userId).ToListAsync();
        }

        // PUT: api/Notes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNote(int id, NoteRequest noteRequest)
        {
            var note = _mapper.Map<Note>(noteRequest);
            note.Id = id;
            note.UpdatedDate = DateTime.Now;

            _context.Entry(note).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NoteExists(id))
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

        // POST: api/Notes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ResponseObject>> PostNote()
        {
            try
            {
                // Get For Collection from frontend
                var formCollection = await Request.ReadFormAsync();
                var getModels = formCollection["NoteRequest"];

                // upload file funcationality
                var fileName = await FileUploadService.Upload(formCollection);

                var modelData = JsonConvert.DeserializeObject<NoteRequest>(getModels);
                var note = _mapper.Map<Note>(modelData);
            note.UpdatedDate = DateTime.Now;
            note.CreatedDate = DateTime.Now;
                note.Attachment = fileName;

            _context.Notes.Add(note);
                await _context.SaveChangesAsync();

                return new ResponseObject() { Data = note.Id };
               
            }
            catch (Exception ex)
            {
                return new ResponseObject() { Error = ex.Message }; ;
            }

        
        }

        // DELETE: api/Notes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNote(int id)
        {
            var note = await _context.Notes.FindAsync(id);
            if (note == null)
            {
                return NotFound();
            }

            _context.Notes.Remove(note);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NoteExists(int id)
        {
            return _context.Notes.Any(e => e.Id == id);
        }
    }
}

using AutoMapper;
using API.Models;
using API.RequestModel;
using API.RequestModel;
using SmaranAPI.Controllers;

namespace SmaranAPI
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<AppointmentRequest, Appointment>();
            CreateMap<NoteRequest, Note>();
            CreateMap<FeedbackRequest, Feedback>();
            CreateMap<RecordMeetingRequest, RecordMeeting>();
            CreateMap<RecordMedicineRequest, RecordMedicine>();
            CreateMap<MedicalReportRequest, MedicalReport>();
            CreateMap<MeetingRequest, RecordMeeting>();
            // Add other mappings here if needed
        }
    }
}

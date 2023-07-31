using AutoMapper;
using SmaranAPI.Models;
using SmaranAPI.RequestModel;

namespace SmaranAPI
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<AppointmentRequest, Appointment>();
            CreateMap<VaccineAgeRequest, VaccineAge>();
            CreateMap<VaccineDoseRequest, VaccineDose>();
            CreateMap<VaccineAgeMappingRequest, VaccineAgeMapping>();
            CreateMap<RecordVaccineRequest, RecordVaccine>();
            CreateMap<NoteRequest, Note>();
            CreateMap<FeedbackRequest, Feedback>();
            CreateMap<RecordMeetingRequest, RecordMeeting>();
            CreateMap<PastAchievementRequest, PastAchievement>();
            CreateMap<RecordMedicineRequest, RecordMedicine>();
            // Add other mappings here if needed
        }
    }
}

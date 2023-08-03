using AutoMapper;
using API.Models;
using API.RequestModel;
using API.RequestModel;

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
            CreateMap<BudgetRequest, Budget>();
            CreateMap<MedicalReportRequest, MedicalReport>();
            // Add other mappings here if needed
        }
    }
}

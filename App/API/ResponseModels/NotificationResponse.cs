namespace API.ResponseModels
{
    public class NotificationResponse
    {
        public string Description { get; set; }
        public DateTime ScheduleTime { get; set; }
        public int TypeOfMeeting { get; set; }
        public string FileAttachment { get; set; }

    }
}

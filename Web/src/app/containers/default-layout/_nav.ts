import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
  },
  {
    title: true,
    name: 'Health'
  }, 
  
  {
    name: 'Record Appointment',
    url: '/health/recordappointment',
    linkProps: { fragment: 'someAnchor' },
  },
  {
    name: 'Past Appointment Records',
    url: '/health/pastappointmentrecords',
  },
  {
    name: 'Store Medical Report',
    url: '/health/recordmedicalreport',
    linkProps: { fragment: 'someAnchor' },
  },
  {
    name: 'Past Medical Report',
    url: '/health/pastmedicalrecords',
    linkProps: { fragment: 'someAnchor' },
  },
  {
    title: true,
    name: 'Medications'
  },
  {
    name: 'Record Medicine',
    url: '/medications/record-medicine',
    
  },
  
  {
    name: 'Past Medicine Record',
    url: '/medications/past-medicine',
    linkProps: { fragment: 'someAnchor' },
    
  },
  {
    title: true,
    name: 'Utilities'
  },
 
  {
    name: 'Write Notes',
    url: '/corporate/recordnotes',
    linkProps: { fragment: 'someAnchor' },
    
  },
  {
    name: 'Past Notes',
    url: '/corporate/pastnotes',
    linkProps: { fragment: 'someAnchor' },
    
  },
  {
    name: 'Record Meetings',
    url: '/corporate/recordmeetings',
    linkProps: { fragment: 'someAnchor' },
    
  },
  {
    title: true,
    name: 'Reach out to us'
  },
  {
    name: 'Feedback',
    url: '/reachout/feedback',
    linkProps: { fragment: 'someAnchor' },
    
  }
];

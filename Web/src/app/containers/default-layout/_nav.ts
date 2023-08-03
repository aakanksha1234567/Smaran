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
    name: 'Record Vaccination',
     url: '/health/recordvaccine',
  },
  {
    name: 'Record Appointment',
    url: '/health/recordappointment',
    linkProps: { fragment: 'someAnchor' },
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
    name: 'Corporate'
  },
  {
    name: 'Record Tasks',
    url: '/corporate/recordtasks',
    linkProps: { fragment: 'someAnchor' },
    
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
    name: 'Store Achievements',
    url: '/corporate/recordachievements',
    linkProps: { fragment: 'someAnchor' },
    
  },
  {
    name: 'Past Achievements',
    url: '/corporate/pastachievements',
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

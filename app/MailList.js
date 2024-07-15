'use client'
const MailList = {
  Inbox: [
    {
      "id": 0,
      "sender_name": "John Doe",
      "title": "Meeting Reminder",
      "desc": "Don't forget about the meeting tomorrow at 10 AM.",
      "time": "9:00 AM",
      "date": "14 July"
    },
    {
      "id": 1,
      "sender_name": "Jane Smith",
      "title": "Project Update",
      "desc": "Here is the latest update on the project.",
      "time": "8:30 AM",
      "date": "14 July"
    },
    {
      "id": 2,
      "sender_name": "Sam Wilson",
      "title": "Invoice Attached",
      "desc": "Please find the invoice attached for your reference.",
      "time": "7:45 AM",
      "date": "14 July"
    },
    {
      "id": 3,
      "sender_name": "Alice Brown",
      "title": "Dinner Plans",
      "desc": "Are we still on for dinner tonight?",
      "time": "6:20 AM",
      "date": "14 July"
    },
    {
      "id": 4,
      "sender_name": "Bob Johnson",
      "title": "Workshop Invitation",
      "desc": "You're invited to attend our workshop next week.",
      "time": "5:50 AM",
      "date": "8 July"
    },
    {
      "id": 5,
      "sender_name": "Emily Davis",
      "title": "Vacation Request",
      "desc": "I would like to request vacation days for next month.",
      "time": "4:15 AM",
      "date": "7 July"
    },
    {
      "id": 6,
      "sender_name": "Michael Clark",
      "title": "Weekly Report",
      "desc": "Attached is the weekly report for your review.",
      "time": "3:30 AM",
      "date": "6 July"
    },
    {
      "id": 7,
      "sender_name": "Jessica Lee",
      "title": "Birthday Party",
      "desc": "You're invited to my birthday party this Saturday.",
      "time": "2:10 AM",
      "date": "5 July"
    },
    {
      "id": 8,
      "sender_name": "Daniel Martinez",
      "title": "Conference Details",
      "desc": "Here are the details for the upcoming conference.",
      "time": "1:45 AM",
      "date": "4 July"
    },
    {
      "id": 9,
      "sender_name": "Sophia Gonzalez",
      "title": "Job Application",
      "desc": "Thank you for applying. We will get back to you soon.",
      "time": "12:30 AM",
      "date": "3 July"
    }
  ],
  Starred: [
    {
      "id": 0,
      "sender_name": "Peter Parker",
      "title": "New Opportunity",
      "desc": "Check out this amazing new opportunity!",
      "time": "11:00 AM",
      "date": "1 July"
    },
    {
      "id": 1,
      "sender_name": "Clark Kent",
      "title": "Daily Planet",
      "desc": "Please submit your article by EOD.",
      "time": "10:30 AM",
      "date": "2 July"
    },
    {
      "id": 2,
      "sender_name": "Bruce Wayne",
      "title": "Gala Invitation",
      "desc": "You are invited to the Wayne Foundation Gala.",
      "time": "9:45 AM",
      "date": "3 July"
    },
    {
      "id": 3,
      "sender_name": "Diana Prince",
      "title": "Charity Event",
      "desc": "Join us for a charity event this weekend.",
      "time": "8:20 AM",
      "date": "4 July"
    },
    {
      "id": 4,
      "sender_name": "Tony Stark",
      "title": "Stark Industries",
      "desc": "We have a new product launch next month.",
      "time": "7:50 AM",
      "date": "5 July"
    },
    {
      "id": 5,
      "sender_name": "Steve Rogers",
      "title": "Training Session",
      "desc": "Don't forget about the training session tomorrow.",
      "time": "6:15 AM",
      "date": "6 July"
    },
    {
      "id": 6,
      "sender_name": "Natasha Romanoff",
      "title": "Mission Briefing",
      "desc": "Please review the mission briefing before the meeting.",
      "time": "5:30 AM",
      "date": "7 July"
    },
    {
      "id": 7,
      "sender_name": "Wanda Maximoff",
      "title": "Team Meeting",
      "desc": "Team meeting is scheduled for Monday.",
      "time": "4:10 AM",
      "date": "8 July"
    },
    {
      "id": 8,
      "sender_name": "Scott Lang",
      "title": "Ant-Man",
      "desc": "Let's catch up for coffee sometime this week.",
      "time": "3:45 AM",
      "date": "9 July"
    },
    {
      "id": 9,
      "sender_name": "Stephen Strange",
      "title": "Sorcerer Supreme",
      "desc": "I need your assistance with a new spell.",
      "time": "2:30 AM",
      "date": "10 July"
    }
  ],
  Snoozed: [
    {
      "id": 0,
      "sender_name": "Nick Fury",
      "title": "S.H.I.E.L.D. Update",
      "desc": "Update on the latest S.H.I.E.L.D. activities.",
      "time": "12:00 PM",
      "date": "1 June"
    },
    {
      "id": 1,
      "sender_name": "Thor Odinson",
      "title": "Asgardian News",
      "desc": "News from Asgard.",
      "time": "11:30 AM",
      "date": "2 June"
    },
    {
      "id": 2,
      "sender_name": "Loki Laufeyson",
      "title": "Trickster Plans",
      "desc": "Discussing plans for mischief.",
      "time": "10:45 AM",
      "date": "3 June"
    },
    {
      "id": 3,
      "sender_name": "Pepper Potts",
      "title": "Stark Industries",
      "desc": "Meeting scheduled with the board of directors.",
      "time": "9:20 AM",
      "date": "4 June"
    },
    {
      "id": 4,
      "sender_name": "Happy Hogan",
      "title": "Security Briefing",
      "desc": "Please attend the security briefing tomorrow.",
      "time": "8:50 AM",
      "date": "5 June"
    },
    {
      "id": 5,
      "sender_name": "James Rhodes",
      "title": "War Machine",
      "desc": "Mission details for the next operation.",
      "time": "7:15 AM",
      "date": "6 June"
    },
    {
      "id": 6,
      "sender_name": "Bucky Barnes",
      "title": "Winter Soldier",
      "desc": "Need to discuss the latest intel.",
      "time": "6:30 AM",
      "date": "7 June"
    },
    {
      "id": 7,
      "sender_name": "Sam Wilson",
      "title": "Falcon",
      "desc": "Let's go over the new flight protocols.",
      "time": "5:10 AM",
      "date": "8 June"
    },
    {
      "id": 8,
      "sender_name": "Peter Quill",
      "title": "Guardians",
      "desc": "Catch up with the Guardians.",
      "time": "4:45 AM",
      "date": "9 June"
    },
    {
      "id": 9,
      "sender_name": "Gamora",
      "title": "Mission Plans",
      "desc": "Discuss the upcoming mission.",
      "time": "3:30 AM",
      "date": "10 June"
    }
  ],
  Sent: [
    {
      "id": 0,
      "sender_name": "T'Challa",
      "title": "Wakanda Forever",
      "desc": "Updates on Wakandan technology.",
      "time": "11:00 PM",
      "date": "20 June"
    },
    {
      "id": 1,
      "sender_name": "Shuri",
      "title": "Lab Results",
      "desc": "Here are the results from the lab tests.",
      "time": "10:30 PM",
      "date": "19 June"
    },
    {
      "id": 2,
      "sender_name": "Okoye",
      "title": "Dora Milaje",
      "desc": "Training schedules for the Dora Milaje.",
      "time": "9:45 PM",
      "date": "18 June"
    },
    {
      "id": 3,
      "sender_name": "Mbaku",
      "title": "Tribal Council",
      "desc": "Minutes from the latest tribal council meeting.",
      "time": "8:20 PM",
      "date": "17 June"
    },
    {
      "id": 4,
      "sender_name": "Nakia",
      "title": "Outreach Program",
      "desc": "Updates on the Wakandan outreach program.",
      "time": "7:50 PM",
      "date": "16 June"
    },
    {
      "id": 5,
      "sender_name": "Erik Killmonger",
      "title": "Challenge",
      "desc": "Details on the upcoming challenge.",
      "time": "6:15 PM",
      "date": "15 June"
    },
    {
      "id": 6,
      "sender_name": "Zuri",
      "title": "Ancestral Plane",
      "desc": "Discussion about the ancestral plane.",
      "time": "5:30 PM",
      "date": "14 June"
    },
    {
      "id": 7,
      "sender_name": "Ramonda",
      "title": "Queen Mother",
      "desc": "Important family matters.",
      "time": "4:10 PM",
      "date": "13 June"
    },
    {
      "id": 8,
      "sender_name": "Ayo",
      "title": "Security Measures",
      "desc": "New security measures in place.",
      "time": "3:45 PM",
      "date": "12 June"
    },
    {
      "id": 9,
      "sender_name": "T'Chaka",
      "title": "Legacy",
      "desc": "Honoring the legacy of our ancestors.",
      "time": "2:30 PM",
      "date": "11 June"
    }
  ],
  Drafts: [
    {
      "id": 0,
      "sender_name": "Hawkeye",
      "title": "Archery Competition",
      "desc": "Details for the upcoming archery competition.",
      "time": "1:00 PM",
      "date": "10 May"
    },
    {
      "id": 1,
      "sender_name": "Vision",
      "title": "Avengers Initiative",
      "desc": "Information about the new Avengers initiative.",
      "time": "12:30 PM",
      "date": "9 May"
    },
    {
      "id": 2,
      "sender_name": "Hank Pym",
      "title": "Pym Particles",
      "desc": "Research notes on Pym Particles.",
      "time": "11:45 AM",
      "date": "8 May"
    },
    {
      "id": 3,
      "sender_name": "Janet van Dyne",
      "title": "Quantum Realm",
      "desc": "Exploring the Quantum Realm.",
      "time": "10:20 AM",
      "date": "7 May"
    },
    {
      "id": 4,
      "sender_name": "Hope van Dyne",
      "title": "Wasp Suit",
      "desc": "Upgrades for the Wasp suit.",
      "time": "9:50 AM",
      "date": "6 May"
    },
    {
      "id": 5,
      "sender_name": "Nick Fury",
      "title": "Secret Mission",
      "desc": "Details about the secret mission.",
      "time": "8:15 AM",
      "date": "5 May"
    },
    {
      "id": 6,
      "sender_name": "Phil Coulson",
      "title": "S.H.I.E.L.D. Protocols",
      "desc": "Review the latest S.H.I.E.L.D. protocols.",
      "time": "7:30 AM",
      "date": "4 May"
    },
    {
      "id": 7,
      "sender_name": "Maria Hill",
      "title": "Strategic Plans",
      "desc": "Strategic plans for the next quarter.",
      "time": "6:10 AM",
      "date": "3 May"
    },
    {
      "id": 8,
      "sender_name": "Agent 13",
      "title": "Field Operations",
      "desc": "Field operations briefing.",
      "time": "5:45 AM",
      "date": "2 May"
    },
    {
      "id": 9,
      "sender_name": "Pepper Potts",
      "title": "Pepper Potts",
      "desc": "Schedule for next week's meetings.",
      "time": "4:30 AM",
      "date": "1 May"
    }
  ],
  Spam: [
    {
      "id": 0,
      "sender_name": "Untrusted Source",
      "title": "Important Information",
      "desc": "Your account needs attention.",
      "time": "5:50 AM",
      "date": "5 April"
    },
    {
      "id": 1,
      "sender_name": "Suspicious Activity",
      "title": "Alert: Suspicious Activity Detected",
      "desc": "Secure your account immediately.",
      "time": "4:15 AM",
      "date": "6 April"
    },
    {
      "id": 2,
      "sender_name": "Fake Offer",
      "title": "Limited Time Offer",
      "desc": "Take advantage of this exclusive offer.",
      "time": "3:30 AM",
      "date": "7 April"
    },
    {
      "id": 3,
      "sender_name": "Spam Sender",
      "title": "Act Now!",
      "desc": "Don't miss out on this opportunity.",
      "time": "2:10 AM",
      "date": "8 April"
    }
  ],
  Archived: [
    {
      "id": 0,
      "sender_name": "Untrusted Source",
      "title": "Important Information",
      "desc": "Your account needs attention.",
      "time": "5:50 AM",
      "date": "5 April"
    },
    {
      "id": 1,
      "sender_name": "Suspicious Activity",
      "title": "Alert: Suspicious Activity Detected",
      "desc": "Secure your account immediately.",
      "time": "4:15 AM",
      "date": "6 April"
    },
    {
      "id": 2,
      "sender_name": "Fake Offer",
      "title": "Limited Time Offer",
      "desc": "Take advantage of this exclusive offer.",
      "time": "3:30 AM",
      "date": "7 April"
    },
    {
      "id": 3,
      "sender_name": "Spam Sender",
      "title": "Act Now!",
      "desc": "Don't miss out on this opportunity.",
      "time": "2:10 AM",
      "date": "8 April"
    }
  ],
  Trash: [
    {
      "id": 0,
      "sender_name": "Phishing Scam",
      "title": "Urgent: Your Account is Compromised",
      "desc": "Click here to secure your account.",
      "time": "9:00 AM",
      "date": "1 April"
    },
    {
      "id": 1,
      "sender_name": "Lottery Win",
      "title": "Congratulations! You've Won!",
      "desc": "Claim your lottery prize now.",
      "time": "8:30 AM",
      "date": "2 April"
    },
    {
      "id": 2,
      "sender_name": "Free Gift",
      "title": "Free Gift for You",
      "desc": "Get your free gift by clicking here.",
      "time": "7:45 AM",
      "date": "3 April"
    },
    {
      "id": 3,
      "sender_name": "Unknown Sender",
      "title": "You've Been Selected",
      "desc": "Click here to find out more.",
      "time": "6:20 AM",
      "date": "4 April"
    }
  ]
};



export default MailList

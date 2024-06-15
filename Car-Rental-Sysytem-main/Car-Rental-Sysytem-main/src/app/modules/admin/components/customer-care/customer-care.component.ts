
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-customer-care',
  templateUrl: './customer-care.component.html',
  styleUrls: ['./customer-care.component.css']
})
export class CustomerCareComponent  {
  queries: any[] = [
    {
      
      subject: 'FAQ1',
      question: 'Which is the best 7 seater car in 10 lakh?',
      answer: 'Maruti Ertiga, Mahindra Bolero, Renault Triber, Mahindra Bolero Neo, etc. Choosing one will depend on several factors such as budget, fuel type, brand preference, specific feature requirements, etc. '
      
    },
    {
      
      subject: 'FAQ2',
      question: 'How can I rent a car?',
      answer: 'To rent a car, you need to create an account and then browse available cars to make a reservation.'
    },
    {
      
      subject:'FAQ3',
      question: 'What are the requirements to rent a car?',
      answer: 'You must be at least 18 years old and possess a valid drivers license.'
    },
    {
      
      subject:'FAQ4',
      question: 'Can I cancel my reservation?',
      answer: 'Yes, you can cancel your reservation at any time before the pickup date.'
    },
    {
      
      subject:'FAQ5',
      question: 'Does XZA Plus S Dark Edition AMT offer cruise control?',
      answer: 'Yes, Tata Nexon XZA Plus S Dark Edition AMT offers cruise control.'
    },
    {
      subject:'FAQ6',
      question: 'What happens if i return the car late?',
      answer: 'A high penalty will be applicable for the amount of time you are late. In order to avoid paying this penalty, you can extend the booking from the app, well in advance.'
    }

  ];

  subjects: string[] = ['FAQ1','FAQ2','FAQ3','FAQ4','FAQ5','FAQ6'];

  constructor() { }

  ngOnInit() {
  }

  getQueriesBySubject(subject: string): any[] {
    return this.queries.filter(query => query.subject === subject);
  }

}

import { Component, OnInit } from '@angular/core';
import { CmspageService } from '../cmspage.service';
import { Contact } from '../contact';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  model = new Contact();
  submitted = false;
  error: any = {};

  constructor(
    private router: Router,
    private cmspageService: CmspageService
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  onSubmit() {
    this.submitted = true;
    return this.cmspageService.contactForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error
    );

  }

  gotoHome() {
    this.router.navigate(['/']);
  }

}

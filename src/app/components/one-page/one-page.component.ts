import { Component, OnInit } from '@angular/core';
import { Sites } from 'src/app/models/sites.model';
import { Users } from 'src/app/models/users.model';
import { CrudService } from 'src/app/services/crud.service';
import { GoogleApiService, UserInfo, } from 'src/app/services/google-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-one-page',
  templateUrl: './one-page.component.html',
  styleUrls: ['./one-page.component.scss'],
})
export class OnePageComponent implements OnInit {

  userInfo?: UserInfo;

  sites: any = {
    domain: '',
    footprint: '',
  };

  user: any = [];

  newSiteAddResult: any = []

  ngOnInit(): void {}

  constructor(
    private readonly googleApi: GoogleApiService,
    private crudService: CrudService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    googleApi.userProfileSubject.subscribe((info) => {
      this.userInfo = info;
      this.findUserByMail()
    });
  }
  
  // Affichage Score
  findUserByMail(): void {
    const body = {
      email: this.userInfo?.info?.email,
    };
    this.crudService.getUserByMail(body).subscribe(
      (response) => {
        this.user = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Ajouter un nouveau Site (Administration)
  saveNewSite(): void {
    const body = {
      domain: this.sites.domain,
      footprint: this.sites.footprint,
    };
    this.crudService.createSite(body).subscribe(
      (response) => {
        this.newSiteAddResult = response
        console.log(response);
        let domainField : any = document.getElementById("domain") as HTMLInputElement | null
        let footprintField : any = document.getElementById("footprint") as HTMLInputElement | null
        domainField.value = ''
        footprintField.value = ''
      },
      (error) => {
        console.log(error);
      }
    );
  }

}

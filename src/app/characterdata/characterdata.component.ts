import { Component, OnInit } from '@angular/core';
import { CharacterdataService } from '../characterdata.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-characterdata',
  templateUrl: './characterdata.component.html',
  styleUrls: ['./characterdata.component.css']
})
export class CharacterdataComponent implements OnInit{

  rowData: any;
  characters: any[];
  name: string;
  species: string;
  genderList: any[] = [{label:'Male', value:'Male'}, {label:'Female', value:'Female'}];
  gender: any;
  alias: string;


  constructor(private characterdataService: CharacterdataService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.fetchTableData();
  }

  handleGenderSelection(event: any) {
    this.gender = event.value;
  }

  clearFields():void{
    this.name = '';
    this.species = '';
    this.gender = '';
    this.alias = '';
  }

  fetchTableData():void{
    this.characterdataService.getData().subscribe(response=>{
      this.characters = response;
    })
  }

  saveCharacter():void{
    const reqBody = {
      name: this.name,
      species: this.species,
      gender: this.gender.value,
      alias: this.alias
    }
    this.characterdataService.putData(reqBody).subscribe(response=>{
      if(response.success == true){
        this.clearFields();
        this.fetchTableData();
      } else {
        this.clearFields();
        alert('Failed to save character. Please try again.');
      }
    })
  }

}

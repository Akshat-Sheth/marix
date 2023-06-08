import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formVisible = false

  generateLink(){
    this.formVisible = true
  }

  cancel(){
    this.formVisible = false
  }

  onSearch(value:any){
    console.log(value.value)
    if(value.value.length === 0){
      this.temp = this.employeeList
    }
    this.temp = this.employeeList.filter(ele => ele.department.toLowerCase().startsWith(value.value))
  }

  selectAll(){
    // console.log(value)
    console.log("hello")
  }

  

  employeeList = [
    {
      id:1,
      name:"akshat",
      department:"Cloud"
    },
    {
      id:2,
      name:"Harsh",
      department:"Cloud"
    },
    {
      id:3,
      name:"Neel",
      department:"Hybrid"
    },
    {
      id:4,
      name:"freya",
      department:"Hybrid"
    },
    {
      id:5,
      name:"hetvi",
      department:"Hybrid"
    },
    {
      id:6,
      name:"Hardik",
      department:"Android"
    },
    {
      id:7,
      name:"Anushka",
      department:"IOS"
    }
  ]

  temp = this.employeeList.map(ele => ele)



}

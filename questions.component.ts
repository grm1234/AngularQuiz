import { Component, OnInit } from '@angular/core';
import { Quiz } from '../questions';
import { Questions } from '../model.questions';
import { Subscribable } from 'rxjs';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  constructor(private question: Quiz) { }
  qObject: Questions[];

  flaf:boolean = false;
  userAns: string[] = [];
  incorrectN:number[] = [];
  correctA:string[] = [];
  wrong:number=0;
  corAns: string[] = ["2", "4", "1", "1", "2", "3", "4", "1", "3", "3"];
  ngOnInit(): void {
    
  }
  loadQuestions():void{
    this.question.loadData().subscribe(data=>this.qObject=data);
  }
  radioChangeHandler1 (event: any){
    this.userAns.push(event.target.value);
  }
  radioChangeHandler2 (event: any){
    this.userAns.push(event.target.value);
  }
  radioChangeHandler3 (event: any){
    this.userAns.push(event.target.value);
  }
  radioChangeHandler4 (event: any){
    this.userAns.push(event.target.value);
  }
  radioChangeHandler5 (event: any){
    this.userAns.push(event.target.value);
  }
  radioChangeHandler6 (event: any){
    this.userAns.push(event.target.value);
  }
  radioChangeHandler7 (event: any){
    this.userAns.push(event.target.value);
  }
  radioChangeHandler8 (event: any){
    this.userAns.push(event.target.value);
  }
  radioChangeHandler9 (event: any){
    this.userAns.push(event.target.value);
  }
  radioChangeHandler10 (event: any){
    this.userAns.push(event.target.value);
  }
  gradeQuiz():number{
      var count=0;
      for(let i = 0; i< this.corAns.length;i++){
        if(this.userAns[i] == this.corAns[i]){
          count++;
        }else{
          console.log(this.userAns[i]);
          console.log(this.corAns[i]);
          this.incorrectN.push(i+1);
          this.correctA.push(" Option "+this.corAns[i]);
        }
      }
      return count;
  }
  getGrade():void{
      if(confirm("Are you sure you answered all the questions?")){
        var grade:string="Your grade is "+this.gradeQuiz()+"/10.\n";
      var resp:string="Question numbers you got wrong: "+this.incorrectN+".\n";
      var resp1: string="The correct answers for those questions:"+this.correctA+".";
      alert(grade + resp + resp1);
      }
  }

}

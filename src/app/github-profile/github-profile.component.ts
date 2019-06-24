import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(
    
    private router: Router,
    private yo: ActivatedRoute) { }

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get("id");
    // console.log(id);

    this.yo.paramMap.subscribe(params=>{
      let id = +params.get("id")
      console.log(id);
    })

  }

  submit(){
    this.router.navigate(['/followers'],{
      queryParams:{page:1,order:'newest'}
    })
  }

}

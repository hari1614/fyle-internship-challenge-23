import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-paginate',
    templateUrl: './Paginate.component.html',
    styleUrls: ['./Paginate.component.scss']
})

export class PaginateComponent {
    @Input() total:any;
    @Input() current: any;
    @Input() perPage: any;
    @Output() pageChange = new EventEmitter();
    pages: any = [];

    constructor(){

    }

    ngOnInit(){
        console.log('page: ', this.total, this.current, this.perPage)
        for(let i = 0; i < this.total / this.perPage; i++){
            this.pages.push(i + 1);
        }
        console.log(this.pages)
    }

    pageAction(page:any){
        if(page == 'prev'){
            page = this.current - 1
        } else if(page == 'next'){
            page = this.current + 1
        }
        this.pageChange.emit(page)
    }
}
import { Component, OnInit, Input } from '@angular/core';
import { Pictures } from 'src/app/class/Pictures';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  url: any;
	msg = "";
	description = "";
	pictures: Pictures[] = [];
	pic: Pictures | undefined;

    constructor(private dialog: MatDialog) {}


  ngOnInit(): void {
  }

  	openDialog(pic: { url: any; desc: any; }) : void 
	{
		const dialogRef = this.dialog.open(DialogComponent, {
			width: '250px',
			data: {url: pic.url, desc: pic.desc},
		  });
	  
		  dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
			if(result)
			{
				pic.desc = result;
			}
		  });
	}
	selectFile(event: any) { 
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = `Uploaded ${event.target.files[0].name}`;
			this.url = reader.result; 
			this.pic = new Pictures();
			this.pic.url = this.url;
			this.pic.desc = event.target.files[0].name;
			this.pictures.push(this.pic)
			console.log(this.pic)
		}
	}
}

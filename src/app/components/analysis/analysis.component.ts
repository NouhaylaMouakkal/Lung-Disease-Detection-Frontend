import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrl: './analysis.component.css'
})
export class AnalysisComponent {
  selectedFile: any = null;
  @ViewChild('fileInput') fileInput!: ElementRef;
  // selectedFile: File | null = null;
  preview: string | ArrayBuffer | null = null;

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  handleFileSelect(event: any): void {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onloadend = () => {
        this.preview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  clearSelection(): void {
    this.selectedFile = null;
    this.preview = null;
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

  analyzeImage(): void {
    // Implement your image analysis logic here
    console.log('Analyzing image:', this.selectedFile);
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndDropFilesComponent } from './drag-and-drop-files.component';

describe('DragAndDropFilesComponent', () => {
  let component: DragAndDropFilesComponent;
  let fixture: ComponentFixture<DragAndDropFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DragAndDropFilesComponent]
    });
    fixture = TestBed.createComponent(DragAndDropFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

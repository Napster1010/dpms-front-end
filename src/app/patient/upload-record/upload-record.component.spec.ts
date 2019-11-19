import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadRecordComponent } from './upload-record.component';

describe('UploadRecordComponent', () => {
  let component: UploadRecordComponent;
  let fixture: ComponentFixture<UploadRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

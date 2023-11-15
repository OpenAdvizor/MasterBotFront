import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteUrlComponent } from './website-url.component';

describe('WebsiteUrlComponent', () => {
  let component: WebsiteUrlComponent;
  let fixture: ComponentFixture<WebsiteUrlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsiteUrlComponent]
    });
    fixture = TestBed.createComponent(WebsiteUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeNotSelectedComponent } from './recipe-not-selected.component';

describe('RecipeNotSelectedComponent', () => {
  let component: RecipeNotSelectedComponent;
  let fixture: ComponentFixture<RecipeNotSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeNotSelectedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipeNotSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

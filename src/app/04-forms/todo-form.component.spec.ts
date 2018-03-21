import { TodoFormComponent } from './todo-form.component';
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should init form with two controls', () => {
    expect(component.form.get('name')).toBeTruthy();
    expect(component.form.get('email')).toBeTruthy();
  });

  it('should be invalid name if it is empty', () => {
    component.form.patchValue({name: ''});

    expect(component.form.get('name').valid).toBeFalsy();
  });
});

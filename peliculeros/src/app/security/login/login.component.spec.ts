import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { SecurityService } from '../security.service';
import { UserServiceMock } from '../../shared/testing/UserServiceMock';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;
  let securityServiceMock: SecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        LoginComponent
      ],
      providers: [
        { provide: SecurityService, useValue: new UserServiceMock() }
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    securityServiceMock = fixture.debugElement.injector.get(SecurityService);
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render component', () => {
    let header: HTMLElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(header.textContent).toContain('Por favor identifícate');
  });

  it('should call alRegistrar()', () => {
    spyOn(component, 'alRegistrar').and.callThrough();
    let button = fixture.debugElement.queryAll(By.css('button'))[0].nativeElement;
    button.click();
    expect(component.alRegistrar).toHaveBeenCalled();
  });

  it('should call postUser$() from alRegistrar()', () => {
    spyOn(securityServiceMock, 'postUser$').and.callThrough();
    let button = fixture.debugElement.queryAll(By.css('button'))[0].nativeElement;
    button.click();
    expect(securityServiceMock.postUser$).toHaveBeenCalled();
  });

  it('should call alEntrar()', () => {
    spyOn(component, 'alEntrar').and.callThrough();
    let button = fixture.debugElement.queryAll(By.css('button'))[1].nativeElement;
    button.click();
    expect(component.alEntrar).toHaveBeenCalled();
  });

  it('should call postSesion$() from alEntrar()', () => {
    spyOn(securityServiceMock, 'postSesion$').and.callThrough();
    let button = fixture.debugElement.queryAll(By.css('button'))[1].nativeElement;
    button.click();
    expect(securityServiceMock.postSesion$).toHaveBeenCalled();
  });
});

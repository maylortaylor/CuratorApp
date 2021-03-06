import { Inject, Input, ChangeDetectorRef, Component, OnInit, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder } 
    from '@angular/forms';
import { SidebarService } from '../../core/services/sidebar.service';
import { ThemeService } from '../topnav-menu/services/theme.service';
import { AuthService } from '../../core/auth/auth.service';
import { SnackBarService } from '../../core/services/snackBar.service';
import { LoggerService } from '../../core/services/logger.service';

@Component({
  selector: 'app-top-nav-menu',
  templateUrl: './topnav-menu.component.html',
  styleUrls: ['./topnav-menu.component.less']
})

export class TopNavMenuComponent implements OnInit {
    searchForm: FormGroup;
    searchText = new FormControl("", Validators.required);
    @Input() isMobile: boolean;
    sideNavIsOpen = false;
    isDarkTheme: boolean = false;
    isLoggedIn: boolean = false;
    email: string;
    password: string;

    constructor(
        private _sideBarService: SidebarService,
        private _theme: ThemeService,
        private cd: ChangeDetectorRef,
        private _logger: LoggerService,
        public dialog: MatDialog,
        public authService: AuthService,
        private _snackBar: SnackBarService,
        private fb: FormBuilder
    ) {
        this.searchForm = fb.group({
            "searchText": this.searchText,
        });
    }
    searchPage() {
        this._logger.debugLabel("SEARCH TEXT: ", this.searchText);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    search(searchValue) {
        this._snackBar.message(searchValue)
    }
    switchTheme() {
        this._theme.changeTheme();
        this.isDarkTheme = !this.isDarkTheme;
        var message = !!this.isDarkTheme ? "Dark Theme" : "Light Theme";
        this._snackBar.message(message);
    }
    toggleSideNav() {
        this._sideBarService.sideNav.toggle();
        this.sideNavIsOpen = !!this._sideBarService.sideNav.opened ? true : false;
    }
    signIn() {
        if (!this.isLoggedIn){
            // this.isLoggedIn = true;
            let dialogRef = this.dialog.open(LoginDialog, {
                width: '500px',
                // data: { name: 'woo', animal: 'dog' }
              });

              dialogRef.afterClosed().subscribe(result => {
                this._logger.info('The dialog was closed')
                //  debugger;
              });
        }
    }
    signOut() {
        if (this.isLoggedIn) {
            this.isLoggedIn = false;
        }
    }
}

@Component({
    selector: 'login-dialog',
    templateUrl: 'login-dialog.html',
  })
  export class LoginDialog {
    email: string;
    password: string;
    constructor(
        public dialogRef: MatDialogRef<LoginDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public authService: AuthService
    ) { }

    onNoClick(): void {
      this.dialogRef.close();
    }


    signup() {
        this.authService.signup(this.email, this.password);
        this.email = this.password = '';
    }

    login() {
        this.authService.signInWithGoogle();
        // this.authService.login(this.email, this.password);
        this.email = this.password = '';
    }

    signInWithGoogle() {
        this.authService.signInWithGoogle();
    }

    signInAnonymously() {
        this.authService.signInAnonymously();
    }

    logout() {
        this.authService.logout();
    }

  }
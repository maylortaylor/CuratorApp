import { Injectable, Inject } from '@angular/core';
import { MatSnackBar,
            MatSnackBarConfig,
            MatSnackBarHorizontalPosition,
            MatSnackBarVerticalPosition } from '@angular/material';
@Injectable()
export class SnackBarService {
    config: MatSnackBarConfig = new MatSnackBarConfig();
    autoHide: boolean = true;
    constructor(
        private snackBar: MatSnackBar
    ) {
        // https://material.angular.io/components/snack-bar/api#MatSnackBarConfig
        this.config.announcementMessage = "Notification Alert";
        this.config.horizontalPosition = "right"; // start, end, left, right, center
        this.config.verticalPosition = "bottom"; // bottom, top
        this.config.duration = !!this.autoHide ? 3000 : 0;
    }

    // Simple message.
    message(message: string) {
        let snackBarRef = this.snackBar.open(message, null, this.config);
        return snackBarRef;
    }

    // Simple message with an action.
    messageWithAction(message: string, action: string) {
        let snackBarRef = this.snackBar.open(message, action, this.config);
        return snackBarRef;
    }
    dismiss() {
        return this.snackBar.dismiss();
    }
}
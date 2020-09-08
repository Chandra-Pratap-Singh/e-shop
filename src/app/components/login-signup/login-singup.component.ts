import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { LOGIN_SINGUP_DISPLAY } from "src/app/store/actions/action-types";

@Component({
  selector: "app-login-singup",
  templateUrl: "./login-singup.component.html",
  styleUrls: ["./login-singup.component.css"],
})
export class LoginSingupComponent implements OnInit, OnDestroy {
  // state:Observable<{loginSignupDisplay:string}>
  loginSignupDisplay: string = "";
  displaySubscription: Subscription;

  constructor(
    private store: Store<{ loginSignup: { loginSignupDisplay: string } }>
  ) {}

  ngOnInit() {
    this.displaySubscription = this.store
      .select("loginSignup")
      .subscribe((state) => {
        this.loginSignupDisplay = state.loginSignupDisplay;
        console.log(this.loginSignupDisplay);
      });
  }

  switchDisplay = (display) => {
    console.log("clicked ", display);
    this.store.dispatch({ type: LOGIN_SINGUP_DISPLAY, payload: display });
  };

  ngOnDestroy() {
    this.displaySubscription.unsubscribe();
  }
}

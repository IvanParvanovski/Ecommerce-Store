import { RouterModule, Routes } from "@angular/router";
import { UserProfileComponent } from "./user-profile/user-profile.component";

const routes: Routes = [
    {
        path: 'profile',
        component: UserProfileComponent
    },
]

export const ProfileRoutingModule = RouterModule.forChild(routes);

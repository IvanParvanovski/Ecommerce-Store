import { RouterModule, Routes } from "@angular/router";
import { BagComponent } from "./bag/bag.component";

const routes: Routes = [
    {
        path: 'bag',
        component: BagComponent,
    },
]

export const PurchaseRoutingModule = RouterModule.forChild(routes);
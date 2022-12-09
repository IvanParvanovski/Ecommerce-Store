import { RouterModule, Routes } from "@angular/router";
import { CatalogueComponent } from "./catalogue/catalogue.component";

const routes: Routes = [
    {
        path: 'catalogue',
        component: CatalogueComponent
    },
    
]

export const CatalogueRoutingModule = RouterModule.forChild(routes);

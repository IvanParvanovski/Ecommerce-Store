import { RouterModule, Routes } from "@angular/router";
import { BlogComponent } from "./blog/blog.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'blog/:id',
        component: DetailsComponent
    }
]

export const BlogRoutingModule = RouterModule.forChild(routes);

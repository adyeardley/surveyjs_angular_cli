import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "./pages/home.page";
import { SurveyPage } from "./pages/survey.page";
import { CreatorPage } from "./pages/creator.page";
import { AnalyticsPage } from "./pages/analytics.page";
import { PdfExportPage } from "./pages/pdfexport.page";

const routes: Routes = [
  { path: "", component: HomePage },
  { path: "survey", component: SurveyPage },
  { path: "creator", component: CreatorPage },
  { path: "analytics", component: AnalyticsPage },
  { path: "pdfexport", component: PdfExportPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

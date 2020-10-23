import HeaderComponent from "../components/HeaderComponent/HeaderComponent";

import SidebarComponent from "../components/SidebarComponent/SidebarComponent";
import SummaryStandupComponent from "../components/BodyComponent/SummaryStandupComponents/SummaryStandupComponent";
import MyStandupsComponent from "../components/BodyComponent/MyStandupsComponents/MyStandupsComponent";
import QuestionsTemplateComponent from "../components/BodyComponent/QuestionsTemplateComponent/QuestionsTemplateComponent";
import ReportComponent from "../components/BodyComponent/ReportComponent/ReportComponent"


const ComponentKeyMappings = {
"HeaderComponent": HeaderComponent,
"SidebarComponent": SidebarComponent,
"SummaryStandupComponent":SummaryStandupComponent,
"MyStandupsComponent":MyStandupsComponent,
"QuestionsTemplateComponent":QuestionsTemplateComponent,
"ReportComponent": ReportComponent
};

export default ComponentKeyMappings;
import LayoutTemplateStore from './LayoutTemplateStore'
import LanguageStore from './LanguageStore'
import SummaryStandupStore from './SummaryStandupStore';
import MyStandupStore from './MyStandupStore';
import QuestionsTemplateStore from './QuestionsTemplateStore';
import ReportStore from './ReportStore'
export const initStore = () => ({
  LayoutTemplateStore: new LayoutTemplateStore(),
  LanguageStore: new LanguageStore(),
  SummaryStandupStore: new SummaryStandupStore(),
  MyStandupStore: new MyStandupStore(),
  QuestionsTemplateStore: new QuestionsTemplateStore(),
  ReportStore: new ReportStore()
})

let instanceStores
export const getInstanceStores = () => {
  if (!instanceStores) {
    instanceStores = initStore()
  }
  return instanceStores
}

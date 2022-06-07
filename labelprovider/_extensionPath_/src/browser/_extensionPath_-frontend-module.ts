/**
 * Generated using theia-extension-generator
 */
import { LabelProviderContribution } from "@theia/core/lib/browser";
import { ContainerModule } from "@theia/core/shared/inversify";
import { /* @echo extensionPrefix */LabelProviderContribution } from './/* @echo extensionPath */-contribution';
import '../../src/browser/style/example.css';

export default new ContainerModule(bind => {
    bind(LabelProviderContribution).to(/* @echo extensionPrefix */LabelProviderContribution);
});
